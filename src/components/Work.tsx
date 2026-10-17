import { projects } from "@/config/site";
import { Section } from "./Section";

export function Work() {
  return (
    <Section id="munkak" eyebrow="Munkák" title="Válogatás a projektekből" intro="A megjelenített példák helyőrzők – az első valódi referenciák kerülnek ide.">
      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className={`aspect-[4/3] bg-gradient-to-br ${p.tint}`} role="img" aria-label={`${p.title} előnézet`} />
            <div className="p-6">
              <p className="text-xs uppercase tracking-wider text-muted">{p.category}</p>
              <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm text-accent">{p.result}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
