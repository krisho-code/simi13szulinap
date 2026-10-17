export const BUDGETS = ["< 200 000 Ft", "200 000 – 500 000 Ft", "500 000 Ft felett", "Még nem tudom"] as const;

export type ContactInput = {
  name: string;
  email: string;
  budget: string;
  message: string;
  consent: boolean;
  website: string; // honeypot – must stay empty
};

export type FieldErrors = Partial<Record<"name" | "email" | "message" | "consent", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(input: Partial<ContactInput>): FieldErrors {
  const errors: FieldErrors = {};
  const name = input.name?.trim() ?? "";
  const email = input.email?.trim() ?? "";
  const message = input.message?.trim() ?? "";

  if (name.length < 2 || name.length > 100) errors.name = "Kérlek add meg a neved.";
  if (!EMAIL_RE.test(email) || email.length > 200) errors.email = "Érvényes e-mail címet adj meg.";
  if (message.length < 10 || message.length > 5000) errors.message = "Az üzenet legalább 10 karakter legyen.";
  if (input.consent !== true) errors.consent = "Az adatkezelés elfogadása szükséges.";
  return errors;
}
