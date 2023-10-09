import type { MovieType } from '@/components/Movies/Movies.types';
import { defineStore } from 'pinia';
import { computed, ref, watch, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export const useMovieStore = defineStore('movie', () => {
    const route = useRoute();
    const router = useRouter();
    const data = ref<MovieType[]>([]);
    const error = ref<string | null>(null);
    const loading = ref(false);
    const all = 'All';

    const sortBy: Ref<'date' | 'rating'> = ref('rating');
    const searchTitle = ref(typeof route.query.search === 'string' ? route.query.search : ''); // use the search query param as default
    const searchGenre = ref(all);

    // Update the search query param when the searchTitle model changes
    watch(searchTitle, (search) => {
        if (search) {
            router.replace({ query: { ...route.query, search } });
        } else {
            router.replace({ query: { ...route.query, search: undefined } });
        }
    });

    const movies = computed(() => {
        const m = data.value as MovieType[];
        const t = searchTitle.value.toLowerCase();
        const g = searchGenre.value;

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

    function getMovieById(id: string | string[] | undefined): MovieType | null {
        const mid: string | undefined = id && Array.isArray(id) ? id[0] : id ?? '';

        if (mid) {
            return data.value.find((movie) => movie.id === parseInt(mid, 10)) ?? null;
        }

        return null;
    }

    function clearFilters(): void {
        searchTitle.value = '';
        searchGenre.value = 'All';
    }

    return { fetchData, clearFilters, getMovieById, movies, loading, error, searchTitle, searchGenre, genres, sortBy };
});
