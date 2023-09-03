<script setup lang="ts">
import { ref } from 'vue';
import VueIcon from '../Icon/VueIcon.vue';
const codeRef = ref();
const copied = ref(false);
async function copyToClipboard(): Promise<void> {
    const text = codeRef.value.textContent;

    try {
        await navigator.clipboard.writeText(text);
        copied.value = true;

        setTimeout(() => {
            copied.value = false;
        }, 1000);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}
</script>
<template>
    <pre class="code-block">
        <code ref="codeRef" class="code-block__code"><slot /></code>
        <button v-if="!copied" class="code-block__button" @click="copyToClipboard">
            <VueIcon size="small" name="copy" />
            Copy
        </button>
        <div v-if="copied" class="code-block__button" @click="copyToClipboard">
            <VueIcon size="small" name="check" />
            Copied
        </div>
    </pre>
</template>
<style scoped lang="scss">
$code-block--height: 30px;
.code-block {
    position: relative;
    display: grid;
    margin-bottom: 1rem;
}
.code-block__code {
    border-radius: 3px;
    font-family: courier, monospace;
    padding: 0 3px;
    display: block;
    padding: 40px 10px 10px 10px;
    border-radius: 5px;
    color: var(--color--white);
    border: 3px solid var(--color--secondary);
    background: rgba(0, 0, 0, 0.5);

    &:before {
        left: 0;
        right: 0;
        top: 0;
        line-height: $code-block--height;
        padding-left: 10px;
        position: absolute;
        font-weight: bold;
        font-style: italic;
        content: 'Code';
        background-color: var(--color--secondary);
        color: var(--color--white);
    }

    &:after {
        position: absolute;
        content: ' ';
        inset: 0;
        background: var(--color--secondary);
        z-index: -1;
    }
}

.code-block__button {
    position: absolute;
    line-height: $code-block--height;
    top: 0;
    right: 3px;
    z-index: 1;
    display: flex;
    height: 30px;
    white-space: nowrap;
    align-items: center;
    gap: 0.25rem;
    padding-inline: 0.5rem;
}
</style>
