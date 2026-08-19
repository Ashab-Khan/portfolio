# Ashab Ali Khan — AI Engineer Portfolio

**LLMs, RAG & Multi-Agent Systems — two production applications live on Hugging Face Spaces, built for AI Engineer roles across UAE / KSA.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-4f8cff?style=for-the-badge)](https://ashab-ali-khan.netlify.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/ashab-khan-73a3132ab/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/Ashab-Khan)

> ⚠️ Replace the Live Demo badge URL above with your real Netlify URL once deployed (see [Deployment](#️-deployment) below).

---

## About This Project

This repository contains the source code for my personal portfolio — a single-page site built to showcase my work as an **AI Engineer specializing in LLMs, Retrieval-Augmented Generation, Multi-Agent Systems, and Arabic NLP**. Rather than just listing projects, it walks through two of my applications as full case studies — architecture, metrics, and the specific production problems I diagnosed and fixed — since that's the depth that actually matters for AI Engineering roles.

Built from scratch with HTML, CSS, and vanilla JavaScript — no framework, no build step — and deployed on Netlify with continuous deployment from this repo.

## 🚀 Key Features

- **Case-Study Project Sections** — each project includes a real architecture/pipeline diagram, quantified metrics, and a dedicated "problems I solved" breakdown, not just a description and a tech list.
- **Pipeline / Node-Flow Visuals** — an animated agent-graph motif in the hero and on each project card, deliberately reflecting the multi-agent and RAG systems I actually build.
- **Interactive Ambient Background** — a subtle glow that tracks the cursor across the page.
- **3D Tilt Effect** — skill and education cards tilt in response to cursor position.
- **Typing Animation** — hero subtitle cycles through my core specializations.
- **Scroll-Based Reveal Animations** — sections fade and slide into view on scroll.
- **Fully Responsive** — optimized from large desktop down to mobile, including a slide-out mobile nav.
- **Accessible by Default** — respects `prefers-reduced-motion`, visible keyboard focus states throughout.
- **Scrollspy Navigation** — the nav bar highlights the section currently in view.
- **Direct Contact, No Backend** — the contact form opens a pre-filled email via `mailto:`, so there's no server or third-party form service to maintain.

## 🛠️ Technologies Used

| Category | Technology / Tool |
|---|---|
| Frontend | HTML5, CSS3, JavaScript (ES6) |
| Fonts | Space Grotesk, Inter, JetBrains Mono (Google Fonts) |
| Deployment | Netlify, GitHub |

## 📦 Setup and Local Development

To clone this repository and run the project on your own machine:

**Clone the repository:**
```bash
git clone https://github.com/Ashab-Khan/portfolio.git
```

**Navigate to the project directory:**
```bash
cd portfolio
```

**Run the project:** since this is a static site, no dependencies to install. Two options:

- Open `index.html` directly in your browser, **or**
- Run a local server for the closest match to production:
  ```bash
  python3 -m http.server 8000
  ```
  then open `http://localhost:8000`. If you're on VS Code, the **"Live Server"** extension works too — right-click `index.html` → "Open with Live Server."

## ☁️ Deployment

This project is deployed and hosted on **Netlify**, connected directly to the `main` branch of this repository.

- **Continuous Deployment**: any push or merge to `main` automatically triggers a new deployment — the live site always reflects the latest commit.
- **No build step**: plain static files, so Netlify deploys with an empty build command and publish directory `.`.

## ⚙️ For Maintainers (local setup notes)

The rest of this README covers day-to-day maintenance details — what to update, where things live, and how the design is put together.

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

## 📬 Contact

Open to AI Engineer roles across UAE and KSA — available for immediate relocation.

- **Email**: [ashabalikhan006@gmail.com](mailto:ashabalikhan006@gmail.com)
- **Phone**: [+91 7300806999](tel:+917300806999)
- **LinkedIn**: [linkedin.com/in/ashab-khan-73a3132ab](https://www.linkedin.com/in/ashab-khan-73a3132ab/)
- **GitHub**: [@Ashab-Khan](https://github.com/Ashab-Khan)
