/**
 * Toutes les URL publiques du site : le sitemap et le pré-rendu lisent cette liste.
 * Imports relatifs : ce module est aussi chargé par vite.config.ts (pas d'alias `@`).
 */
import { CHARACTERS, ILLUSTRATIONS, STUDIES } from '../constants/images'
import { detailPaths } from '../utils/collection'

export const SITE_PATHS = [
  '/',
  '/contact',
  '/art',
  '/art/illustrations',
  '/art/animations',
  '/art/traditional-drawings',
  '/art/all',
  '/art/epopee-temporelle',
  '/art/studies',
  '/art/characters',
  '/dev',
  '/dev/keynotes',
  '/dev/keynotes/once-upon-a-time-in-frontend',
  '/dev/keynotes/lets-build-a-lighthouse',
  '/dev/la-haute-tour',
  '/dev/ahoy',
  ...[ILLUSTRATIONS, STUDIES, CHARACTERS].flatMap(detailPaths),
]
