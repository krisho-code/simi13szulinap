import { services } from "@/config/site";
import { Icon } from "./Icon";
import { Section } from "./Section";

export function Services() {
  return (
    <Section id="szolgaltatasok" eyebrow="Szolgáltatások" title="Minden, ami a megbízható online jelenléthez kell" intro="A tervezéstől az üzemeltetésig egy kézben – így nincs átadási veszteség és felesleges egyeztetés.">
      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((s) => (
          <article key={s.title} className="group rounded-2xl border border-border bg-surface p-7 transition hover:border-accent/50">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent"><Icon name={s.icon} /></span>
            <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-muted">{s.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
