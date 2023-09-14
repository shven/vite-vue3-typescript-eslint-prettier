<script setup lang="ts">
import VueContainer from '@/components/Container/VueContainer.vue';
</script>
<template>
    <div class="header">
        <VueContainer>
            <div class="header__content">
                <nav class="header__nav">
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                    <RouterLink to="/components">Components</RouterLink>
                    <RouterLink to="/movies">Movies</RouterLink>
                    <RouterLink to="/photos">Photos</RouterLink>
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
