# 0001 — Pré-rendre le head seulement, sans hydratation

Date : 2026-10-31 · Statut : accepté · Issue : #2

## Contexte

Le site est une SPA Vue servie par Netlify : toutes les URL renvoyaient le même `index.html` générique. Les robots de partage (LinkedIn, Slack, X, Facebook) n'exécutent pas le JS et affichaient une carte sans titre ni image. Les routes publiques sont toutes connues au build.

## Décision

Au build, un rendu SSR des vrais composants exécute les `usePageMeta` de chaque route ; seul le head est gardé et injecté dans une copie du template, `dist/<route>.html`. Le body reste `<div id="app"></div>` et le client monte l'app normalement, sans hydratation.

- `usePageMeta` reste la seule source de méta (pas de table route → méta séparée).
- Fichiers `<route>.html` et non `<route>/index.html` : Netlify les sert sans redirection vers un slash final, l'URL servie reste celle de la canonical.
- Les URL hors sitemap reçoivent `dist/404.html` (NotFound pré-rendu, `noindex`) avec le statut 404, via `public/_redirects` (mis à jour le 2026-10-31, issue #3 : c'était `dist/spa.html` en 200).
- Le build échoue si une route sort sans titre, canonical ou og:image, ou si `404.html` sort sans titre ou sans `noindex`.

## Alternatives écartées

- **Rendu complet avec hydratation (vite-ssg)** : contenu visible sans JS, mais migration vers `@unhead/vue` v2 et risques d'écart d'hydratation (galeries mélangées au hasard, lien « un autre » aléatoire). Le besoin était le head, pas le body.
- **Table de méta en Node** : plus simple à exécuter, mais duplique les textes des 19 vues, qui divergeraient.

## Conséquences

- Le contenu des pages reste invisible aux robots qui n'exécutent pas le JS (Google l'exécute). Mis à jour le 2026-10-31 : l'extension Prerender de Netlify leur sert maintenant le body, voir [0002](0002-netlify-prerender-body.md).
- Ajouter une page publique = l'ajouter dans `src/router/paths.ts`.
- Passer plus tard au rendu complet reste possible : la liste des routes et l'entrée SSR sont réutilisables.
