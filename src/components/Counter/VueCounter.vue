<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useCounterStore } from '../../stores/counter';
import VueButton from '../Button/VueButton.vue';
import VueTitle from '../Title/VueTitle.vue';

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
