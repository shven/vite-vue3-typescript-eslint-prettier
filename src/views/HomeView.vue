<script setup lang="ts">
import VueContainer from '../components/Container/VueContainer.vue';
import VueIcon from '../components/Icon/VueIcon.vue';
import VueTitle from '../components/Title/VueTitle.vue';
import VueHelloWorld from '../components/VueHelloWorld.vue';
</script>

<template>
    <div>
        <VueContainer>
            <VueTitle label="Home" level="h1" size="large" />
            <VueHelloWorld msg="Vite + Vue" />
            <VueIcon name="Cart" />
        </VueContainer>
    </div>
</template>
