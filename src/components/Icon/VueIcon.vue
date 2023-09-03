<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import { IconType } from './IconTypes';
const props = withDefaults(defineProps<IconType>(), { name: 'cart', size: 'medium' });
const icon = defineAsyncComponent(() => import(`../../assets/icons/optimised/${props.name}.svg`));
</script>
<template>
    <div class="icon" :class="{ [`icon--${size}`]: size }">
        <component :is="icon" v-if="icon" />
    </div>
</template>
<style scoped>
.icon {
    display: grid;
    align-items: center;
    justify-items: center;
}

.icon--small {
    height: var(--font-size-small);
    width: var(--font-size-small);
}

.icon--medium {
    height: var(--font-size-medium);
    width: var(--font-size-medium);
}

.icon--large {
    height: var(--font-size-large);
    width: var(--font-size-large);
}
</style>
