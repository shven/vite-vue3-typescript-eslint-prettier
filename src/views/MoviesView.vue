<script setup lang="ts">
import { ref, watch } from 'vue';
import VueCard from '../components/Card/VueCard.vue';
import VueContainer from '../components/Container/VueContainer.vue';
import VueTitle from '../components/Title/VueTitle.vue';
import useApi from '../composables/useApi';
const { movies, search, error, loading } = useApi('/movies.json');

const titleSearch = ref('');
watch(titleSearch, (t) => {
    search(t);
});
</script>
<template>
    <div class="movies">
        <VueContainer>
            <VueTitle label="Movies" level="h1" size="large" />
            <input v-model="titleSearch" type="text" />
            <div v-if="loading">Loading...</div>
            <div v-else-if="error">{{ error }}</div>
            <div v-else-if="movies" class="movies__cards">
                <VueCard
                    v-for="movie in movies"
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
