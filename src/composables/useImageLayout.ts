import { computed } from 'vue'
import type { Artwork } from '@/types/artwork'

interface PortraitRow {
  type: 'portrait'
  images: Artwork[]
}

interface LandscapeRowItem {
  type: 'landscape' | 'portrait'
  image?: Artwork
  images?: Artwork[]
}

interface LandscapeRow {
  type: 'landscape'
  items: LandscapeRowItem[]
}

type ImageRow = PortraitRow | LandscapeRow

export function useImageLayout(
  portraitIllustrations: Artwork[],
  landscapeIllustrations: Artwork[]
) {
  const imageRows = computed<ImageRow[]>(() => {
    const rows: ImageRow[] = []
    let portraitIndex = 0
    let landscapeIndex = 0

    const totalImages = portraitIllustrations.length + landscapeIllustrations.length
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

function createPortraitRow(
  portraitIllustrations: Artwork[],
  landscapeIllustrations: Artwork[],
  portraitIndex: number,
  landscapeIndex: number,
  totalImages: number,
  processedImages: number
) {
  const portraitRow: Artwork[] = []

  for (let i = 0; i < 4 && processedImages < totalImages; i++) {
    if (portraitIndex < portraitIllustrations.length) {
      portraitRow.push(portraitIllustrations[portraitIndex])
      portraitIndex++
      processedImages++
    } else if (landscapeIndex < landscapeIllustrations.length) {
      portraitRow.push(landscapeIllustrations[landscapeIndex])
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

function createLandscapeRow(
  portraitIllustrations: Artwork[],
  landscapeIllustrations: Artwork[],
  portraitIndex: number,
  landscapeIndex: number,
  totalImages: number,
  processedImages: number
) {
  const landscapeRow: LandscapeRowItem[] = []

  for (let i = 0; i < 2 && processedImages < totalImages; i++) {
    if (landscapeIndex < landscapeIllustrations.length) {
      landscapeRow.push({
        type: 'landscape',
        image: landscapeIllustrations[landscapeIndex],
      })
      landscapeIndex++
      processedImages++
    } else {
      const portraits: Artwork[] = []
      for (
        let j = 0;
        j < 2 && portraitIndex < portraitIllustrations.length && processedImages < totalImages;
        j++
      ) {
        portraits.push(portraitIllustrations[portraitIndex])
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
