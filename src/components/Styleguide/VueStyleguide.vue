<script setup lang="ts">
import VueContainer from '@/components/Container/VueContainer.vue';
import VueTitle from '@/components/Title/VueTitle.vue';
import { routes } from '@/router/router.constants';
const pages = routes.filter((route) => route.path.includes('/styleguide/'));
</script>
<template>
    <div class="about">
        <VueContainer>
            <VueTitle label="Components" level="h1" size="large" />

            <ul>
                <li v-for="page in pages" :key="page.name">
                    <RouterLink :to="page.path">
                        {{ page.meta?.title ?? '' }}
                    </RouterLink>
                </li>
            </ul>
        </VueContainer>
    </div>
</template>
