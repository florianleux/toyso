export interface Artwork {
  fileName: string
  title: string
  ratio: 'portrait' | 'landscape'
}

export interface ArtworkCollection {
  folderName: string
  artworks: Artwork[]
}
