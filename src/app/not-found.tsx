import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-5 text-center">
      <p className="text-sm text-accent">404</p>
      <h1 className="text-3xl font-semibold">Ez az oldal nem található</h1>
      <Link href="/" className="rounded-full bg-accent px-6 py-3 text-white">Vissza a főoldalra</Link>
    </main>
  );
}
