<template>
    <div class="text-body font-dm text-highlight lowercase sm:mb-[1vw] mb-[5vw]">
        <template v-for="(crumb, index) in breadcrumbs" :key="crumb.name">
            <router-link class="underline hover:text-(--color-highlight)" v-if="index < breadcrumbs.length - 1"
                :to="crumb.path">
                {{ crumb.label }}
            </router-link>
            <span v-else>{{ crumb.label }}</span>
            <span class="text-(--color-highlight)" v-if="index < breadcrumbs.length - 1">&nbsp;•&nbsp</span>
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

    const buildCrumbChain = (routeName: string | undefined, isCurrentRoute = false) => {
        if (!routeName) return

        const routeRecord = router.getRoutes().find((r) => r.name === routeName)
        if (!routeRecord || !routeRecord.meta?.breadcrumb) return

        if (routeRecord.meta?.parent) {
            buildCrumbChain(routeRecord.meta.parent as string, false)
        }

        const label =
            isCurrentRoute && props.customLabel
                ? props.customLabel
                : (routeRecord.meta?.breadcrumb as string)

        crumbs.push({
            name: routeName as string,
            path: routeRecord.path,
            label,
        })
    }

    buildCrumbChain(route.name as string, true)

    return crumbs
})
</script>
