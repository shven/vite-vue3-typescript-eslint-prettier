import type { MovieType } from '@/components/Movies/Movies.types';
import { defineStore } from 'pinia';
import { computed, ref, type Ref } from 'vue';

export const useMovieStore = defineStore('movie', () => {
    const data = ref<MovieType[]>([]);
    const error = ref<string | null>(null);
    const loading = ref(false);
    const all = 'All';

    const sortBy: Ref<'date' | 'rating'> = ref('rating');
    const searchTitle = ref('');
    const searchGenre = ref(all);

    const movies = computed(() => {
        const m = data.value as MovieType[];
        const t = searchTitle.value.toLowerCase();
        const g = searchGenre.value;
        console.log(g, 'genre');

        return m
            .filter((movie) => {
                const titleMatch = t ? movie.title.toLowerCase().includes(t) : true;
                const genreMatch = g && g !== all ? movie.genres.includes(g) : true;
                return titleMatch && genreMatch;
            })
            .sort((a, b) =>
                sortBy.value === 'date'
                    ? new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
                    : b.imdbRating - a.imdbRating
            );
    });

    const genres = computed(() => {
        return [...[all], ...Array.from(new Set(data.value.map((movie) => movie.genres).flat()))];
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

    function clearFilters(): void {
        searchTitle.value = '';
        searchGenre.value = 'All';
    }

    return { movies, loading, error, fetchData, clearFilters, searchTitle, searchGenre, genres, sortBy };
});
