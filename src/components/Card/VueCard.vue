<script setup lang="ts">
import VueTitle from '../Title/VueTitle.vue';
import { CardPropsType } from './Card.types';
withDefaults(defineProps<CardPropsType>(), { title: 'Title', subTitle: 'Sub title', image: 'default' });
</script>

<template>
    <div class="card">
        <img :src="image" class="card__image" :alt="`${title} poster`" />
        <VueTitle :label="title" size="small" />
        <p>{{ subTitle }}</p>
        <p v-if="tag">{{ tag }}</p>
    </div>
</template>

<style scoped>
.card {
    min-height: 200px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.card__image {
    width: 100%;
}
</style>
