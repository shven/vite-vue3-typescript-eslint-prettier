<template>
    <component :is="level" :class="classes">{{ label }}</component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { TitleProps } from './Title';

const props = withDefaults(defineProps<TitleProps>(), { size: 'medium', level: 'h2' });

const classes = computed(() => {
    return {
        title: true,
        [`title--${props.size}`]: true
    };
});
</script>

<style scoped>
.title {
    line-height: 1;
    text-wrap: balance;
}

/* Title sizes */
.title--tiny {
    font-size: var(--font-size-tiny);
}
.title--small {
    font-size: var(--font-size-small);
}
.title--medium {
    font-size: var(--font-size-medium);
}
.title--large {
    font-size: var(--font-size-large);
}
.title--huge {
    font-size: var(--font-size-huge);
}
.title--gigantic {
    font-size: var(--font-size-gigantic);
}
</style>
