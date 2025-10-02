# 🚀 Guide SEO - florianleux.fr

**Status** : ✅ Prêt pour déploiement
**Date** : Octobre 2025

---

## ✅ Ce qui a été implémenté

### SEO Technique
- ✅ Meta tags dynamiques sur toutes les pages (@vueuse/head)
- ✅ Structured Data (JSON-LD) - Person & Portfolio Schema
- ✅ Sitemap XML automatique (29 URLs)
- ✅ Robots.txt
- ✅ Lang="fr" + meta tags Open Graph + Twitter Cards
- ✅ Canonical URLs sur toutes les pages

### Contenu
- ✅ Section "À propos" SEO-optimisée sur page d'accueil
- ✅ Identité unifiée : "Florian Leux (Toyso)" partout
- ✅ Mots-clés ciblés : Bordeaux, développeur, illustrateur

### Mots-clés Cibles
- Nom/marque : `florian leux`, `toyso`
- Local : `développeur web bordeaux`, `illustrateur bordeaux`, `freelance bordeaux`
- Services : `développeur frontend`, `illustration digitale`, `direction artistique`

---

## 📋 À FAIRE MAINTENANT

### 1. Vérifier les URLs Sociales (2 min)

Ouvre `src/composables/useStructuredData.ts` et vérifie/corrige :

```typescript
sameAs: [
  'https://github.com/florianleux',              // ← Ton vrai username GitHub
  'https://www.linkedin.com/in/florian-leux',    // ← Ton URL LinkedIn exacte
  'https://www.instagram.com/toyso',             // ← Ton URL Instagram exacte
]
```

### 2. Build et Deploy (5 min)

```bash
# Build
npm run build

# Le dossier dist/ est prêt à être uploadé
```

Vérifie après déploiement :
- `https://florianleux.fr/sitemap.xml` accessible
- `https://florianleux.fr/robots.txt` accessible

### 3. Google Search Console (15 min)

**Après déploiement :**

1. Va sur https://search.google.com/search-console
2. Ajoute la propriété `florianleux.fr`
3. Méthode de vérification : "Balise HTML"
4. Copie la balise : `<meta name="google-site-verification" content="...">`
5. Ajoute-la dans `index.html` dans le `<head>`
6. Re-build et re-deploy
7. Retourne sur Search Console → Clic "Vérifier"
8. **Important** : Va dans "Sitemaps" → Ajoute `sitemap.xml`

### 4. Créer les Backlinks (10 min)

**GitHub** :
- Édite ta bio
- Ajoute : `🌐 https://florianleux.fr`

**LinkedIn** :
- Mets à jour ton profil
- Section "Coordonnées" → Ajoute le site
- Dans ta description, mentionne ton pseudo "Toyso"

**Instagram (@toyso)** :
- Édite ton profil
- Site web : `https://florianleux.fr/art`
- Bio : Ajoute "(Florian Leux)" pour lier les identités

### 5. S'inscrire sur Malt.fr (30 min)

**Priorité #1 pour freelances en France !**

1. Crée ton profil sur https://malt.fr
2. Ajoute le lien vers florianleux.fr
3. Remplis ton profil (dev + illustration)
4. Mentionne tes deux casquettes

---

## 📅 Cette Semaine

### Google Analytics (optionnel, 20 min)

Si tu veux tracker les visiteurs :

```bash
npm install vue-gtag-next
```

1. Crée un compte sur https://analytics.google.com
2. Récupère ton Measurement ID (format : `G-XXXXXXXXXX`)
3. Dans `src/main.ts`, ajoute après les imports :

```typescript
import VueGtag from 'vue-gtag-next'

// ... après createApp
app.use(VueGtag, {
  property: {
    id: 'G-XXXXXXXXXX' // Ton ID ici
  }
})
```

### ✅ Alt Tags SEO Optimisés

Les alt tags ont été **automatiquement optimisés** pour toutes les images :

**Format utilisé** :
- Illustrations : `"[Titre] - Illustration digitale par Florian Leux (Toyso) - Character design et illustration digitale"`
- Animations : `"[Titre] - Animation 2D frame par frame par Florian Leux (Toyso) - Réalisée sur Procreate"`
- Dessins traditionnels : `"[Titre] - Dessin traditionnel aux feutres à alcool par Florian Leux (Toyso) - Portfolio illustrateur Bordeaux"`
- Processus création : Étapes distinctes (croquis, encrage, illustration finale, timelapse)

**Aucune action requise** - c'est déjà implémenté ! ✨

---

## 📈 Résultats Attendus

