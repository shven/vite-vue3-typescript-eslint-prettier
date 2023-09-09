<script setup lang="ts">
import VueTag from '../Tag/VueTag.vue';
import VueTitle from '../Title/VueTitle.vue';
import { CardPropsType } from './Card.types';
withDefaults(defineProps<CardPropsType>(), { title: 'Title', subTitle: 'Sub title', image: 'default' });
</script>

<template>
    <article class="card">
        <img v-lazy-load="image" class="card__image" :alt="`${title} poster`" />
        <header class="card__header">
            <VueTitle :label="title" size="small" />
            <VueTag :text="tag" />
        </header>
        <p>{{ subTitle }}</p>
    </article>
</template>

<style scoped>
.card {
    min-height: 200px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.card__image {
    width: 100%;
    aspect-ratio: 10 / 16;
    object-fit: contain;
    opacity: 0;
    transition: 1s ease opacity;

    &[src] {
        opacity: 1;
    }
}

.card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 1rem;
    gap: 1rem;
}
</style>
