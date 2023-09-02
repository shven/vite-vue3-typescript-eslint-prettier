<script lang="ts" setup>
import { defineAsyncComponent, computed } from 'vue';
const props = withDefaults(defineProps<{ name: string }>(), { name: 'Cart' });
const icon = computed(() => {
    return defineAsyncComponent(() => import(`./VueIcon${props.name}.vue`));
});
</script>
<template>
    <div class="icon">
        <component :is="icon" v-if="icon" />
    </div>
</template>
