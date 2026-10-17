"use client";

import { useState } from "react";
import { BUDGETS, type FieldErrors } from "@/lib/contact";
import { site } from "@/config/site";
import { Section } from "./Section";

type Status = "idle" | "sending" | "success" | "error";

const field = "mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 outline-none transition focus:border-accent";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setErrors({});
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          budget: data.get("budget"),
          message: data.get("message"),
          consent: data.get("consent") === "on",
          website: data.get("website"),
        }),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        form.reset();
        setStatus("success");
        return;
      }
      if (json.errors) setErrors(json.errors);
      setServerError(json.error ?? "");
      setStatus("error");
    } catch {
      setServerError("Hálózati hiba történt. Kérlek próbáld újra.");
      setStatus("error");
    }
  }

  return (
    <Section id="kapcsolat" eyebrow="Kapcsolat" title="Beszéljük meg a projektedet" intro={`Írj pár sort, és 1 munkanapon belül válaszolok. Vagy írj közvetlenül: ${site.email}`}>
      {status === "success" ? (
        <div role="status" className="max-w-2xl rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-8">
          <h3 className="text-xl font-semibold">Köszönöm az üzeneted!</h3>
          <p className="mt-2 text-muted">Hamarosan jelentkezem a megadott e-mail címen.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className="max-w-2xl space-y-5 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm">Név
              <input name="name" autoComplete="name" required className={field} aria-invalid={!!errors.name} />
              {errors.name && <span className="mt-1 block text-xs text-rose-400">{errors.name}</span>}
            </label>
            <label className="block text-sm">E-mail
              <input name="email" type="email" autoComplete="email" required className={field} aria-invalid={!!errors.email} />
              {errors.email && <span className="mt-1 block text-xs text-rose-400">{errors.email}</span>}
            </label>
          </div>
          <label className="block text-sm">Költségkeret
            <select name="budget" defaultValue="" className={field}>
              <option value="">Válassz (opcionális)</option>
              {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </label>
          <label className="block text-sm">Miben segíthetek?
            <textarea name="message" rows={5} required className={field} aria-invalid={!!errors.message} />
            {errors.message && <span className="mt-1 block text-xs text-rose-400">{errors.message}</span>}
          </label>

          {/* Honeypot – hidden from people, bots tend to fill it */}
          <div aria-hidden className="absolute -left-[9999px]">
            <label>Weboldal<input name="website" tabIndex={-1} autoComplete="off" /></label>
          </div>

          <label className="flex items-start gap-3 text-sm text-muted">
            <input name="consent" type="checkbox" className="mt-1 h-4 w-4 accent-[var(--color-accent)]" />
            <span>Elfogadom az <a href="/privacy" className="text-accent underline">adatkezelési tájékoztatót</a>.</span>
          </label>
          {errors.consent && <span className="block text-xs text-rose-400">{errors.consent}</span>}

          {serverError && <p role="alert" className="text-sm text-rose-400">{serverError}</p>}

          <button type="submit" disabled={status === "sending"} className="w-full rounded-full bg-accent px-7 py-3.5 font-medium text-white transition hover:brightness-110 disabled:opacity-60 sm:w-auto">
            {status === "sending" ? "Küldés…" : "Üzenet küldése"}
          </button>
        </form>
      )}
    </Section>
  );
}
