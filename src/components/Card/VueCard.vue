<script setup lang="ts">
import VueIcon from '../Icon/VueIcon.vue';
import VueTag from '../Tag/VueTag.vue';
import VueTitle from '../Title2/VueTitle.vue';
import { CardPropsType } from './Card.types';
withDefaults(defineProps<CardPropsType>(), { title: 'Title', subTitle: 'Sub title', image: 'default' });
</script>

<template>
    <article class="card">
        <img :src="image" class="card__image" :alt="`${title} poster`" />
        <header class="card__header">
            <VueTitle :label="title" size="small" />
            <VueTag :text="tag" />
        </header>
        <VueIcon name="Map" />
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
}

.card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 1rem;
    gap: 1rem;
}
</style>
