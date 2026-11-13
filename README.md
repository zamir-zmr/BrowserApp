# Browser App V4

Chrome-style browser PWA. No build step, no backend, no external services.

- `index.html` - the whole app (opens straight to the Chrome-style home page)
- `manifest.json`, `sw.js`, icons - PWA install + offline shell
- `vercel.json` - optional static hosting headers

All tabs, history, searches, bookmarks and settings are stored only in the browser's local storage on each device.
Serve over HTTPS (GitHub Pages, Vercel, Netlify, ...) to enable "Install app" / "Add to Home Screen".
