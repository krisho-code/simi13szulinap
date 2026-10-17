import Link from "next/link";
import { nav, site } from "@/config/site";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-bg/70 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {site.name}<span className="text-accent">.</span>
        </Link>
        <nav aria-label="Főmenü" className="hidden items-center gap-7 text-sm text-muted md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-fg">{n.label}</a>
          ))}
        </nav>
        <a href="#kapcsolat" className="rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition hover:bg-accent hover:text-white">
          Ajánlatkérés
        </a>
      </div>
    </header>
  );
}
