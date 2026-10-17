import type { ContactInput } from "./contact";

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/**
 * Sends the lead to your inbox through the Resend REST API.
 * No SDK needed. Without RESEND_API_KEY it only logs (local dev / before the domain is verified).
 */
export async function sendContactEmail(input: ContactInput): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.warn("[contact] Resend is not configured – logging submission instead:", {
      name: input.name,
      email: input.email,
      budget: input.budget,
      message: input.message,
    });
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: input.email,
      subject: `Új ajánlatkérés – ${input.name}`,
      text: `Név: ${input.name}\nE-mail: ${input.email}\nKeret: ${input.budget || "-"}\n\n${input.message}`,
      html: `<h2>Új ajánlatkérés</h2>
<p><strong>Név:</strong> ${escapeHtml(input.name)}<br>
<strong>E-mail:</strong> ${escapeHtml(input.email)}<br>
<strong>Keret:</strong> ${escapeHtml(input.budget || "-")}</p>
<p style="white-space:pre-wrap">${escapeHtml(input.message)}</p>`,
    }),
  });

  if (!res.ok) {
    throw new Error(`Resend responded with ${res.status}: ${await res.text()}`);
  }
}
