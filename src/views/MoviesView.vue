<script setup lang="ts">
import { Ref, ref } from 'vue';
import VueCard from '../components/Card/VueCard.vue';
import VueContainer from '../components/Container/VueContainer.vue';
import VueTitle from '../components/Title/VueTitle.vue';

type Movie = {
    Title: string;
    Year?: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    Response: string;
    Images: string[];
};
const movies: Ref<Movie[] | null> = ref(null);

fetch('/movies.json')
    .then((response) => response.json())
    .then((data) => {
        movies.value = data;
    });
</script>
<template>
    <div class="movies">
        <VueContainer>
            <VueTitle label="Movies" level="h1" size="large" />
            <div class="movies__cards">
                <VueCard
                    v-for="movie in movies"
                    :key="movie.imdbID"
                    :image="movie.Poster"
                    :title="movie.Title"
                    :sub-title="movie.Genre"
                    :tag="movie.Year" />
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
