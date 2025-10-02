import type { Illustration } from '@/types/illustration'

export const PORTRAIT_ILLUSTRATIONS: Illustration[] = [
  { fileName: 'abyss', title: 'abyss', ratio: 'portrait' },
  { fileName: 'molitor', title: 'molitor', ratio: 'portrait' },
  { fileName: 'game-night', title: 'game night', ratio: 'portrait' },
  { fileName: 'gatcha', title: 'Gatcha', ratio: 'portrait' },
  { fileName: 'soup', title: 'soup', ratio: 'portrait' },
  { fileName: 'morning-hunt', title: 'Morning Hunt', ratio: 'portrait' },
  { fileName: 'houston', title: 'Houston', ratio: 'portrait' },
  { fileName: 'sento', title: 'Sento', ratio: 'portrait' },
  { fileName: 'all-in', title: 'All in', ratio: 'portrait' },
  { fileName: 'bivouac', title: 'Bivouac', ratio: 'portrait' },
  { fileName: 'checkmate', title: 'chess mates', ratio: 'portrait' },
  { fileName: 'gone-fishing', title: 'gone fishing', ratio: 'portrait' },
  { fileName: 'situation-room', title: 'situation room', ratio: 'portrait' },
  { fileName: 'fish-market', title: 'Fish Market', ratio: 'portrait' },
  { fileName: 'monster', title: 'Monster', ratio: 'portrait' },
  { fileName: 'mushroom', title: 'Mushroom', ratio: 'portrait' },
  { fileName: 'night-shift', title: 'Night Shift', ratio: 'portrait' },
  { fileName: 'scarecrow', title: 'Scarecrow', ratio: 'portrait' },
]

export const LANDSCAPE_ILLUSTRATIONS: Illustration[] = [
  { fileName: 'gladiator', title: 'Morituri te salutant', ratio: 'landscape' },
  { fileName: 'legacy', title: 'legacy', ratio: 'landscape' },
  { fileName: 'bonsai', title: 'Bonsai', ratio: 'landscape' },
  { fileName: 'roleplay', title: 'the fellowship', ratio: 'landscape' },
  { fileName: 'izakaya', title: 'Izakaya', ratio: 'landscape' },
]

export const ALL_ILLUSTRATIONS: Illustration[] = [
  ...PORTRAIT_ILLUSTRATIONS,
  ...LANDSCAPE_ILLUSTRATIONS,
]
