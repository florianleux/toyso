<template>
    <div class="text-body font-dm text-highlight lowercase sm:mb-[1vw] mb-[5vw]">
        <template v-for="(crumb, index) in breadcrumbs" :key="crumb.name">
            <router-link v-if="index < breadcrumbs.length - 1" :to="crumb.path">{{ crumb.label }}</router-link>
            <span v-else>{{ crumb.label }}</span>
            <span v-if="index < breadcrumbs.length - 1"> > </span>
        </template>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface Props {
    customLabel?: string
}

const props = defineProps<Props>()

const route = useRoute()
const router = useRouter()

interface Breadcrumb {
    name: string
    path: string
    label: string
}

const breadcrumbs = computed(() => {
    const crumbs: Breadcrumb[] = []

    // Build breadcrumb chain by following parent references
    const buildCrumbChain = (routeName: string | undefined, isCurrentRoute = false) => {
        if (!routeName) return

        const routeRecord = router.getRoutes().find(r => r.name === routeName)
        if (!routeRecord || !routeRecord.meta?.breadcrumb) return

        // Recursively build parent chain first
        if (routeRecord.meta?.parent) {
            buildCrumbChain(routeRecord.meta.parent as string, false)
        }

        // Use custom label for current route if provided, otherwise use meta breadcrumb
        const label = (isCurrentRoute && props.customLabel)
            ? props.customLabel
            : (routeRecord.meta?.breadcrumb as string)

        // Add current route to chain
        crumbs.push({
            name: routeName as string,
            path: routeRecord.path,
            label
        })
    }

    buildCrumbChain(route.name as string, true)

    return crumbs
})
</script>