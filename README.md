# Portfolio – Next.js 14 & TypeScript

A modern, responsive portfolio website built with [Next.js 14](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), and [Framer Motion](https://www.framer.com/motion/).  
Showcases your projects, services, and contact information with smooth animations and a clean UI.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
```

### 2. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## 📁 Project Structure

```
app/
  components/      # Reusable UI and page components
  lib/             # Utility functions and data
  globals.css      # Global styles (Tailwind + custom)
  layout.tsx       # Root layout
  page.tsx         # Home page
public/
  images/          # Images and assets
  resume/          # Your downloadable CV
tailwind.config.ts # Tailwind CSS configuration
```

---

## ✨ Features

- **App Router** (Next.js 14)
- **TypeScript** for type safety
- **Tailwind CSS** for rapid styling
- **Framer Motion** for smooth animations
- **Radix UI** for accessible UI primitives (Accordion, Dialog)
- **Responsive design** (mobile-first)
- **Customizable sections**: Hero, Services, Projects, FAQ, Contact
- **Downloadable CV** button
- **Animated counters**
- **Custom scrollbars**
- **Social links**

---

## 🛠️ Customization

- **Projects:** Edit `app/lib/data.ts` to add your own projects.
- **FAQ:** Edit `app/lib/data.ts` for your own questions/answers.
- **Hero section:** Update `app/components/Hero.tsx` with your info.
- **Resume:** Place your PDF in `public/resume/` and update the link in `Hero.tsx`.
- **Branding:** Replace images in `public/images/` and update logo as needed.

---

## 📦 Dependencies

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide React](https://lucide.dev/)
- [React Scroll](https://www.npmjs.com/package/react-scroll)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)

---

> Built with ❤️ by Shima
