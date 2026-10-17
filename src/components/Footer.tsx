import Link from "next/link";
import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {site.name}. Minden jog fenntartva.</p>
        <Link href="/privacy" className="hover:text-fg">Adatkezelési tájékoztató</Link>
      </div>
    </footer>
  );
}
