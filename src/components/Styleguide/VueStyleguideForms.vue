<script setup lang="ts">
import VueCodeBlock from '@/components/CodeBlock/VueCodeBlock.vue';
import VueContainer from '@/components/Container/VueContainer.vue';
import VueFormSwitch from '@/components/FormSwitch/VueFormSwitch.vue';
import VueTitle from '@/components/Title/VueTitle.vue';
import { ref } from 'vue';

const formSwitch = ref('switch1');
</script>
<template>
    <div class="icons">
        <VueContainer>
            <VueTitle label="Forms" level="h1" size="large" />

            <p>An overview of form components to be used in your Vue 3 application.</p>

            <VueTitle label="Form switch" level="h2" size="medium" />
            <p>To use the Icon component, simply include it in your Vue template with the following syntax:</p>
            <p>
                <VueFormSwitch
                    v-model="formSwitch"
                    name="styleguide_switch"
                    :options="{ switch1: 'Switch 1', switch2: 'Switch 2' }" />
            </p>
            <p>Selected value: {{ formSwitch }}</p>
            <VueCodeBlock
                >&lt;VueFormSwitch v-model=&quot;formSwitch&quot; name=&quot;styleguide_switch&quot; :options=&quot;{
                switch1: &#39;Switch 1&#39;, switch2: &#39;Switch 2&#39;}&quot; /&gt;</VueCodeBlock
            >
        </VueContainer>
    </div>
</template>
<style scoped>
.icons__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.icons__item {
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
}

.icons__button {
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
}

.icons__button:hover {
    color: var(--color--primary);
}

.icons__label {
    padding: 0.25rem;
}
</style>
