<script setup lang="ts">
import VueCodeBlock from '@/components/CodeBlock/VueCodeBlock.vue';
import VueContainer from '@/components/Container/VueContainer.vue';
import { iconSizes } from '@/components/Icon/Icon.constants';
import { iconNames } from '@/components/Icon/Icon.constants.generated';
import type { IconNameType, IconSizeType } from '@/components/Icon/IconTypes';
import VueIcon from '@/components/Icon/VueIcon.vue';
import VueTitle from '@/components/Title/VueTitle.vue';
import { ref, type Ref } from 'vue';

const iconSize: Ref<IconSizeType> = ref(iconSizes[0]);
const iconName: Ref<IconNameType> = ref(iconNames[0]);
</script>
<template>
    <div class="icons">
        <VueContainer>
            <VueTitle label="Icons" level="h1" size="large" />

            <p>
                The Icon component allows you to easily display icons in your Vue.js application. You can use it to
                display a variety of icons, and it supports different sizes.
            </p>

            <VueTitle label="Usage" level="h2" size="medium" />

            <p>To use the Icon component, simply include it in your Vue template with the following syntax:</p>
            <VueCodeBlock
                >&lt;VueIcon name=&quot;{{ iconName }}&quot; size=&quot;{{ iconSize }}&quot; /&gt;</VueCodeBlock
            >

            <form>
                <p>
                    <label for="icon-size">Size</label>
                    <select id="icon-size" v-model="iconSize">
                        <option v-for="size in iconSizes" :key="size" :value="size">{{ size }}</option>
                    </select>
                </p>
            </form>

            <ul class="icons__list">
                <li v-for="icon in iconNames" :key="icon" class="icons__item">
                    <button class="icons__button" title="Click to update snippet" @click="iconName = icon">
                        <VueIcon :name="icon" :size="iconSize" />
                        <small class="icons__label">{{ icon }}</small>
                    </button>
                </li>
            </ul>

            <VueTitle label="Adding new icons" level="h2" size="medium" />
            <p>To add new icons to your project, follow these steps:</p>

            <ol>
                <li>
                    <p>
                        Download SVG Icon: Find and download an SVG icon from a source like SVGRepo or any other
                        preferred SVG icon source.
                    </p>
                </li>
                <li>
                    <p>
                        Save to <code>/src/assets/icons</code>: Save the downloaded SVG icon file to your project's
                        <code>/src/assets/icons</code> directory.
                    </p>
                </li>
                <li>
                    <p>Optimize Icons: Run the following command to optimize the icons using SVGO (SVG Optimizer):</p>
                    <VueCodeBlock>pnpm run icons-cleanup-svg</VueCodeBlock>
                    <p>This command will help reduce the file size and optimize the SVG icons.</p>
                </li>
                <li>
                    <p>
                        Generate Icon Names: To enable IntelliSense in your code editor, run the following command to
                        generate a string array of icon names:
                    </p>
                    <VueCodeBlock>pnpm run icons-generate-names</VueCodeBlock>
                    <p>
                        This command generates an array of icon names based on the filenames in the
                        <code>/src/assets/icons</code> directory. IntelliSense support makes it easier to select the
                        correct icon name when using the Icon component.
                    </p>
                </li>
            </ol>

            <p>
                Now you can use the newly added icons by specifying their names in the <code>name</code> prop of the
                Icon component as shown in the usage example above.
            </p>
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