### 1-2 Semaines
- Position #1 sur "florian leux"
- Position #1 sur "toyso"
- Site indexé (10-20 pages)

### 1-3 Mois
- Top 30 sur "développeur bordeaux"
- Top 30 sur "illustrateur bordeaux"
- 50-100 impressions/mois
- Premiers visiteurs organiques

### 6-12 Mois
- Top 10 sur mots-clés locaux
- 100-300 visiteurs/mois
- Demandes de devis via Google

---

## 🛠️ Commandes Utiles

```bash
# Développement
npm run dev              # Serveur dev

# Build
npm run build            # Build production
npm run preview          # Preview du build

# Vérifications
npm run type-check       # Vérifier TypeScript

# Vérifier sitemap après build
grep -o '<url>' dist/sitemap.xml | wc -l  # Compte les URLs (doit afficher 29)
```

---

## 💡 Tips SEO

### Pour Ranker sur ton Nom
- ✅ Utilise "Florian Leux (Toyso)" exactement partout
- ✅ Ne sépare jamais les deux identités
- ✅ Répète naturellement dans le contenu

### Pour Bordeaux
- ✅ Mentionne "Bordeaux" sur chaque page importante
- ✅ "Basé à Bordeaux", "à Bordeaux", "freelance Bordeaux"
- ✅ Toujours associer services + ville

### Pour les Backlinks
- ✅ Qualité > Quantité
- ✅ Malt.fr = priorité absolue
- ✅ Clients satisfaits = demander un lien
- ✅ Partager sur réseaux sociaux avec lien

### Monitoring
- Vérifie Google Search Console chaque semaine
- Surveille l'indexation et les positions
- Ajuste selon les résultats

---

## ❓ FAQ

### Pourquoi pas de prerendering/SSR ?
Le prerendering n'est pas nécessaire pour tes objectifs :
- Google crawle parfaitement les SPAs Vue modernes
- Pour "florian leux" et "toyso", tu seras #1 sans SSR
- Le gain serait marginal (~5 positions sur mots-clés compétitifs)
- Migration = 1-2 jours de dev pour peu de bénéfice

### Dois-je créer un blog ?
**Optionnel.** Priorités :
1. Google Search Console (10x impact)
2. Backlinks Malt/LinkedIn/GitHub (8x)
3. Nouveau travaux réguliers (5x)
4. Blog technique (2x)

Un blog peut aider, mais ce n'est pas critique au début.

### Quand aurai-je des résultats ?
- **Indexation** : 1-2 semaines après soumission sitemap
- **Ranking nom** : Immédiat (#1 dès indexation)
- **Ranking local** : 1-3 mois pour positions stables
- **Trafic significatif** : 3-6 mois

Le SEO demande de la patience !

### Que faire pour toyso.fr ?
Quand tu l'auras, 2 options :
1. **Redirection 301** vers florianleux.fr/art (recommandé)
2. **Site séparé** focus art uniquement

La redirection concentre l'autorité SEO sur un seul domaine.

---

## 🎯 Checklist Déploiement

Avant de deployer :
- [x] Build fonctionne
- [x] Sitemap généré (29 URLs)
- [x] Robots.txt présent
- [ ] URLs sociales vérifiées
- [ ] Test responsive mobile
- [ ] Upload dist/ vers hébergement
- [ ] Vérifier sitemap.xml accessible
- [ ] Vérifier robots.txt accessible
- [ ] Google Search Console configuré
- [ ] Sitemap soumis

Après déploiement :
- [ ] Backlinks GitHub/LinkedIn/Instagram
- [ ] Inscription Malt.fr
- [ ] Premier post sur LinkedIn avec lien
- [ ] Premier post Instagram avec lien

---

## 📞 Ressources

### Outils Gratuits
- [Google Search Console](https://search.google.com/search-console) - Indispensable
- [Google Analytics](https://analytics.google.com) - Tracking visiteurs
- [PageSpeed Insights](https://pagespeed.web.dev) - Performance
- [Schema Validator](https://validator.schema.org) - Valider structured data
- [Open Graph Checker](https://www.opengraph.xyz) - Tester partage social

### Plateformes Freelance
- [Malt.fr](https://malt.fr) - Priorité #1 en France
- [Comet.co](https://comet.co) - Tech freelancers
- [Codeur.com](https://codeur.com) - Tous secteurs

---

## 🎊 Prêt !

Tu as un site **SEO-ready professionnel** :
- 29 pages crawlables
- Meta tags optimisés
- Structured data complet
- Sitemap automatique
- Identité forte et unifiée

**Deploy et lance-toi ! 🚀**

---

*Dernière mise à jour : Octobre 2025*

