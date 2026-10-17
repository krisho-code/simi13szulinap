import { steps } from "@/config/site";
import { Section } from "./Section";

export function Process() {
  return (
    <Section id="folyamat" eyebrow="Folyamat" title="Négy lépés az ötlettől az indulásig">
      <ol className="grid gap-5 md:grid-cols-4">
        {steps.map((p) => (
          <li key={p.step} className="rounded-2xl border border-border bg-surface p-6">
            <span className="text-3xl font-semibold text-accent/80">{p.step}</span>
            <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted">{p.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
