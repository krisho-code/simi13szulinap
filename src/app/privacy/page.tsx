import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";

export const metadata: Metadata = { title: "Adatkezelési tájékoztató" };

// TODO: replace with a reviewed privacy notice (data controller details, legal basis, retention, rights) before launch.
export default function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-24">
      <Link href="/" className="text-sm text-accent">← Vissza a főoldalra</Link>
      <h1 className="mt-6 text-3xl font-semibold">Adatkezelési tájékoztató</h1>
      <div className="mt-6 space-y-4 text-muted">
        <p>Ez egy előzetes helyőrző szöveg. Éles indulás előtt ide kerül a teljes, jogilag átnézett tájékoztató.</p>
        <p>A kapcsolatfelvételi űrlapon megadott adataidat (név, e-mail cím, üzenet) kizárólag az ajánlatkérésed megválaszolása érdekében kezeljük, e-mailben továbbítva a(z) {site.name} számára.</p>
        <p>Kérdés esetén írj ide: {site.email}</p>
      </div>
    </main>
  );
}
