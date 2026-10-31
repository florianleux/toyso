/**
 * Tout ce qu'on peut demander à une collection d'œuvres.
 */
import type { Artwork, ArtworkCollection, ResolvedArtwork } from '../types/artwork'
import {
  getAnimationAlt,
  getCharacterAlt,
  getIllustrationAlt,
  getStudyAlt,
  getTraditionalDrawingAlt,
} from './altText'

export function findArtwork(collection: ArtworkCollection, id: unknown): Artwork | undefined {
  return collection.artworks.find((artwork) => artwork.fileName === id)
}

export function imageUrl(collection: ArtworkCollection, artwork: Artwork): string {
  return `/${collection.folderName}/${artwork.fileName}.webp`
}

// Image qui représente la collection quand on la partage : sa première œuvre
export function coverImage(collection: ArtworkCollection): string {
  return imageUrl(collection, collection.artworks[0]!)
}

export function altText(collection: ArtworkCollection, artwork: Artwork): string {
  switch (collection.altKind) {
    case 'illustration':
      return getIllustrationAlt(artwork.title)
    case 'animation':
      return getAnimationAlt(artwork.title)
    case 'traditional':
      return getTraditionalDrawingAlt(artwork.title)
    case 'study':
      return getStudyAlt(artwork.title)
    case 'character':
      return getCharacterAlt(artwork.title)
    default:
      return `${artwork.title} - Illustration par Florian Leux (Toyso)`
  }
}

export function detailPath(collection: ArtworkCollection, artwork: Artwork): string | undefined {
  return collection.detail && `${collection.detail.basePath}/${artwork.fileName}`
}

export function detailPaths(collection: ArtworkCollection): string[] {
  return collection.artworks.flatMap((artwork) => detailPath(collection, artwork) ?? [])
}

// Route nommée vers une autre œuvre de la collection, tirée au hasard
export function randomOtherRoute(collection: ArtworkCollection, currentId: unknown) {
  if (!collection.detail) throw new Error(`${collection.folderName} n'a pas de page détail`)
  const others = collection.artworks.filter((artwork) => artwork.fileName !== currentId)
  const list = others.length > 0 ? others : collection.artworks
  const picked = list[Math.floor(Math.random() * list.length)] ?? collection.artworks[0]!
  return { name: collection.detail.routeName, params: { id: picked.fileName } }
}

export function resolveArtworks(
  collection: ArtworkCollection,
  { links = false }: { links?: boolean } = {}
): ResolvedArtwork[] {
  return collection.artworks.map((artwork) => ({
    ...artwork,
    src: imageUrl(collection, artwork),
    alt: altText(collection, artwork),
    to: links ? detailPath(collection, artwork) : undefined,
  }))
}
