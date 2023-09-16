<script setup lang="ts">
import type { FormSwitchPropsType } from './FormSwitch.types';

defineProps<FormSwitchPropsType>();
defineEmits(['update:modelValue']);
</script>

<template>
    <span class="form-switch">
        <label v-for="(value, key) in options" :key="key" class="form-switch__item">
            <input
                class="form-switch__input"
                type="radio"
                :name="name"
                :value="key"
                :checked="modelValue === key"
                @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
            <span class="form-switch__text">{{ value }}</span>
        </label>
    </span>
</template>

<style lang="scss" scoped>
.form-switch {
    display: inline-flex;
    border-radius: var(--border-radius);
    overflow: hidden;
}

.form-switch__input {
    position: absolute !important;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    width: 1px;
    border: 0;
    overflow: hidden;
}

.form-switch__text {
    padding: 0.5rem 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    transition: 0.35s ease background-color;
    white-space: nowrap;
    max-width: initial;
}

.form-switch__input:checked + .form-switch__text {
    background-color: var(--color--primary);
}

.form-switch__input:focus-visible + .form-switch__text {
    box-shadow: inset 0px 0px 0px 2px green;
}
</style>
