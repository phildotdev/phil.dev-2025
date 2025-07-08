export async function verifyTurnstile(
  token: string,
  remoteip?: string
): Promise<boolean> {
  const secretKey = import.meta.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    console.warn("Turnstile secret key not configured");
    return false;
  }

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: token,
          ...(remoteip && { remoteip }),
        }),
      }
    );

    const result = await response.json();
    return result.success === true;
  } catch (error) {
    console.error("Turnstile verification failed:", error);
    return false;
  }
}
