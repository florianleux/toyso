export interface Artwork {
  fileName: string
  title: string
  ratio: 'portrait' | 'landscape'
}

export type AltKind = 'illustration' | 'animation' | 'traditional' | 'study' | 'character' | 'default'

export interface ArtworkCollection {
  folderName: string
  artworks: Artwork[]
  altKind: AltKind
  // Présents seulement pour les collections qui ont une page détail par œuvre
  detail?: {
    basePath: string
    routeName: string
  }
}

// Une œuvre prête à afficher : chemin d'image, alt et lien déjà résolus par sa collection
export interface ResolvedArtwork extends Artwork {
  src: string
  alt: string
  to?: string
}
