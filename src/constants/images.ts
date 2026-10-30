import type { ArtworkCollection } from '../types/artwork'

export const ILLUSTRATIONS: ArtworkCollection = {
  folderName: 'illustrations',
  altKind: 'illustration',
  detail: { basePath: '/art/illustrations', routeName: 'illustration' },
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
  altKind: 'traditional',
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
  altKind: 'animation',
  artworks: [
    { fileName: 'sorcerer', title: 'Sorcerer', ratio: 'portrait' },
    { fileName: 'feur', title: 'Feur', ratio: 'portrait' },
    { fileName: 'glurp', title: 'Glurp', ratio: 'portrait' },
    { fileName: 'hand', title: 'Hand', ratio: 'portrait' },
    { fileName: 'hey', title: 'Hey', ratio: 'portrait' },
  ],
}

export const STUDIES: ArtworkCollection = {
  folderName: 'studies',
  altKind: 'study',
  detail: { basePath: '/art/studies', routeName: 'study' },
  artworks: [
    { fileName: 'angry', title: 'des gens en colère', ratio: 'landscape' },
    { fileName: 'assassins', title: 'des assassins', ratio: 'landscape' },
    { fileName: 'bacon', title: 'de la charcuterie', ratio: 'landscape' },
    { fileName: 'bakers', title: 'des boulangers', ratio: 'landscape' },
    { fileName: 'bonsais', title: 'des bonsaïs', ratio: 'landscape' },
    { fileName: 'cabbages', title: 'des choux', ratio: 'landscape' },
    { fileName: 'cats', title: 'des chats', ratio: 'landscape' },
    { fileName: 'crabs', title: 'des crabes', ratio: 'landscape' },
    { fileName: 'desserts', title: 'des desserts', ratio: 'landscape' },
    { fileName: 'detectives', title: 'des détectives', ratio: 'landscape' },
    { fileName: 'dogs', title: 'des chiens', ratio: 'landscape' },
    { fileName: 'engines', title: 'des engins de chantier', ratio: 'landscape' },
    { fileName: 'fair', title: 'des américains', ratio: 'landscape' },
    { fileName: 'far-west', title: 'le Far West', ratio: 'landscape' },
    { fileName: 'fighters', title: 'des combattants', ratio: 'landscape' },
    { fileName: 'ghosts', title: 'des fantômes', ratio: 'landscape' },
    { fileName: 'grannies', title: 'des grand-mères', ratio: 'landscape' },
    { fileName: 'hats', title: 'des chapeaux', ratio: 'landscape' },
    { fileName: 'kaijus', title: 'des kaijus', ratio: 'landscape' },
    { fileName: 'knights', title: 'des chevaliers', ratio: 'landscape' },
    { fileName: 'lighthouses', title: 'des phares', ratio: 'landscape' },
    { fileName: 'lord-of-the-rings', title: 'le Seigneur des Anneaux', ratio: 'landscape' },
    { fileName: 'magicians', title: 'des magiciens', ratio: 'landscape' },
    { fileName: 'mushrooms', title: 'des champignons', ratio: 'landscape' },
    { fileName: 'natives', title: 'des amérindiens', ratio: 'landscape' },
    { fileName: 'phantom-menace', title: 'de la Menace Fantôme', ratio: 'landscape' },
    { fileName: 'pigs', title: 'des cochons', ratio: 'landscape' },
    { fileName: 'pirates', title: 'des pirates', ratio: 'landscape' },
    { fileName: 'plants', title: 'des plantes', ratio: 'landscape' },
    { fileName: 'sandwiches', title: 'des sandwichs', ratio: 'landscape' },
    { fileName: 'skate', title: 'du skate', ratio: 'landscape' },
    { fileName: 'tatoo', title: 'des tatoués', ratio: 'landscape' },
    { fileName: 'tennis', title: 'du tennis', ratio: 'landscape' },
    { fileName: 'tools', title: 'des outils', ratio: 'landscape' },
  ],
}

export const CHARACTERS: ArtworkCollection = {
  folderName: 'characters',
  altKind: 'character',
  detail: { basePath: '/art/characters', routeName: 'character' },
  artworks: [
    { fileName: 'ant', title: 'Salahzhar', ratio: 'portrait' },
    { fileName: 'cars', title: 'Rusty', ratio: 'landscape' },
    { fileName: 'chainsaw', title: 'Tronchatonneuse', ratio: 'portrait' },
    { fileName: 'dandelion', title: 'Volgar', ratio: 'portrait' },
    { fileName: 'et', title: 'X-124-BG', ratio: 'landscape' },
    { fileName: 'farmer', title: 'Richard', ratio: 'portrait' },
    { fileName: 'forge', title: 'forgeron', ratio: 'portrait' },
    { fileName: 'harry', title: 'Harry', ratio: 'portrait' },
    { fileName: 'hagrid', title: 'Hagrid', ratio: 'portrait' },
    { fileName: 'jacko', title: 'Jack-o', ratio: 'portrait' },
    { fileName: 'kombat', title: 'Fatal K', ratio: 'landscape' },
    { fileName: 'lovegirl', title: 'Love Girl', ratio: 'portrait' },
    { fileName: 'luchalibre', title: 'Los hermanos', ratio: 'landscape' },
    { fileName: 'oktoberfest', title: 'Octo Berfest', ratio: 'portrait' },
    { fileName: 'perfume', title: 'Le parfumeur', ratio: 'landscape' },
    { fileName: 'pigbot', title: 'Pigbot', ratio: 'landscape' },
    { fileName: 'pirate', title: 'R4CKH4M', ratio: 'landscape' },
    { fileName: 'tournesol', title: 'Triphon', ratio: 'portrait' },
    { fileName: 'vlad', title: 'Vlad', ratio: 'portrait' },
    { fileName: 'yellow', title: 'Monsieur jaune', ratio: 'portrait' },
  ],
}

