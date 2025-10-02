<template>
    <div class="mx-auto py-16">
        <div class="text-subtitle font-dm">je suis</div>
        <div class="text-title mb-[6vw] text-highlight font-gasoek">illustrateur</div>
        <p class="mb-[3vw] text-left text-body font-dm">
            J'ai eu l'occasion de travailler pour le youtubeur Cyprien ou illustrer un projet de jeu de
            société
        </p>
        <p class="mb-[3vw] text-right text-body font-dm">
            J'ai réalisé des
            <router-link :to="{ name: 'illustrations' }"
                class="text-marker hover:opacity-80 transition-opacity duration-300 cursor-pointer">
                illustrations
            </router-link>
            en pleine page et des personnages.
        </p>
        <p class="mb-[3vw] text-left text-body font-dm">
            En parallèle, j'aime dessiner des planches d'études et me suis même essayé à <router-link
                :to="{ name: 'animations' }"
                class="text-marker hover:opacity-80 transition-opacity duration-300 cursor-pointer">
                l'animation 2D</router-link>
        </p>
        <p class="mb-[3vw] text-right text-body font-dm">
            J'ai aussi pratiqué le <router-link :to="{ name: 'traditional-drawings' }"
                class="text-marker hover:opacity-80 transition-opacity duration-300 cursor-pointer">
                dessin traditionnel</router-link> sur papier ou dans mes carnets.
        </p>
    </div>
</template>
