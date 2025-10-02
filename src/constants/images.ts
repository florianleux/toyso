import type { ArtworkCollection } from '@/types/artwork'

export const ILLUSTRATIONS: ArtworkCollection = {
  folderName: 'illustrations',
  artworks: [
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
    { fileName: 'gladiator', title: 'Morituri te salutant', ratio: 'landscape' },
    { fileName: 'legacy', title: 'legacy', ratio: 'landscape' },
    { fileName: 'bonsai', title: 'Bonsai', ratio: 'landscape' },
    { fileName: 'roleplay', title: 'the fellowship', ratio: 'landscape' },
    { fileName: 'izakaya', title: 'Izakaya', ratio: 'landscape' },
  ],
}

export const TRADITIONAL_DRAWINGS: ArtworkCollection = {
  folderName: 'traditional',
  artworks: [
    { fileName: 'worker', title: 'worker', ratio: 'portrait' },
    { fileName: 'blue', title: 'blue jeleton', ratio: 'portrait' },
    { fileName: 'pink', title: 'pink jeleton', ratio: 'portrait' },
    { fileName: 'mammoth', title: 'mammoth', ratio: 'landscape' },
    { fileName: 'unicorn', title: 'unicorn', ratio: 'landscape' },
    { fileName: 'red', title: 'red jeleton', ratio: 'landscape' },
    { fileName: 'boxer', title: 'sparring partner', ratio: 'landscape' },
    { fileName: 'green', title: 'green jeleton', ratio: 'portrait' },
    { fileName: 'green-2', title: 'green jeleton 2', ratio: 'portrait' },
    { fileName: 'daruma', title: 'daruma', ratio: 'portrait' },
    { fileName: 'white', title: 'white jeleton', ratio: 'portrait' },
    { fileName: 'dino', title: 'dino jeleton', ratio: 'portrait' },
    { fileName: 'hammond', title: 'before the park', ratio: 'portrait' },
  ],
}

export const ANIMATIONS: ArtworkCollection = {
  folderName: 'animations',
  artworks: [
    { fileName: 'sorcerer', title: 'Sorcerer', ratio: 'portrait' },
    { fileName: 'feur', title: 'Feur', ratio: 'portrait' },
    { fileName: 'glurp', title: 'Glurp', ratio: 'portrait' },
    { fileName: 'hand', title: 'Hand', ratio: 'portrait' },
    { fileName: 'hey', title: 'Hey', ratio: 'portrait' },
  ],
}

export const ALL_COLLECTIONS: ArtworkCollection[] = [
  ILLUSTRATIONS,
  ANIMATIONS,
  TRADITIONAL_DRAWINGS,
]
