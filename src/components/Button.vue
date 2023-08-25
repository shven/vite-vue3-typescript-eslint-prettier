<template>
    <button
        type="button"
        class="button"
        :class="{
            [`button--${props.type}`]: true,
            [`button--${props.size}`]: true
        }"
        @click="onClick">
        {{ label }}
    </button>
</template>

<script lang="ts" setup>
import { ButtonPropsType } from './Button.constants';

const props = withDefaults(defineProps<ButtonPropsType>(), { size: 'medium' });

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
    background-color: red;
}
.button--secondary {
    color: white;
    background-color: blue;
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
