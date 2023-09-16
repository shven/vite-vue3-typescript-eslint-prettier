<script setup lang="ts">
import VueCard from '@/components/Card/VueCard.vue';
import VueContainer from '@/components/Container/VueContainer.vue';
import VueFormSwitch from '@/components/FormSwitch/VueFormSwitch.vue';
import VueTitle from '@/components/Title/VueTitle.vue';
import { useMovieStore } from '@/stores/movie';
import { ref, watch } from 'vue';

const store = useMovieStore();
const searchFor = { title: 'Title', genre: 'Genre' };
const toggleSearch = ref(Object.keys(searchFor)[0] ?? '');

store.fetchData();

watch(toggleSearch, () => {
    store.clearFilters();
});
</script>
<template>
    <div class="movies">
        <VueContainer>
            <VueTitle :label="`Movies `" level="h1" size="large" />
            <VueTitle :label="`Search by ${toggleSearch}`" level="h2" size="medium" />
            <p>
                <VueFormSwitch v-model="toggleSearch" name="searchby" :options="searchFor" />
            </p>
            <p>
                <input v-if="toggleSearch === 'title'" v-model="store.searchTitle" type="text" />
                <select v-if="toggleSearch === 'genre'" v-model="store.searchGenre">
                    <option v-for="genre in store.genres" :key="genre" :value="genre">{{ genre }}</option>
                </select>
            </p>

            <VueTitle :label="`Search by ${store.sortBy}`" level="h2" size="medium" />
            <p>
                <VueFormSwitch
                    v-model="store.sortBy"
                    name="sort"
                    :options="{ date: 'Release date', rating: 'Rating' }" />
            </p>
            <div v-if="store.loading">Loading...</div>
            <div v-else-if="store.error">{{ store.error }}</div>
            <div v-else-if="store.movies" class="movies__cards">
                <VueCard
                    v-for="movie in store.movies"
                    :key="movie.id"
                    :image="movie.posterurl"
                    :title="movie.title"
                    :sub-title="movie.genres.join(', ') + ' ' + movie.releaseDate + ' ' + movie.imdbRating"
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
