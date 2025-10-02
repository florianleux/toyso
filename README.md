# florianleux.fr (toyso)

Portfolio personnel combinant développement web et illustration.  
Site de Florian Leux (Toyso) - Développeur Frontend & Illustrateur Freelance à Bordeaux.

## 🚀 Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # Build production
```

## 📚 Documentation

**SEO & Déploiement** : Consulte [`docs/SEO-GUIDE.md`](./docs/SEO-GUIDE.md)

---

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## 📦 Stack Technique

- **Framework** : Vue 3 + TypeScript
- **Build** : Vite
- **Styling** : Tailwind CSS
- **Routing** : Vue Router
- **SEO** : @vueuse/head + Structured Data (JSON-LD)

## 🎯 Features

- ✅ Meta tags dynamiques sur toutes les pages
- ✅ Structured Data (Schema.org)
- ✅ Sitemap XML automatique (29 routes)
- ✅ Optimisé SEO pour "Florian Leux", "Toyso" et mots-clés locaux Bordeaux
- ✅ Portfolio illustrations avec timelapses
- ✅ Responsive design

## 🛠️ Commandes

```bash
# Développement
npm install          # Installation des dépendances
npm run dev          # Serveur de dev (http://localhost:5173)

# Build
npm run build        # Build production (génère dist/)
npm run preview      # Preview du build

# Qualité
npm run type-check   # Vérification TypeScript
npm run lint         # Linter + auto-fix
npm run format       # Prettier
```

## 📂 Structure

```
src/
├── components/      # Composants réutilisables
├── composables/     # Composables Vue (useImageLayout, useStructuredData)
├── constants/       # Données (images, illustrations)
├── router/          # Configuration Vue Router
├── types/           # Types TypeScript
└── views/           # Pages/vues
    ├── Home.vue
    └── art/         # Section portfolio
```

## 🚢 Déploiement

1. Build : `npm run build`
2. Upload le dossier `dist/` vers ton hébergement
3. Vérifie que `/sitemap.xml` et `/robots.txt` sont accessibles
4. Configure Google Search Console
5. Consulte [`docs/SEO-GUIDE.md`](./docs/SEO-GUIDE.md) pour les étapes SEO
