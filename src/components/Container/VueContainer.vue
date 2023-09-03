<template>
    <div class="container">
        <slot />
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    max-width: min(calc(100% - 2rem), 700px);
    margin-inline: auto;
}
</style>
