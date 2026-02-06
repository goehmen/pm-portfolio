# PM Portfolio Hub

Personal portfolio site showcasing product management experience and AI-native development skills.

## 🚀 Live Site

**Production:** [https://pm-portfolio-ten-rust.vercel.app/](https://pm-portfolio-ten-rust.vercel.app/)

## 🏗 Architecture

![Session 1 Architecture](./diagrams/pm-portfolio-hub session1_architecture.svg)

*Full-stack development environment from local dev to production deployment*

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (auto-deploy from main branch)
- **Version Control:** Git + GitHub

## 📦 Project Structure

```
pm-portfolio/
├── app/
│   ├── page.tsx          # Homepage (hero section)
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles + Tailwind imports
├── diagrams/
│   └── session1_architecture.svg
├── public/               # Static assets
├── package.json          # Dependencies
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Local Development
```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The page auto-updates as you edit `app/page.tsx`.

## 📝 Deployment

Automatically deployed via Vercel when code is pushed to the `main` branch.

**Deployment flow:**
1. Push to GitHub → 2. Vercel detects changes → 3. Builds & deploys → 4. Live in ~2 minutes

## 📊 Session 1 Stats

- ⏱ **Build Time:** ~2 hours
- 🎯 **Features:** Hero section, responsive design, CI/CD pipeline
- ✅ **Status:** Live and deployed
- 🔄 **Auto-Deploy:** Active (GitHub → Vercel)

## 🎯 Roadmap

**V2 (Next):**
- [ ] About section with professional summary
- [ ] Skills showcase
- [ ] Mobile responsiveness testing

**V3 (Future):**
- [ ] Projects portfolio section
- [ ] Contact form
- [ ] Dark mode toggle
- [ ] Analytics integration

## 🧑‍💻 Development Notes

This project was built using AI-native development workflows, demonstrating:
- Modern toolchain setup (Next.js 15, TypeScript, Tailwind)
- Git workflow best practices
- Cloud deployment automation
- Production-grade architecture

---

**Built by Greg Oehmen** | [GitHub](https://github.com/goehmen) | [Live Site](https://pm-portfolio-ten-rust.vercel.app/)