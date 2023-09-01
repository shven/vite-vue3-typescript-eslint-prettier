<script setup lang="ts">
import VueContainer from '../Container/VueContainer.vue';
</script>
<template>
    <div class="footer">
        <VueContainer>
            <div class="footer__content">
                <a href="https://vitejs.dev" target="_blank" class="footer__logo">
                    <img src="/vite.svg" class="footer__image" alt="Vite logo" />
                </a>
                <a href="https://vuejs.org/" target="_blank" class="footer__logo">
                    <img src="/vue.svg" class="footer__image footer__image--vue" alt="Vue logo" />
                </a>
            </div>
        </VueContainer>
    </div>
</template>

<style scoped>
.footer__content {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding-block: 1rem;
}
.footer__image {
    height: 2em;
    will-change: filter;
    transition: filter 300ms;
}
.footer__image:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.footer__image--vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
