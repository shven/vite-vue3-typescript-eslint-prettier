<script setup lang="ts">
import VueContainer from '../Container/VueContainer.vue';
</script>
<template>
    <div class="header">
        <VueContainer>
            <div class="header__content">
                <nav class="header__nav">
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                    <RouterLink to="/movies">Movies</RouterLink>
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
