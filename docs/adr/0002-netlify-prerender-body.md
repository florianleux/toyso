# 0002 — Body rendu par l'extension Prerender de Netlify

Date : 2026-10-31 · Statut : accepté · Complète : [0001](0001-prerender-head-only.md)

## Contexte

L'ADR 0001 ne pré-rend que le head : les robots qui n'exécutent pas le JS (robots IA, aperçus de liens) reçoivent un body vide, sans titre ni contenu. L'extension Prerender de Netlify était déjà activée sur le site, mais les pages qu'elle servait n'avaient que le header : la capture partait avant le rendu du composant de la route, chargé à la demande.

## Décision

On garde le pré-rendu du head au build (0001) et on laisse l'extension Netlify rendre le body pour les robots. Elle ne touche que les user-agents classés robots par Netlify ; les visiteurs reçoivent la SPA normale.

- `window.prerenderReady` vaut `false` dans `index.html` et passe à `true` dans `src/main.ts` après `router.isReady()` puis `nextTick` : la capture attend que la route soit rendue (9 s au plus).
- `build.cssCodeSplit: false` : tout le CSS est dans un seul fichier lié dans le head. L'option « Skip CSS files » de l'extension bloquait le CSS d'`ImageGallery`, chargé par le JS ; le chargement de la route échouait et les 11 pages avec galerie sortaient vides.
- Réglages Netlify conservés : « Skip user-agents supporting JavaScript » (Googlebot et Bingbot exécutent le JS eux-mêmes) et « Skip CSS files, images, videos and fonts » (capture plus rapide, les images n'entrent pas dans le HTML).

## Alternatives écartées

- **Rendu complet au build (vite-ssg)** : déjà écarté par 0001 (migration `@unhead/vue` v2, écarts d'hydratation).
- **Décocher « Skip CSS files »** au lieu de fusionner le CSS : l'option bloque aussi les images, la capture chargerait toutes les images des galeries et risquerait le délai de 9 s. Et la page dépendrait d'un réglage invisible dans le code.

## Conséquences

- Les 94 routes publiques renvoient leur contenu complet, h1 compris, aux robots non-JS (vérifié le 2026-10-31 avec le user-agent `GPTBot`). Les URL inconnues gardent leur statut 404.
- Le prérendu est en cache 72 h côté Netlify, vidé à chaque déploiement.
- Un composant qui charge des données après `router.isReady()` sortirait incomplet : il faudrait retarder `prerenderReady` jusqu'à la fin du chargement.
- Les 836 octets de CSS de la galerie sont chargés sur toutes les pages.
- Pour vérifier une page : `curl -s -A "GPTBot/1.0" https://florianleux.fr/<route> | grep "<h1"`.
