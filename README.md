# React + Vite Clean Starter

Ein minimaler, sicherer Startpunkt für React + Vite, der auf allen gängigen Hosts funktioniert.

## Los geht's

```bash
npm install
npm run dev
npm run build
npm run preview
```

### Deployment-Hinweise (Kurz)

- **Netlify**: `public/_redirects` ist enthalten. Lade den `dist/`-Ordner hoch oder verbinde dein Repo.
- **Vercel**: `vercel.json` ist enthalten (SPA-Rewrite). Verbinde das Repo bei Vercel.
- **GitHub Pages** (einfachste Variante): Verwende `HashRouter` in deiner App **oder** setze `base` in `vite.config.js` auf `/<repo-name>/` und veröffentliche mit `npm run build && npm run deploy:gh`.
