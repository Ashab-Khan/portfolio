# Ashab Ali Khan — AI Engineer Portfolio

**LLMs, RAG & Multi-Agent Systems — two production applications live on Hugging Face Spaces, built for AI Engineer roles across UAE / KSA.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-4f8cff?style=for-the-badge)](https://ashab-ali-khan.netlify.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/ashab-khan-73a3132ab/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/Ashab-Khan)

[![Netlify Status](https://api.netlify.com/api/v1/badges/3bb10264-8277-4600-b7e7-e3eda4512165/deploy-status)](https://app.netlify.com/projects/spectacular-kheer-c0b268/deploys)

---

## About This Project

This repository contains the source code for my personal portfolio — a single-page site built to showcase my work as an **AI Engineer specializing in LLMs, Retrieval-Augmented Generation, Multi-Agent Systems, and Arabic NLP**. Rather than just listing projects, it walks through two of my applications as full case studies — architecture, metrics, and the specific production problems I diagnosed and fixed — since that's the depth that actually matters for AI Engineering roles.

Built from scratch with HTML, CSS, and vanilla JavaScript — no framework, no build step — and deployed on Netlify with continuous deployment from this repo.

**🔗 Live site: [ashab-ali-khan.netlify.app](https://ashab-ali-khan.netlify.app/)**

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
  or, if `python3` isn't recognized on Windows:
  ```bash
  py -m http.server 8000
  ```
  then open `http://localhost:8000`. If you're on VS Code, the **"Live Server"** extension works too — right-click `index.html` → "Open with Live Server."

## ☁️ Deployment

This project is deployed and hosted on **Netlify**, connected directly to the `main` branch of this repository.

- **Continuous Deployment**: any push or merge to `main` automatically triggers a new deployment — the live site always reflects the latest commit.
- **No build step**: plain static files, so Netlify deploys with an empty build command and publish directory `.`.

## 📬 Contact

Open to AI Engineer roles across UAE and KSA — available for immediate relocation.

- **Email**: [ashabalikhan006@gmail.com](mailto:ashabalikhan006@gmail.com)
- **Phone**: [+91 7300806999](tel:+917300806999)
- **LinkedIn**: [linkedin.com/in/ashab-khan-73a3132ab](https://www.linkedin.com/in/ashab-khan-73a3132ab/)
- **GitHub**: [@Ashab-Khan](https://github.com/Ashab-Khan)
