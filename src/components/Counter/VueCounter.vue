<script setup lang="ts">
import VueButton from '@/components/Button/VueButton.vue';
import VueTitle from '@/components/Title/VueTitle.vue';
import { useCounterStore } from '@/stores/counterStore';

const store = useCounterStore();
let interval: ReturnType<typeof setInterval>;

function startTimer(): void {
    interval = setInterval(() => {
        store.increment();
    }, 1000);
}

function stopTimer(): void {
    clearInterval(interval);
}
</script>
<template>
    <div class="counter">
        <VueTitle label="Counter" level="h2" size="small" />
        <p>
            <span data-test="count">{{ store.count }}</span> * 2 =
            <span data-test="double-count">{{ store.doubleCount }}</span>
        </p>
        <VueButton data-test="button-increment" label="Increment" @click="store.increment" />
        <VueButton data-test="button-start" label="Start timer" @click="startTimer()" />
        <VueButton data-test="button-stop" label="Stop timer" @click="stopTimer()" />
        <VueButton data-test="button-reset" label="Reset" @click="store.reset" />
    </div>
</template>
