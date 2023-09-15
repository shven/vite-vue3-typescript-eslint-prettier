import type { MovieType } from '@/components/Movies/Movies.types';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useMovieStore = defineStore('movie', () => {
    const data = ref<MovieType[]>([]);
    const error = ref<string | null>(null);
    const loading = ref(false);
    const searchTitle = ref('');

    const movies = computed(() => {
        const m = data.value as MovieType[];
        if (searchTitle.value) {
            return m.filter((movie) => movie.title.toLowerCase().includes(searchTitle.value.toLowerCase()));
        } else {
            return m;
        }
    });

    async function fetchData(): Promise<void> {
        loading.value = true;

        try {
            const response = await fetch('/movies.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            data.value = await response.json();
        } catch (e) {
            if (typeof e === 'string') {
                error.value = e;
            } else {
                error.value = (e as Error).message;
            }
        } finally {
            loading.value = false;
        }
    }

    return { movies, loading, error, fetchData, searchTitle };
});
