export function Section({ id, eyebrow, title, intro, children }: {
  id: string; eyebrow: string; title: string; intro?: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">{eyebrow}</p>
      <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 max-w-2xl text-muted">{intro}</p>}
      <div className="mt-12">{children}</div>
    </section>
  );
}
