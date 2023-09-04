<script setup lang="ts">
defineProps<{ text: string | undefined }>();
</script>
<template>
    <div v-if="text" class="tag">{{ text }}</div>
</template>
<style scoped>
.tag {
    display: inline-flex;
    border: 1px solid var(--color--white);
    border-radius: 50px;
    padding: 0.25rem 1rem;
    white-space: nowrap;
}
</style>
