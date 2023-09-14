<script setup lang="ts">
import VueCard from '@/components/Card/VueCard.vue';
import VueContainer from '@/components/Container/VueContainer.vue';
import VueTitle from '@/components/Title/VueTitle.vue';
import useApi from '@/composables/useApi';
const { photos, error, loading } = useApi('https://jsonplaceholder.typicode.com/photos');
</script>
<template>
    <div class="photos">
        <VueContainer>
            <VueTitle label="Photos" level="h1" size="large" />
            <div v-if="loading">Loading...</div>
            <div v-else-if="error">Error while loading photos</div>
            <div v-else-if="photos" class="photos__cards">
                <VueCard v-for="photo in photos" :key="photo.id" :image="photo.thumbnailUrl" :title="photo.title" />
            </div>
        </VueContainer>
    </div>
</template>
<style scoped>
.photos__cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
    list-style-type: none;
}
</style>
