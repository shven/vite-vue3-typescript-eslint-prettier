<script setup lang="ts">
import VueButton from '@/components/Button/VueButton.vue';
import VueTitle from '@/components/Title/VueTitle.vue';
import { useCounterStore } from '@/stores/counter';
import { onMounted, onUnmounted } from 'vue';

const store = useCounterStore();
let interval: ReturnType<typeof setInterval>;

onMounted(() => {
    interval = setInterval(() => {
        store.increment();
    }, 1000);
});

onUnmounted(() => {
    clearInterval(interval);
});
</script>
<template>
    <div class="counter">
        <VueTitle label="Counter" level="h2" size="small" />
        <p>{{ store.count }} * 2 = {{ store.doubleCount }}</p>
        <VueButton label="Reset" @click="store.reset" />
    </div>
</template>
