<script setup async lang="ts">
import VueContainer from '@/components/Container/VueContainer.vue';
import type { MovieType } from '@/components/Movies/Movies.types';
import { useMovieStore } from '@/stores/movieStore';
import { onBeforeMount, ref, type Ref } from 'vue';
import { useRoute } from 'vue-router';

const movie: Ref<MovieType | null> = ref(null);
const route = useRoute();
const store = useMovieStore();

onBeforeMount(async () => {
    await store.fetchData();
    movie.value = store.getMovieById(route.params.id);
});
</script>
<template>
    <VueContainer>
        <pre v-if="movie">{{ movie }}</pre>
        <p v-else>
            Movie not found<br />
            Go back to <RouterLink to="/movies">movies</RouterLink>
        </p>
    </VueContainer>
</template>
