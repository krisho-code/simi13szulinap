// Single source of truth for brand + copy. Replace the placeholders before launch.
export const site = {
  name: "Webműhely", // TODO: final agency name
  tagline: "Weboldalak, amik ügyfeleket hoznak.",
  description:
    "Egyéni vállalkozóként tervezek, fejlesztek és üzemeltetek gyors, modern weboldalakat kisvállalkozásoknak.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "hello@example.com", // TODO: real public contact address
  locale: "hu_HU",
} as const;

export const nav = [
  { href: "#szolgaltatasok", label: "Szolgáltatások" },
  { href: "#folyamat", label: "Folyamat" },
  { href: "#munkak", label: "Munkák" },
  { href: "#csomagok", label: "Csomagok" },
  { href: "#gyik", label: "GYIK" },
] as const;

export const services = [
  {
    title: "Bemutatkozó weboldal",
    text: "Gyors, mobilbarát, SEO-ra előkészített oldal, ami hitelesen mutatja be a vállalkozásodat.",
    icon: "layout",
  },
  {
    title: "Landing page",
    text: "Egy cél, egy üzenet: kampányokhoz és hirdetésekhez optimalizált, konverzióra tervezett oldal.",
    icon: "target",
  },
  {
    title: "Egyedi webalkalmazás",
    text: "Foglalórendszer, ügyfélportál, belső eszköz – ha a sablon már nem elég.",
    icon: "code",
  },
  {
    title: "Üzemeltetés és support",
    text: "Tárhely, domain, biztonsági frissítések, mentések és apró módosítások havidíjas keretben.",
    icon: "shield",
  },
] as const;

export const steps = [
  { step: "01", title: "Egyeztetés", text: "Megbeszéljük a céljaidat, a célközönséget és a költségkeretet. Ingyenes, kötelezettség nélkül." },
  { step: "02", title: "Terv és ajánlat", text: "Fix áras ajánlatot kapsz, struktúratervvel és ütemezéssel. Nincs rejtett költség." },
  { step: "03", title: "Fejlesztés", text: "Heti rendszerességgel látod az élő előnézetet, és menet közben szólhatsz bele." },
  { step: "04", title: "Indulás és utógondozás", text: "Élesítés, mérés beállítása, betanítás – utána is számíthatsz rám." },
] as const;

// Placeholder projects – swap for real case studies (image field is optional for later).
export const projects = [
  { title: "Példa Étterem", category: "Bemutatkozó oldal", result: "+38% asztalfoglalás online", tint: "from-indigo-500/40 to-fuchsia-500/20" },
  { title: "Minta Fitness", category: "Landing page", result: "2,4x több jelentkező", tint: "from-emerald-500/40 to-cyan-500/20" },
  { title: "Teszt Könyvelő Iroda", category: "Weboldal + support", result: "0,9 mp betöltés", tint: "from-amber-500/40 to-rose-500/20" },
] as const;

export const plans = [
  {
    name: "Starter",
    price: "199 000 Ft-tól",
    blurb: "Egyszerű bemutatkozó oldal induló vállalkozásoknak.",
    features: ["Akár 3 aloldal", "Mobilbarát design", "Kapcsolatfelvételi űrlap", "Alap SEO beállítás", "1 hónap támogatás"],
    highlight: false,
  },
  {
    name: "Business",
    price: "389 000 Ft-tól",
    blurb: "Teljes értékű céges weboldal, mérésre és növekedésre felkészítve.",
    features: ["Akár 8 aloldal", "Egyedi design", "Analitika + konverziómérés", "Blog / hírek modul", "3 hónap támogatás"],
    highlight: true,
  },
  {
    name: "Custom",
    price: "Egyedi ajánlat",
    blurb: "Webalkalmazás vagy összetettebb rendszer.",
    features: ["Igényfelmérés", "Egyedi funkciók", "Integrációk", "Skálázható architektúra", "Hosszú távú üzemeltetés"],
    highlight: false,
  },
] as const;

export const faqs = [
  { q: "Mennyi idő alatt készül el egy weboldal?", a: "Egy bemutatkozó oldal jellemzően 2–4 hét, a tartalmak beérkezésétől függően. Összetettebb projekteknél ezt az ajánlatban rögzítjük." },
  { q: "Én vagyok a weboldal tulajdonosa?", a: "Igen. A domain, a tárhely és a forráskód is a te nevedre kerül – nincs bezárt rendszer." },
  { q: "Tudom magam szerkeszteni a tartalmat?", a: "Igen, kérésre egyszerű szerkesztőfelületet építek, és betanítalak a használatára." },
  { q: "Mi van az indulás után?", a: "Választhatsz havidíjas üzemeltetést (frissítések, mentések, módosítások), vagy eseti megbízásban is dolgozhatunk." },
  { q: "Hogyan számláztok?", a: "Egyéni vállalkozóként számlázok, fix áras ajánlat alapján, általában 50% előleggel és 50% átadáskor." },
] as const;
