import type { Meta, StoryObj } from '@storybook/vue3';
import VueCodeBlock from './VueCodeBlock.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'Atoms/CodeBlock',
    component: VueCodeBlock,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs']
} satisfies Meta<typeof VueCodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { default: 'npm run dev' }
};

export const VueCode: Story = {
    args: { default: '<VueIcon name="cart" size="small" />' }
};
