<template>
    <button type="button" :class="classes" @click="onClick">
        {{ label }}
    </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { type ButtonPropsType, buttonSizes, buttonStyles } from './Button.constants';

const props = withDefaults(defineProps<ButtonPropsType>(), { size: buttonSizes[0], type: buttonStyles[0] });

const classes = computed(() => {
    return {
        button: true,
        [`button--${props.type}`]: true,
        [`button--${props.size}`]: true
    };
});

const emit = defineEmits<{
    (e: 'click', id: number): void;
}>();

const onClick = (): void => {
    emit('click', 1);
};
</script>

<style scoped>
.button {
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
}
.button--primary {
    color: white;
    background-color: var(--color--primary);
}
.button--secondary {
    color: white;
    background-color: var(--color--secondary);
}
.button--small {
    font-size: 12px;
    padding: 10px 16px;
}
.button--medium {
    font-size: 14px;
    padding: 11px 20px;
}
.button--large {
    font-size: 16px;
    padding: 12px 24px;
}
</style>
