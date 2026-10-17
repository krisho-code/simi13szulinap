# Web agency site

Next.js (App Router) + Tailwind CSS v4. Frontend complete; only Resend needs to be connected.

## Develop

```bash
npm install
cp .env.example .env.local
npm run dev
```

Without `RESEND_API_KEY` the contact form works end to end but only logs submissions to the server console.

## Where to edit

- `src/config/site.ts` – brand name, contact email, all copy (services, process, projects, pricing, FAQ)
- `src/app/privacy/page.tsx` – placeholder privacy notice (needs a real one before launch)
- `src/app/globals.css` – color tokens

## Go-live checklist

1. Replace placeholders (`name`, `email`, projects, prices) in `src/config/site.ts`; write the real privacy notice.
2. Push to GitHub, import the repo in Vercel, set `NEXT_PUBLIC_SITE_URL` to the final domain.
3. Buy the domain, connect it to Vercel.
4. In Resend: add the domain, add the DNS records (SPF/DKIM), wait for verification, create an API key.
5. In Vercel env vars set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (e.g. `Agency <hello@yourdomain.com>`), `CONTACT_TO_EMAIL`. Redeploy.

The Resend call lives in `src/lib/email.ts` (plain REST, no SDK). Spam protection is a honeypot field; add rate limiting (e.g. Vercel WAF / Upstash) if you see abuse.

`archive/` holds the previous static page that was in this repo.
