<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Container from '../container/Container.vue';
</script>
<template>
    <div class="header">
        <Container>
            <div class="header__content">
                <nav class="header__nav">
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                </nav>
            </div>
        </Container>
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
