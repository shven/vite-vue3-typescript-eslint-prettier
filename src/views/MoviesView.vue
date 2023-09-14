<script setup lang="ts">
import { useMovieStore } from '../../src/stores/movie';
import VueCard from '../components/Card/VueCard.vue';
import VueContainer from '../components/Container/VueContainer.vue';
import VueTitle from '../components/Title/VueTitle.vue';
const store = useMovieStore();
store.fetchData();
</script>
<template>
    <div class="movies">
        <VueContainer>
            <VueTitle label="Movies" level="h1" size="large" />
            <input v-model="store.searchTitle" type="text" />
            <div v-if="store.loading">Loading...</div>
            <div v-else-if="store.error">{{ store.error }}</div>
            <div v-else-if="store.movies" class="movies__cards">
                <VueCard
                    v-for="movie in store.movies"
                    :key="movie.id"
                    :image="movie.posterurl"
                    :title="movie.title"
                    :sub-title="movie.genres[0]"
                    :tag="movie.year" />
            </div>
        </VueContainer>
    </div>
</template>
<style scoped>
.movies__cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
    list-style-type: none;
}
</style>
