import { computed } from 'vue'
import type { Artwork } from '@/types/artwork'

interface PortraitRow<T extends Artwork = Artwork> {
  type: 'portrait'
  images: T[]
}

interface LandscapeRowItem<T extends Artwork = Artwork> {
  type: 'landscape' | 'portrait'
  image?: T
  images?: T[]
}

interface LandscapeRow<T extends Artwork = Artwork> {
  type: 'landscape'
  items: LandscapeRowItem<T>[]
}

export type ImageRow<T extends Artwork = Artwork> = PortraitRow<T> | LandscapeRow<T>

export function useImageLayout<T extends Artwork = Artwork>(illustrations: T[]) {
  const imageRows = computed<ImageRow<T>[]>(() => {
    const portraitIllustrations = illustrations.filter((img) => img.ratio === 'portrait')
    const landscapeIllustrations = illustrations.filter((img) => img.ratio === 'landscape')

    const rows: ImageRow<T>[] = []
    let portraitIndex = 0
    let landscapeIndex = 0

    const totalImages = illustrations.length
    let processedImages = 0

    while (processedImages < totalImages) {
      if (rows.length % 2 === 0) {
        const portraitRow = createPortraitRow(
          portraitIllustrations,
          landscapeIllustrations,
          portraitIndex,
          landscapeIndex,
          totalImages,
          processedImages
        )

        portraitIndex = portraitRow.newPortraitIndex
        landscapeIndex = portraitRow.newLandscapeIndex
        processedImages = portraitRow.newProcessedImages

        if (portraitRow.images.length > 0) {
          rows.push({ type: 'portrait', images: portraitRow.images })
        }
      } else {
        const landscapeRow = createLandscapeRow(
          portraitIllustrations,
          landscapeIllustrations,
          portraitIndex,
          landscapeIndex,
          totalImages,
          processedImages
        )

        portraitIndex = landscapeRow.newPortraitIndex
        landscapeIndex = landscapeRow.newLandscapeIndex
        processedImages = landscapeRow.newProcessedImages

        if (landscapeRow.items.length > 0) {
          rows.push({ type: 'landscape', items: landscapeRow.items })
        }
      }
    }

    return rows
  })

  return { imageRows }
}

function createPortraitRow<T extends Artwork>(
  portraitIllustrations: T[],
  landscapeIllustrations: T[],
  portraitIndex: number,
  landscapeIndex: number,
  totalImages: number,
  processedImages: number
) {
  const portraitRow: T[] = []

  for (let i = 0; i < 4 && processedImages < totalImages; i++) {
    if (portraitIndex < portraitIllustrations.length) {
      portraitRow.push(portraitIllustrations[portraitIndex]!)
      portraitIndex++
      processedImages++
    } else if (landscapeIndex < landscapeIllustrations.length) {
      portraitRow.push(landscapeIllustrations[landscapeIndex]!)
      landscapeIndex++
      processedImages++
    }
  }

  return {
    images: portraitRow,
    newPortraitIndex: portraitIndex,
    newLandscapeIndex: landscapeIndex,
    newProcessedImages: processedImages,
  }
}

function createLandscapeRow<T extends Artwork>(
  portraitIllustrations: T[],
  landscapeIllustrations: T[],
  portraitIndex: number,
  landscapeIndex: number,
  totalImages: number,
  processedImages: number
) {
  const landscapeRow: LandscapeRowItem<T>[] = []

  for (let i = 0; i < 2 && processedImages < totalImages; i++) {
    if (landscapeIndex < landscapeIllustrations.length) {
      landscapeRow.push({
        type: 'landscape',
        image: landscapeIllustrations[landscapeIndex]!,
      })
      landscapeIndex++
      processedImages++
    } else {
      const portraits: T[] = []
      for (
        let j = 0;
        j < 2 && portraitIndex < portraitIllustrations.length && processedImages < totalImages;
        j++
      ) {
        portraits.push(portraitIllustrations[portraitIndex]!)
        portraitIndex++
        processedImages++
      }

      if (portraits.length > 0) {
        landscapeRow.push({
          type: 'portrait',
          images: portraits,
        })
      }
    }
  }

  return {
    items: landscapeRow,
    newPortraitIndex: portraitIndex,
    newLandscapeIndex: landscapeIndex,
    newProcessedImages: processedImages,
  }
}
