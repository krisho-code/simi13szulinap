import { NextResponse } from "next/server";
import { validateContact, type ContactInput } from "@/lib/contact";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: Request) {
  let body: Partial<ContactInput>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Hibás kérés." }, { status: 400 });
  }

  // Honeypot: bots fill the hidden field. Pretend success so they don't retry.
  if (body.website) return NextResponse.json({ ok: true });

  const errors = validateContact(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  try {
    await sendContactEmail({
      name: body.name!.trim(),
      email: body.email!.trim(),
      budget: body.budget?.trim() ?? "",
      message: body.message!.trim(),
      consent: true,
      website: "",
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json({ ok: false, error: "Az üzenetet most nem sikerült elküldeni. Kérlek próbáld újra később." }, { status: 502 });
  }
}
