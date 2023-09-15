<script setup lang="ts">
import VueContainer from '@/components/Container/VueContainer.vue';
import { routes } from '@/router/router.constants';

const pages = routes.filter((route) => route.path.split('/').length === 2);
</script>
<template>
    <div class="header">
        <VueContainer>
            <div class="header__content">
                <nav class="header__nav">
                    <RouterLink v-for="page in pages" :key="page.name" :to="page.path">
                        {{ page.meta?.title ?? '' }}
                    </RouterLink>
                </nav>
            </div>
        </VueContainer>
    </div>
</template>

<style scoped>
.header__nav {
    display: flex;
    gap: 1rem;
}
a {
    color: var(--color--white);
}
</style>
