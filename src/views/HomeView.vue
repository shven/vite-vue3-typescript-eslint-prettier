<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue';
import Container from '../components/container/Container.vue';
import Title from '../components/title/Title.vue';
</script>

<template>
    <div>
        <Container>
            <Title label="Home" level="h1" size="large" />
            <HelloWorld msg="Vite + Vue" />
        </Container>
    </div>
</template>
