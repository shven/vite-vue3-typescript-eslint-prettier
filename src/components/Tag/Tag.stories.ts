import type { Meta, StoryObj } from '@storybook/vue3';
import VueTag from './VueTag.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'Atoms/Tag',
    component: VueTag,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs']
} satisfies Meta<typeof VueTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'Tag'
    }
};

export const LongText: Story = {
    args: {
        text: 'Tag with long text'
    }
};
