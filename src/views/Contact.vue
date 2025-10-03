<template>
  <div class="mx-auto py-16">
    <div class="text-subtitle font-dm">vous avez un projet en tête ?</div>
    <h1 class="text-title mb-8 text-highlight font-gasoek">contactez-moi</h1>

    <template v-if="!formSubmitted">
      <p class="mb-[2vw] text-left text-body font-dm">
        Je crée des sites web modernes avec Vue.js et Nuxt
        <br />
        <span class="italic"
          >Applications web, sites vitrines, direction technique frontend, design systems, web
          design.</span
        >
      </p>
      <p class="mb-[2vw] text-right text-body font-dm">
        Je réalise des illustrations numériques pour vos projets créatifs.
        <br />

        <span class="italic">
          Illustrations de livres, jeux de société, jeux vidéos, character design, direction
          artistique.</span
        >
      </p>
      <p class="mb-[2vw] text-left text-body font-dm">
        Et bien entendu, je peux combiner mes deux métiers pour un projet complet!
      </p>
    </template>
    <div class="max-w-4xl mx-auto">
      <div v-if="formSubmitted" class="mt-[15vh] rounded-lg text-center">
        <h3 class="text-xl text-subtitle mb-2 text-(--color-highlight)">Message envoyé !</h3>
        <p class="text-body font-dm">
          Merci pour votre message. Je vous répondrai dans les plus brefs délais.
        </p>
      </div>

      <form
        v-else
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
        class="space-y-6"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">
          <label>
            Don't fill this out:
            <input name="bot-field" />
          </label>
        </p>

        <div>
          <label for="name" class="block text-body font-dm mb-2">
            Nom
            <span class="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            v-model="formData.name"
            required
            class="w-full px-4 py-3 bg-transparent border border-current rounded-lg focus:outline-none focus:ring-2 focus:ring-current font-dm"
            placeholder="Votre nom"
          />
        </div>

        <div>
          <label for="email" class="block text-body font-dm mb-2">
            Email
            <span class="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            v-model="formData.email"
            required
            class="w-full px-4 py-3 bg-transparent border border-current rounded-lg focus:outline-none focus:ring-2 focus:ring-current font-dm"
            placeholder="votre@email.com"
          />
        </div>

        <div>
          <label for="subject" class="block text-body font-dm mb-2">
            Sujet
            <span class="text-red-500">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            v-model="formData.subject"
            required
            class="w-full px-4 py-3 bg-transparent border border-current rounded-lg focus:outline-none focus:ring-2 focus:ring-current font-dm"
          >
            <option value="">Sélectionnez un sujet</option>
            <option value="dev">Développement Web</option>
            <option value="illustration">Illustration / Direction Artistique</option>
            <option value="both">Les deux (Dev + Illustration)</option>
            <option value="other">Autre</option>
          </select>
        </div>

        <div>
          <label for="message" class="block text-body font-dm mb-2">
            Message
            <span class="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            v-model="formData.message"
            required
            rows="6"
            class="w-full px-4 py-3 bg-transparent border border-current rounded-lg focus:outline-none focus:ring-2 focus:ring-current font-dm resize-none"
            placeholder="Décrivez votre projet..."
          ></textarea>
        </div>

        <div class="flex justify-center">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="!px-8 py-4 hover:cursor-pointer text-marker rounded-lg font-gasoek text-body hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isSubmitting ? 'ENVOI EN COURS...' : 'ENVOYER' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import { usePersonSchema } from '@/composables/useStructuredData'

// SEO
useHead({
  title: 'Contact - Florian Leux (Toyso) | Développeur & Illustrateur Freelance Bordeaux',
  meta: [
    {
      name: 'description',
      content:
        "Contactez Florian Leux (Toyso) pour vos projets de développement web ou d'illustration. Freelance basé à Bordeaux, disponible en remote.",
    },
    {
      name: 'keywords',
      content:
        'contact florian leux, contact toyso, devis développeur bordeaux, devis illustrateur bordeaux, freelance bordeaux contact',
    },
    {
      property: 'og:title',
      content: 'Contact - Florian Leux (Toyso)',
    },
    {
      property: 'og:description',
      content: "Contactez-moi pour vos projets de développement web ou d'illustration.",
    },
    {
      property: 'og:url',
      content: 'https://florianleux.fr/contact',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://florianleux.fr/contact',
    },
  ],
})

usePersonSchema()

// Form state
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const formSubmitted = ref(false)
const isSubmitting = ref(false)

// Handle form submission
const handleSubmit = async (event: Event) => {
  if (isSubmitting.value) return

  isSubmitting.value = true
  const form = event.target as HTMLFormElement

  try {
    // Encode form data
    const formDataEncoded = new FormData(form)

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formDataEncoded as any).toString(),
    })

    formSubmitted.value = true
  } catch (error) {
    console.error('Form submission error:', error)
    alert('Une erreur est survenue. Veuillez réessayer.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
