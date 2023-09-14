import { computed, onMounted, ref, type ComputedRef, type Ref } from 'vue';

export type Photo = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
};

export type Movie = {
    year: string;
    genres: string[];
    ratings: number[];
    poster: string;
    contentRating: string;
    duration: string;
    releaseDate: string;
    averageRating: number;
    storyline: string;
    actors: string[];
    imdbRating: number;
    posterurl: string;
    id: number;
    title: string;
};

export default (
    url: string
): {
    data: Ref<Movie[] | Photo[]>;
    error: Ref<string | null>;
    loading: Ref<boolean>;
    photos: ComputedRef<Photo[]>;
    movies: ComputedRef<Movie[]>;
    search: (title: string) => void;
} => {
    const data = ref<Movie[] | Photo[]>([]);
    const error = ref<string | null>(null);
    const loading = ref(false);
    const searchTitle = ref('');

    const photos = computed(() => {
        return data.value as Photo[];
    });

    const movies = computed(() => {
        const m = data.value as Movie[];
        if (searchTitle.value) {
            return m.filter((movie) => movie.title.toLowerCase().includes(searchTitle.value.toLowerCase()));
        } else {
            return m;
        }
    });

    const search = (title: string): void => {
        searchTitle.value = title;
    };

    onMounted(async () => {
        loading.value = true;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            if (jsonData[0]?.posterurl) {
                data.value = jsonData as Movie[];
            } else if (jsonData[0]?.albumId) {
                data.value = jsonData as Photo[];
            } else {
                throw new Error('Something went wrong');
            }
        } catch (e) {
            if (typeof e === 'string') {
                error.value = e;
            } else {
                error.value = (e as Error).message;
            }
        } finally {
            loading.value = false;
        }
    });

    return { data, error, loading, movies, photos, search };
};
