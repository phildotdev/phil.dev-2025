import type { APIRoute } from "astro";
import { Resend } from "resend";
import { verifyTurnstile } from "../../lib/turnstile";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

function getClientIP(request: Request): string {
  const xForwardedFor = request.headers.get("x-forwarded-for");
  const xRealIp = request.headers.get("x-real-ip");
  const cfConnectingIp = request.headers.get("cf-connecting-ip");

  if (xForwardedFor) {
    return xForwardedFor.split(",")[0].trim();
  }
  if (xRealIp) {
    return xRealIp;
  }
  if (cfConnectingIp) {
    return cfConnectingIp;
  }

  return "unknown";
}

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .substring(0, 1000); // Limit length
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const clientIP = getClientIP(request);

    const formData = await request.formData();
    const name = sanitizeInput((formData.get("name") as string) || "");
    const email = sanitizeInput((formData.get("email") as string) || "");
    const message = sanitizeInput((formData.get("message") as string) || "");
    const website = (formData.get("website") as string) || ""; // Honeypot
    const turnstileToken =
      (formData.get("cf-turnstile-response") as string) || "";

    if (website.length > 0) {
      return new Response(JSON.stringify({ error: "Invalid submission" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (name.length > 100 || email.length > 255 || message.length > 1000) {
      return new Response(JSON.stringify({ error: "Input too long" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!(await verifyTurnstile(turnstileToken, clientIP))) {
      return new Response(
        JSON.stringify({ error: "CAPTCHA verification failed" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const { error } = await resend.emails.send({
      from: import.meta.env.RESEND_FROM_EMAIL,
      to: [import.meta.env.RESEND_TO_EMAIL],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>IP Address:</strong> ${clientIP}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toISOString()}</small></p>
      `,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("API error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
