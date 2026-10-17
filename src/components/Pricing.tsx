import { plans } from "@/config/site";
import { Icon } from "./Icon";
import { Section } from "./Section";

export function Pricing() {
  return (
    <Section id="csomagok" eyebrow="Csomagok" title="Átlátható árak" intro="Az árak tájékoztató jellegűek; a végleges összeg az igényfelmérés után, fix ajánlatban derül ki.">
      <div className="grid gap-5 md:grid-cols-3">
        {plans.map((p) => (
          <article key={p.name} className={`flex flex-col rounded-2xl border p-7 ${p.highlight ? "border-accent bg-accent/10" : "border-border bg-surface"}`}>
            {p.highlight && <span className="mb-3 w-fit rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">Legnépszerűbb</span>}
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-2 text-2xl font-semibold">{p.price}</p>
            <p className="mt-2 text-sm text-muted">{p.blurb}</p>
            <ul className="mt-6 flex-1 space-y-3 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{f}</li>
              ))}
            </ul>
            <a href="#kapcsolat" className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-medium transition ${p.highlight ? "bg-accent text-white hover:brightness-110" : "border border-border hover:bg-bg"}`}>
              Ajánlatot kérek
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
