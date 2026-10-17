import { site } from "@/config/site";
import { Icon } from "./Icon";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute right-0 top-40 h-[320px] w-[420px] rounded-full bg-accent-2/15 blur-[110px]" />
      </div>
      <div className="mx-auto max-w-4xl px-5 text-center">
        <p className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Új projektekre jelentkezni lehet
        </p>
        <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
          {site.tagline}
          <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent"> Pontosan úgy, ahogy kell.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">{site.description}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#kapcsolat" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-medium text-white transition hover:brightness-110">
            Ingyenes konzultáció <Icon name="arrow" />
          </a>
          <a href="#munkak" className="rounded-full border border-border px-7 py-3.5 font-medium transition hover:bg-surface">
            Referenciák
          </a>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8 text-center">
          {[["< 1 mp", "betöltési cél"], ["100%", "mobilbarát"], ["Fix ár", "rejtett költség nélkül"]].map(([v, l]) => (
            <div key={l}>
              <dt className="text-xl font-semibold sm:text-2xl">{v}</dt>
              <dd className="mt-1 text-xs text-muted sm:text-sm">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
