# arnaud.work — website

Landing page for [Arnaud Work](https://github.com/arnaud-work), Bérenger's freelance
micro-entreprise. Built with [Qwik City](https://qwik.dev/), deployed to
Cloudflare Workers.

## Local development

```bash
pnpm install
pnpm dev        # Vite dev server, http://localhost:5173
```

```bash
pnpm build      # Production build (client + Cloudflare Workers server bundle)
pnpm serve      # wrangler dev — local Worker preview against the built output
pnpm typecheck
pnpm lint
```

## Deployment status — manual setup still needed

CI (`.github/workflows/deploy.yml`) is wired up but **will not deploy
successfully yet**. Before it can:

1. **Add repo (or org) secrets** on `arnaud-work/website` (or `arnaud-work`):
   - `CLOUDFLARE_API_TOKEN` — a Cloudflare API token scoped to Workers deploy
     for this project.
   - `CLOUDFLARE_ACCOUNT_ID` — the target Cloudflare account ID.
2. **Add the `arnaud.work` zone** to that Cloudflare account (if not already
   there) and point its nameservers at Cloudflare. `wrangler.jsonc` routes the
   apex domain to this Worker as a Custom Domain — that only takes effect
   once the zone exists in the same account the deploy targets.
3. **Replace the placeholder copy** in `src/routes/index.tsx` — it's marked
   with `TODO` comments — with the real positioning/description for the
   business.

## Structure

See [`AGENTS.md`](./AGENTS.md) for the full project layout and the reasoning
behind the stack choices.
