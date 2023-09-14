<script setup lang="ts">
import VueContainer from '@/components/Container/VueContainer.vue';
import VueTitle from '@/components/Title/VueTitle.vue';
</script>
<template>
    <div class="about">
        <VueContainer>
            <VueTitle label="Components" level="h1" size="large" />
            <ul>
                <li><RouterLink to="/components/icons">Icons</RouterLink></li>
            </ul>
        </VueContainer>
    </div>
</template>
