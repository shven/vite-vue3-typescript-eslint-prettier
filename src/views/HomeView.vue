<script setup lang="ts">
import VueContainer from '@/components/Container/VueContainer.vue';
import VueCounter from '@/components/Counter/VueCounter.vue';
import VueTitle from '@/components/Title/VueTitle.vue';
</script>

<template>
    <div>
        <VueContainer>
            <VueTitle label="Home" level="h1" size="large" />
            <VueCounter />
        </VueContainer>
    </div>
</template>
