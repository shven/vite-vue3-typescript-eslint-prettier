import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
/**
 * useCounterStore
 *
 * A Pinia store for managing a counter state.
 *
 * State:
 * - count: Ref<number> - A reactive reference to the counter value.
 *
 * Getters:
 * - doubleCount: ComputedRef<number> - A computed property that returns the double value of `count`.
 *
 * Actions:
 * - increment(): void - Increments the counter value by 1.
 * - reset(): void - Resets the counter value to 0.
 *
 * Watchers:
 * - count - Watches for changes in the `count` value to store the count state in localStorage.
 */
export const useCounterStore = defineStore('counter', () => {
    // Set initial state from localStorage.
    const count = ref<number>(localStorage.getItem('count') ? Number(localStorage.getItem('count')) : 0);
    const doubleCount = computed(() => count.value * 2);

    // Increment action to increment the value of `count` by 1.
    function increment(): void {
        count.value++;
    }

    // Reset action to reset the value of `count` to 0.
    function reset(): void {
        count.value = 0;
    }

    // Watch for changes in the `count` value to store the count state in localStorage.
    watch(count, () => {
        localStorage.setItem('count', count.value.toString());
    });

    return { count, doubleCount, increment, reset };
});