export const ONCE_UPON_A_TIME_IN_FRONTEND: ArtworkCollection = {
  folderName: 'once-upon-a-time-in-frontend',
  altKind: 'default',
  artworks: [
    {
      fileName: 'once-upon-05',
      title: 'once upon a time in frontend - slide 5',
      ratio: 'landscape',
    },
    {
      fileName: 'once-upon-01',
      title: 'once upon a time in frontend - slide 1',
      ratio: 'landscape',
    },
    {
      fileName: 'once-upon-09',
      title: 'once upon a time in frontend - slide 9',
      ratio: 'landscape',
    },
    {
      fileName: 'once-upon-02',
      title: 'once upon a time in frontend - slide 2',
      ratio: 'landscape',
    },

    {
      fileName: 'once-upon-07',
      title: 'once upon a time in frontend - slide 7',
      ratio: 'landscape',
    },
    {
      fileName: 'once-upon-04',
      title: 'once upon a time in frontend - slide 4',
      ratio: 'landscape',
    },

    {
      fileName: 'once-upon-08',
      title: 'once upon a time in frontend - slide 8',
      ratio: 'landscape',
    },
    {
      fileName: 'once-upon-06',
      title: 'once upon a time in frontend - slide 6',
      ratio: 'landscape',
    },

    {
      fileName: 'once-upon-03',
      title: 'once upon a time in frontend - slide 3',
      ratio: 'landscape',
    },
    {
      fileName: 'once-upon-10',
      title: 'once upon a time in frontend - slide 10',
      ratio: 'landscape',
    },
  ],
}

export const LETS_BUILD_A_LIGHTHOUSE_SLIDES: ArtworkCollection = {
  folderName: 'lets-build-a-lighthouse',
  altKind: 'default',
  artworks: [
    { fileName: 'lighthouse-01', title: "let's build a lighthouse - slide 1", ratio: 'landscape' },
    { fileName: 'lighthouse-02', title: "let's build a lighthouse - slide 2", ratio: 'landscape' },
    { fileName: 'lighthouse-03', title: "let's build a lighthouse - slide 3", ratio: 'landscape' },
    { fileName: 'lighthouse-04', title: "let's build a lighthouse - slide 4", ratio: 'landscape' },
  ],
}

export const LETS_BUILD_A_LIGHTHOUSE_VOTES: ArtworkCollection = {
  folderName: 'lets-build-a-lighthouse',
  altKind: 'default',
  artworks: [
    {
      fileName: 'lighthouse-vote-01',
      title: "let's build a lighthouse - vote 1",
      ratio: 'portrait',
    },
    {
      fileName: 'lighthouse-vote-02',
      title: "let's build a lighthouse - vote 2",
      ratio: 'portrait',
    },
    {
      fileName: 'lighthouse-vote-03',
      title: "let's build a lighthouse - vote 3",
      ratio: 'portrait',
    },
    {
      fileName: 'lighthouse-vote-04',
      title: "let's build a lighthouse - vote 4",
      ratio: 'portrait',
    },
  ],
}

export const ALL_COLLECTIONS: ArtworkCollection[] = [
  ILLUSTRATIONS,
  ANIMATIONS,
  TRADITIONAL_DRAWINGS,
  STUDIES,
  CHARACTERS,
]

export const LA_HAUTE_TOUR_SCREENSHOTS: ArtworkCollection = {
  folderName: 'la-haute-tour',
  altKind: 'default',
  artworks: [
    { fileName: 'haute-tour-intro', title: "la haute tour - l'introduction", ratio: 'landscape' },
    { fileName: 'haute-tour-question', title: 'la haute tour - une question', ratio: 'landscape' },
    { fileName: 'haute-tour-mimic', title: 'la haute tour - le mimic', ratio: 'landscape' },
    { fileName: 'haute-tour-volumen', title: 'la haute tour - le volumen', ratio: 'landscape' },
    { fileName: 'haute-tour-grimoire', title: 'la haute tour - le grimoire', ratio: 'landscape' },
    { fileName: 'haute-tour-porte', title: 'la haute tour - la porte de la lune', ratio: 'landscape' },
  ],
}
