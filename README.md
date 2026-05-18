# Alisha Aggarwal — Portfolio (React + Vite)

Plain React version, ready to deploy on Netlify.

## Local dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
Output goes to `dist/`.

## Deploy on Netlify
**Option A — drag & drop**
1. `npm install && npm run build`
2. Go to https://app.netlify.com/drop and drop the `dist/` folder.

**Option B — connect GitHub**
1. Push this folder to a GitHub repo.
2. In Netlify: Add new site → Import from Git → pick the repo.
3. Build command: `npm run build` · Publish dir: `dist` (already set in `netlify.toml`).
