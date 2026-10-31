# 0003 — Dater le lastmod du sitemap par git, à partir du rendu de chaque route

Date : 2026-10-31 · Statut : accepté · Issue : #4

## Contexte

`vite-plugin-sitemap` datait toutes les URL à l'heure du build. Un lastmod qui change à chaque déploiement sans que le contenu change n'est pas fiable, et Google finit par l'ignorer.

## Décision

Le lastmod d'une route est la date du dernier commit (committer date) parmi les fichiers de son contenu : sa vue et les médias de `public/` qu'elle affiche.

- La liste des fichiers vient du rendu SSR déjà fait par le pré-rendu (ADR 0001) : les modules `src/views/` enregistrés par Vue et les `src` du body. Les médias rendus sur toutes les pages (logo du Header, placeholders d'`Image` et `Video`) portent `data-no-lastmod` et sont ignorés.
- Le code partagé (components, composables, `images.ts`) ne compte pas : un refactor de `Breadcrumb.vue` ou l'ajout d'une œuvre dans `images.ts` ne redaterait pas tout le site. Ajouter une œuvre redate quand même sa galerie, qui affiche la nouvelle image.
- `scripts/prerender.ts` lit git en trois appels (`status`, `ls-files`, un seul `log` sur `src/views` et `public`) et passe `lastCommit(fichier)` à l'entrée SSR (date du commit, `'uncommitted'` ou `'absent'`), qui écrit `dist/sitemap.xml` (`loc` et `lastmod` seulement). `vite-plugin-sitemap` est retiré : il écrivait le sitemap pendant le build client, avant le pré-rendu.
- Le build échoue sur un dépôt superficiel, et sur un média local introuvable (`src` mal écrit, fichier supprimé, ignoré ou retiré de l'index git) : sans date fiable, il changerait le sitemap à chaque build. Un fichier pas encore commité date sa route à l'heure du build (seulement en local : Netlify build du code commité).

## Alternatives écartées

- **Dates écrites à la main** (`updated` par route et par œuvre) : exactes, mais ~70 dates à tenir, oubliées tôt ou tard.
- **Fichiers déclarés à la main par route dans `paths.ts`** : garde le plugin, mais une déclaration oubliée donne une date fausse sans rien signaler.
- **Tout le graphe d'imports de la vue** : un refactor partagé redaterait toutes les pages.

## Conséquences

- Un refactor qui touche une vue redate sa page, même sans changement visible.
- Un composant partagé qui affiche un média fixe doit le marquer `data-no-lastmod`, sinon ce média date chaque page qui l'utilise.
- Corriger un titre d'œuvre dans `images.ts` ne redate aucune page.
- Netlify clonerait sans tronquer l'historique (clone « blobless », d'après des retours d'utilisateurs, pas la doc officielle). Si ça change, la garde fait échouer le build au lieu de publier de fausses dates.
- `public/robots.txt` est servi tel quel (le plugin le remplaçait par sa version).
- Seuls les attributs `src` des balises `img`, `video` et `source` du body rendu au build sont lus. Un média en `srcset`, `poster`, `<audio>`, `<iframe>`, image de fond CSS ou chargé côté client (`onMounted`) ne daterait pas sa page ; aucun n'existe au 2026-10-31.
