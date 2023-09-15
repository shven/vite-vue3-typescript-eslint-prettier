import type { MovieType } from '@/components/Movies/Movies.types';
import type { PhotoType } from '@/components/Photos/Photos.types';
import { computed, onMounted, ref, type ComputedRef, type Ref } from 'vue';

export default (
    url: string
): {
    data: Ref<MovieType[] | PhotoType[]>;
    error: Ref<string | null>;
    loading: Ref<boolean>;
    photos: ComputedRef<PhotoType[]>;
    movies: ComputedRef<MovieType[]>;
    search: (title: string) => void;
} => {
    const data = ref<MovieType[] | PhotoType[]>([]);
    const error = ref<string | null>(null);
    const loading = ref(false);
    const searchTitle = ref('');

    const photos = computed(() => {
        return data.value as PhotoType[];
    });

    const movies = computed(() => {
        const m = data.value as MovieType[];
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
                data.value = jsonData as MovieType[];
            } else if (jsonData[0]?.albumId) {
                data.value = jsonData as PhotoType[];
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
