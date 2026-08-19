# Ashab Ali Khan — Portfolio

Plain HTML/CSS/JS. No build step, no framework, no backend.

## Run it locally

Pick one:

**Option A — just open the file**
Double-click `index.html`, or open it in your browser directly. Everything works except this can occasionally block `fetch`-style requests in some browsers — not an issue here since there are none, so this is the simplest option.

**Option B — local server (recommended, closer to production)**
```bash
cd portfolio
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

If you have Node instead:
```bash
npx serve .
```

## Before you deploy — replace these placeholders

Search `index.html` for `data-placeholder` — there are 6 links currently pointing to `#`:

| Placeholder | What to put there |
|---|---|
| `linkedin` (×2) | Your real LinkedIn URL |
| `github` (×2) | Your real GitHub profile URL |
| `github-gcc` | GitHub repo link for the GCC Intelligence Platform |
| `demo-gcc` | Hugging Face Space URL for the GCC Intelligence Platform |
| `github-rag` | GitHub repo link for the Arabic RAG Chatbot |
| `demo-rag` | Hugging Face Space URL for the Arabic RAG Chatbot |

Open the browser console (F12) while running the site locally — it'll print a warning listing how many placeholder links are still unset, as a reminder.

Also:
- **Photo**: drop a real headshot into `assets/profile.jpg` (square-ish, at least 500×500px works best). Until you do, the site shows your initials "AK" as a clean fallback — it won't break or look empty.
- **Resume**: `assets/Ashab_Ali_Khan_Resume.pdf` currently holds the resume PDF you uploaded. Replace it with an updated version any time — just keep the same filename, or update the `href` in `index.html` (search for `Ashab_Ali_Khan_Resume.pdf`, appears twice: nav button and hero button) if you rename it.

## File structure

```
portfolio/
├── index.html      # all content lives here
├── style.css        # design system + all styling
├── script.js         # typing effect, scroll animations, tilt, mobile nav, mailto form
├── assets/
│   ├── Ashab_Ali_Khan_Resume.pdf
│   └── profile.jpg   # add this yourself
└── README.md
```

## Deployment (when you're ready)

Three free, zero-config options — say the word and I'll walk you through whichever you pick:

1. **GitHub Pages** — push this folder to a GitHub repo, enable Pages in repo settings. Free `yourusername.github.io/reponame` URL, custom domain supported.
2. **Netlify** — drag-and-drop the folder onto netlify.com/drop for an instant URL, or connect the GitHub repo for auto-deploy on every push.
3. **Vercel** — same idea as Netlify, `vercel.com`, connect the repo or drag-and-drop.

For a UAE/KSA job search, a custom domain (e.g. `ashabalikhan.dev` or `.ai`) is a nice touch and costs ~$10–15/year — happy to help you set that up on whichever host you pick.

## Notes on the design

- **Theme**: near-black navy (`#060a14`) with a signal-blue accent (`#4f8cff`) and cyan/amber used sparingly for state (live badges, section tags).
- **Signature element**: the animated node/pipeline lines in the hero and the architecture-diagram strip on each project card are a deliberate nod to what you actually build — agent graphs and RAG pipelines — rather than generic decoration.
- **Fonts**: Space Grotesk (headings), Inter (body), JetBrains Mono (labels, stats, tags) — loaded from Google Fonts via CDN, so an internet connection is needed for fonts to render correctly (falls back to system sans-serif otherwise).
- Respects `prefers-reduced-motion` and has visible keyboard focus states throughout.
