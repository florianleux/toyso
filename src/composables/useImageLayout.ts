import { computed } from 'vue'
import type { Illustration } from '@/types/illustration'

interface PortraitRow {
  type: 'portrait'
  images: Illustration[]
}

interface LandscapeRowItem {
  type: 'landscape' | 'portrait'
  image?: Illustration
  images?: Illustration[]
}

interface LandscapeRow {
  type: 'landscape'
  items: LandscapeRowItem[]
}

type ImageRow = PortraitRow | LandscapeRow

export function useImageLayout(
  portraitIllustrations: Illustration[],
  landscapeIllustrations: Illustration[]
) {
  const imageRows = computed<ImageRow[]>(() => {
    const rows: ImageRow[] = []
    let portraitIndex = 0
    let landscapeIndex = 0

    const totalImages = portraitIllustrations.length + landscapeIllustrations.length
    let processedImages = 0

    while (processedImages < totalImages) {
      // Portrait row (4 portrait images)
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
      }
      // Landscape row (2 landscape images OR 4 portrait images total)
      else {
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
  portraitIllustrations: Illustration[],
  landscapeIllustrations: Illustration[],
  portraitIndex: number,
  landscapeIndex: number,
  totalImages: number,
  processedImages: number
) {
  const portraitRow: Illustration[] = []

  for (let i = 0; i < 4 && processedImages < totalImages; i++) {
    if (portraitIndex < portraitIllustrations.length) {
      portraitRow.push(portraitIllustrations[portraitIndex])
      portraitIndex++
      processedImages++
    } else if (landscapeIndex < landscapeIllustrations.length) {
      // Fallback to landscape if portraits are exhausted
      portraitRow.push(landscapeIllustrations[landscapeIndex])
      landscapeIndex++
      processedImages++
    }
  }

  return {
    images: portraitRow,
    newPortraitIndex: portraitIndex,
    newLandscapeIndex: landscapeIndex,
    newProcessedImages: processedImages
  }
}

function createLandscapeRow(
  portraitIllustrations: Illustration[],
  landscapeIllustrations: Illustration[],
  portraitIndex: number,
  landscapeIndex: number,
  totalImages: number,
  processedImages: number
) {
  const landscapeRow: LandscapeRowItem[] = []

  // Try to fill 2 landscape slots
  for (let i = 0; i < 2 && processedImages < totalImages; i++) {
    if (landscapeIndex < landscapeIllustrations.length) {
      // Add a landscape image
      landscapeRow.push({
        type: 'landscape',
        image: landscapeIllustrations[landscapeIndex]
      })
      landscapeIndex++
      processedImages++
    } else {
      // No landscapes left, use 2 portraits to fill this landscape slot
      const portraits: Illustration[] = []
      for (let j = 0; j < 2 && portraitIndex < portraitIllustrations.length && processedImages < totalImages; j++) {
        portraits.push(portraitIllustrations[portraitIndex])
        portraitIndex++
        processedImages++
      }

      if (portraits.length > 0) {
        landscapeRow.push({
          type: 'portrait',
          images: portraits
        })
      }
    }
  }

  return {
    items: landscapeRow,
    newPortraitIndex: portraitIndex,
    newLandscapeIndex: landscapeIndex,
    newProcessedImages: processedImages
  }
}

