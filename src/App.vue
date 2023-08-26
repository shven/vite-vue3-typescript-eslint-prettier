<script setup lang="ts">
import { RouterView } from 'vue-router';
import { ref, onMounted } from 'vue';
import Footer from './components/footer/Footer.vue';
import Header from './components/header/Header.vue';
const isScrolled = ref(false);

onMounted(() => {
    window.addEventListener('scroll', () => {
        isScrolled.value = window.scrollY > 1;
    });
});
</script>

<template>
    <div class="page" :class="{ 'page--scrolled': isScrolled }">
        <header class="page__header">
            <Header />
        </header>
        <main class="page__main">
            <RouterView />
        </main>
        <footer class="page__footer">
            <Footer />
        </footer>
    </div>
</template>

<style scoped>
.page {
    min-height: 100dvh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
}
.page__header {
    position: sticky;
    z-index: 10;
    top: 0;
    margin-block-end: 1rem;
    padding-block: 1rem;
    border-bottom: 1px solid transparent;
    transition: 0.35s ease border-color;
}

.page--scrolled .page__header {
    background: var(--color--black);
    border-bottom: 1px solid var(--color--gray-dark);
}
</style>
