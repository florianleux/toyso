import type { ArtworkCollection } from '../types/artwork'

export const ILLUSTRATIONS: ArtworkCollection = {
  folderName: 'illustrations',
  altKind: 'illustration',
  detail: { basePath: '/art/illustrations', routeName: 'illustration' },
  artworks: [
    { fileName: 'abyss', title: 'Abyss', ratio: 'portrait' },
    { fileName: 'molitor', title: 'Molitor', ratio: 'portrait' },
    { fileName: 'game-night', title: 'Game night', ratio: 'portrait' },
    { fileName: 'gatcha', title: 'Gatcha', ratio: 'portrait' },
    { fileName: 'soup', title: 'Soup', ratio: 'portrait' },
    { fileName: 'morning-hunt', title: 'Morning Hunt', ratio: 'portrait' },
    { fileName: 'houston', title: 'Houston', ratio: 'portrait' },
    { fileName: 'sento', title: 'Sento', ratio: 'portrait' },
    { fileName: 'all-in', title: 'All in', ratio: 'portrait' },
    { fileName: 'bivouac', title: 'Bivouac', ratio: 'portrait' },
    { fileName: 'checkmate', title: 'Chess mates', ratio: 'portrait' },
    { fileName: 'gone-fishing', title: 'Gone fishing', ratio: 'portrait' },
    { fileName: 'situation-room', title: 'Situation room', ratio: 'portrait' },
    { fileName: 'fish-market', title: 'Fish Market', ratio: 'portrait' },
    { fileName: 'monster', title: 'Monster', ratio: 'portrait' },
    { fileName: 'mushroom', title: 'Mushroom', ratio: 'portrait' },
    { fileName: 'night-shift', title: 'Night Shift', ratio: 'portrait' },
    { fileName: 'scarecrow', title: 'Scarecrow', ratio: 'portrait' },
    { fileName: 'gladiator', title: 'Morituri te salutant', ratio: 'landscape' },
    { fileName: 'legacy', title: 'Legacy', ratio: 'landscape' },
    { fileName: 'bonsai', title: 'Bonsai', ratio: 'landscape' },
    { fileName: 'roleplay', title: 'The fellowship', ratio: 'landscape' },
    { fileName: 'izakaya', title: 'Izakaya', ratio: 'landscape' },
  ],
}

export const TRADITIONAL_DRAWINGS: ArtworkCollection = {
  folderName: 'traditional',
  altKind: 'traditional',
  artworks: [
    { fileName: 'worker', title: 'Worker', ratio: 'portrait' },
    { fileName: 'blue', title: 'Blue jeleton', ratio: 'portrait' },
    { fileName: 'pink', title: 'Pink jeleton', ratio: 'portrait' },
    { fileName: 'mammoth', title: 'Mammoth', ratio: 'landscape' },
    { fileName: 'unicorn', title: 'Unicorn', ratio: 'landscape' },
    { fileName: 'red', title: 'Red jeleton', ratio: 'landscape' },
    { fileName: 'boxer', title: 'Sparring partner', ratio: 'landscape' },
    { fileName: 'green', title: 'Green jeleton', ratio: 'portrait' },
    { fileName: 'green-2', title: 'Green jeleton 2', ratio: 'portrait' },
    { fileName: 'daruma', title: 'Daruma', ratio: 'portrait' },
    { fileName: 'white', title: 'White jeleton', ratio: 'portrait' },
    { fileName: 'dino', title: 'Dino jeleton', ratio: 'portrait' },
    { fileName: 'hammond', title: 'Before the park', ratio: 'portrait' },
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
    { fileName: 'angry', title: 'Des gens en colère', ratio: 'landscape' },
    { fileName: 'assassins', title: 'Des assassins', ratio: 'landscape' },
    { fileName: 'bacon', title: 'De la charcuterie', ratio: 'landscape' },
    { fileName: 'bakers', title: 'Des boulangers', ratio: 'landscape' },
    { fileName: 'bonsais', title: 'Des bonsaïs', ratio: 'landscape' },
    { fileName: 'cabbages', title: 'Des choux', ratio: 'landscape' },
    { fileName: 'cats', title: 'Des chats', ratio: 'landscape' },
    { fileName: 'crabs', title: 'Des crabes', ratio: 'landscape' },
    { fileName: 'desserts', title: 'Des desserts', ratio: 'landscape' },
    { fileName: 'detectives', title: 'Des détectives', ratio: 'landscape' },
    { fileName: 'dogs', title: 'Des chiens', ratio: 'landscape' },
    { fileName: 'engines', title: 'Des engins de chantier', ratio: 'landscape' },
    { fileName: 'fair', title: 'Des américains', ratio: 'landscape' },
    { fileName: 'far-west', title: 'Le Far West', ratio: 'landscape' },
    { fileName: 'fighters', title: 'Des combattants', ratio: 'landscape' },
    { fileName: 'ghosts', title: 'Des fantômes', ratio: 'landscape' },
    { fileName: 'grannies', title: 'Des grand-mères', ratio: 'landscape' },
    { fileName: 'hats', title: 'Des chapeaux', ratio: 'landscape' },
    { fileName: 'kaijus', title: 'Des kaijus', ratio: 'landscape' },
    { fileName: 'knights', title: 'Des chevaliers', ratio: 'landscape' },
    { fileName: 'lighthouses', title: 'Des phares', ratio: 'landscape' },
    { fileName: 'lord-of-the-rings', title: 'Le Seigneur des Anneaux', ratio: 'landscape' },
    { fileName: 'magicians', title: 'Des magiciens', ratio: 'landscape' },
    { fileName: 'mushrooms', title: 'Des champignons', ratio: 'landscape' },
    { fileName: 'natives', title: 'Des amérindiens', ratio: 'landscape' },
    { fileName: 'phantom-menace', title: 'De la Menace Fantôme', ratio: 'landscape' },
    { fileName: 'pigs', title: 'Des cochons', ratio: 'landscape' },
    { fileName: 'pirates', title: 'Des pirates', ratio: 'landscape' },
    { fileName: 'plants', title: 'Des plantes', ratio: 'landscape' },
    { fileName: 'sandwiches', title: 'Des sandwichs', ratio: 'landscape' },
    { fileName: 'skate', title: 'Du skate', ratio: 'landscape' },
    { fileName: 'tatoo', title: 'Des tatoués', ratio: 'landscape' },
    { fileName: 'tennis', title: 'Du tennis', ratio: 'landscape' },
    { fileName: 'tools', title: 'Des outils', ratio: 'landscape' },
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
    { fileName: 'forge', title: 'Forgeron', ratio: 'portrait' },
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
    {
      fileName: 'haute-tour-porte',
      title: 'la haute tour - la porte de la lune',
      ratio: 'landscape',
    },
  ],
}
