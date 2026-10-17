import { faqs } from "@/config/site";
import { Icon } from "./Icon";
import { Section } from "./Section";

export function Faq() {
  return (
    <Section id="gyik" eyebrow="GYIK" title="Gyakori kérdések">
      <div className="max-w-3xl divide-y divide-border rounded-2xl border border-border bg-surface">
        {faqs.map((f) => (
          <details key={f.q} className="group p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
              {f.q}
              <Icon name="plus" className="h-5 w-5 shrink-0 text-accent transition group-open:rotate-45" />
            </summary>
            <p className="mt-3 text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
