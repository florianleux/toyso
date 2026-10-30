/**
 * Génère des alt texts SEO-optimisés pour les images du portfolio
 */

type ArtworkType =
  | 'illustration'
  | 'animation'
  | 'traditional'
  | 'sketch'
  | 'inking'
  | 'study'
  | 'character'

interface AltTextOptions {
  title: string
  type: ArtworkType
  context?: string
}

/**
 * Génère un alt text descriptif et optimisé SEO
 * Format: "Illustration [titre] par Florian Leux (Toyso) - [description]"
 */
export function generateAltText({ title, type, context }: AltTextOptions): string {
  const author = 'Florian Leux (Toyso)'

  // Capitalize first letter of title
  const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1)

  const descriptions: Record<ArtworkType, string> = {
    illustration: 'Illustration digitale',
    animation: 'Animation 2D frame par frame',
    traditional: 'Dessin traditionnel aux feutres à alcool',
    sketch: 'Croquis préparatoire',
    inking: 'Encrage numérique',
    study: "Planche d'études",
    character: 'Character design',
  }

  const baseDescription = descriptions[type]
  const fullContext = context ? ` - ${context}` : ''

  return `${formattedTitle} - ${baseDescription} par ${author}${fullContext}`
}

/**
 * Génère un alt text pour une illustration du portfolio
 */
export function getIllustrationAlt(title: string): string {
  return generateAltText({
    title,
    type: 'illustration',
    context: 'Character design et illustration digitale',
  })
}

/**
 * Génère un alt text pour une animation
 */
export function getAnimationAlt(title: string): string {
  return generateAltText({
    title,
    type: 'animation',
    context: 'Réalisée sur Procreate',
  })
}

/**
 * Génère un alt text pour un dessin traditionnel
 */
export function getTraditionalDrawingAlt(title: string): string {
  return generateAltText({
    title,
    type: 'traditional',
    context: 'Portfolio illustrateur Bordeaux',
  })
}

/**
 * Génère un alt text pour un croquis
 */
export function getSketchAlt(title: string): string {
  return generateAltText({
    title,
    type: 'sketch',
    context: 'Processus de création',
  })
}

/**
 * Génère un alt text pour un encrage
 */
export function getInkingAlt(title: string): string {
  return generateAltText({
    title,
    type: 'inking',
    context: 'Étape encrage',
  })
}

/**
 * Génère un alt text pour une planche d'études
 */
export function getStudyAlt(title: string): string {
  return generateAltText({
    title,
    type: 'study',
    context: 'Dessin sur Procreate',
  })
}

/**
 * Génère un alt text pour un personnage
 */
export function getCharacterAlt(title: string): string {
  return generateAltText({
    title,
    type: 'character',
    context: 'Création de personnage',
  })
}
