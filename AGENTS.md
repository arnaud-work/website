# AGENTS.md — Arnaud Work `website`

This repository is the public landing page for [arnaud.work](https://arnaud.work),
Bérenger's freelance micro-entreprise. Org-wide rules live in
[arnaud-work/.dev/AGENTS.md](https://github.com/arnaud-work/.dev/blob/main/AGENTS.md)
— this file only adds project-specific detail.

## Language

Code, comments, commit messages, and documentation are in English, per the
org-wide rule. **Exception: the page's own visible copy is in French** — it's
addressed to the business's real (French-speaking) audience.

## Stack

Qwik City, deployed to Cloudflare Workers (static assets + a thin SSR worker,
via `@builder.io/qwik-city`'s Cloudflare Pages adapter — same adapter reused
for a plain Workers deploy, see `adapters/cloudflare-workers/`). Single page,
single route (`src/routes/index.tsx`) — no database, no client-side state
beyond what Qwik City itself needs.

## Project Structure

```
website/
├── adapters/cloudflare-workers/vite.config.ts   # Build config for the Workers target
├── public/                                       # Static assets (favicon, manifest, _headers)
├── src/
│   ├── components/router-head/                   # <head> tag renderer (boilerplate)
│   ├── routes/
│   │   ├── layout.tsx                             # Root layout (minimal wrapper)
│   │   └── index.tsx                              # The landing page — all real content here
│   ├── entry.ssr.tsx                              # SSR entry (build/preview/production)
│   ├── entry.dev.tsx                               # Client-only dev entry
│   ├── entry.preview.tsx                           # `pnpm preview` entry
│   ├── entry.cloudflare-pages.tsx                  # Cloudflare Workers fetch handler
│   ├── global.css                                  # Hand-written CSS — no framework
│   └── root.tsx                                    # <QwikCityProvider> shell
├── wrangler.jsonc                                  # Cloudflare Workers config (apex domain route)
└── .github/workflows/deploy.yml                    # CI: build + wrangler deploy
```

## What NOT to do here

- Don't reach for Tailwind/daisyUI/an icon library for this page — it's a
  single static-ish landing page; `global.css` covers it. Add a framework
  only when the page's actual needs outgrow hand-written CSS.
- Don't add a database, auth, or client-side app state — that's out of scope
  for a marketing page. If arnaud-work ever needs an actual app, that's a new
  sibling repo, not a feature bolted onto `website`.

## Deploying

CI (`.github/workflows/deploy.yml`) builds and runs `wrangler deploy` on
every push to `main`, using `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID`
repo (or org) secrets — **not yet set**, so CI will fail until they're added.
See `README.md` for the full manual setup checklist (secrets, DNS/zone).

## Git workflow

Solo micro-entreprise, single maintainer — push straight to `main`, no PR
needed, per the org-wide `.dev/AGENTS.md`.
