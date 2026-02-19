# PM Portfolio Hub

Personal portfolio site showcasing product management experience and AI-native development skills.

## 🚀 Live Site

**Production URLs:** 
- [https://www.goehmen.dev](https://www.goehmen.dev) (Custom Domain)
- [https://pm-portfolio-goehmen.vercel.app/](https://pm-portfolio-goehmen.vercel.app/)

## 🏗 Architecture

![Session 1 Architecture](./diagrams/session1_architecture.svg)

*Full-stack development environment from local dev to production deployment*

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (auto-deploy from main branch)
- **Version Control:** Git + GitHub
- **Form Handling:** Formspree (with spam protection)
- **Analytics:** Vercel Analytics
- **AI Development:** Claude Sonnet 4.5
- **IDE:** Cursor

## 📦 Project Structure
```
pm-portfolio/
├── app/
│   ├── page.tsx          # Homepage (all sections)
│   ├── layout.tsx        # Root layout + metadata
│   ├── globals.css       # Global styles + Tailwind imports
│   ├── favicon.ico       # Browser tab icon
│   ├── icon.png          # 32x32 favicon
│   └── apple-icon.png    # iOS home screen icon
├── diagrams/
│   └── session1_architecture.svg
├── public/
│   └── og-image.png      # Social sharing preview image (1200x630)
├── package.json          # Dependencies
└── README.md            # This file
```

## ✨ Features

### **V1 Complete:**
- ✅ **Hero Section** - Professional headline with value proposition
- ✅ **About Section** - Career summary with 4 skill areas (Cloud Platforms, Fintech, AI Strategy, Developer Tools)
- ✅ **Projects Section** - 1 live project (gregoehmen.io) + 3 coming soon placeholders
- ✅ **Contact Form** - Formspree integration with honeypot spam protection
- ✅ **Form Redirect** - Stays on page after submission (better UX)
- ✅ **Footer** - 4-column responsive layout (About, Quick Links, Connect, Tech Stack)
- ✅ **Vercel Analytics** - Privacy-friendly visitor tracking
- ✅ **Full SEO Suite:**
  - Optimized title and meta description
  - Open Graph tags for social sharing
  - Twitter Card tags
  - Custom favicon (GO monogram)
  - Apple touch icon
  - 1200x630 OG image for LinkedIn/Twitter previews
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **CI/CD Pipeline** - Auto-deploy from GitHub to Vercel
- ✅ **Architecture Documentation** - SVG diagram with full system overview

### **In Progress:**
- 🔄 Replace placeholder projects with real case studies
- 🔄 Add project screenshots/demos

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

## 📊 Development Stats

- ⏱ **Build Time:** ~10-12 hours across 5 sessions
- 🎯 **Sessions:** Hero → About/Skills → Projects → Contact/Footer/Analytics → SEO/OG Image
- ✅ **Status:** V1 Complete - Production ready with full SEO
- 🔄 **Auto-Deploy:** Active (GitHub → Vercel)
- 📱 **Mobile Responsive:** Yes
- 🤖 **AI-Assisted:** Built with Claude Sonnet 4.5 + Cursor IDE
- 📈 **Analytics:** Vercel Analytics (privacy-friendly, no cookies)

## 🎯 Roadmap

### **V2 (Planned):**
- [ ] Replace "Coming Soon" cards with real project case studies
- [ ] Add project screenshots and live demos
- [ ] Add headshot to About section
- [ ] Implement smooth scroll navigation
- [ ] Custom domain configuration

### **V3 (Future):**
- [ ] Blog section with MDX content
- [ ] Testimonials section
- [ ] Dark mode toggle
- [ ] Resume download link
- [ ] CMS integration (Contentful or Sanity)
- [ ] Advanced animations and transitions
- [ ] Event tracking (button clicks, section views)

## 🧑‍💻 Development Notes

This project demonstrates:
- **Modern Full-Stack Development:** Next.js 15 with App Router, TypeScript, Tailwind CSS
- **AI-Native Workflows:** Built with Claude AI assistance for code generation and architecture
- **DevOps Best Practices:** Git workflow, CI/CD automation, production deployment
- **Responsive Design:** Mobile-first approach with Tailwind breakpoints
- **Form Handling:** Third-party integration (Formspree) without backend code
- **SEO Optimization:** Complete meta tags, OG images, Twitter Cards, favicons
- **Analytics:** Privacy-friendly tracking without cookies
- **Documentation:** Architecture diagrams, clean commit history, professional README

### **Key Learnings:**
- Time-boxing sessions accelerates delivery
- AI tools (Claude + Cursor) significantly speed up iteration
- Vercel's zero-config deployment enables rapid prototyping
- Tailwind CSS utility classes reduce custom CSS by 90%+
- SEO metadata pays dividends for social sharing
- Privacy-friendly analytics (Vercel) removes GDPR complexity

## 📈 SEO & Social Sharing

**Optimized for:**
- ✅ Google search indexing
- ✅ LinkedIn sharing (rich preview with image)
- ✅ Twitter/X sharing (summary card with image)
- ✅ Facebook sharing (Open Graph tags)
- ✅ Browser bookmarks (custom favicon)
- ✅ iOS home screen (apple-touch-icon)

**Test your social previews:**
- LinkedIn: https://www.linkedin.com/post-inspector/
- OpenGraph: https://www.opengraph.xyz
- Twitter: Share in Tweet composer to see preview

## 📞 Contact

**Live Contact Form:** [https://pm-portfolio-goehmen.vercel.app/#contact](https://pm-portfolio-goehmen.vercel.app/#contact)

**Connect:**
- LinkedIn: [linkedin.com/in/grego](https://www.linkedin.com/in/grego)
- GitHub: [github.com/goehmen](https://github.com/goehmen)
- Website: [gregoehmen.io](https://gregoehmen.io)

---

**Built by Greg Oehmen** | AI-Native Development | Next.js + TypeScript + Tailwind CSS