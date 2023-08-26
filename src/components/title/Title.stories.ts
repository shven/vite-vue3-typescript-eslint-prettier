import type { Meta, StoryObj } from '@storybook/vue3';

import { titleLevels, titleSizes } from './Title.constants';
import Title from './Title.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'Atoms/Title',
    component: Title,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: titleSizes },
        level: { control: 'select', options: titleLevels }
    }
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const MediumTitle: Story = {
    args: {
        size: 'medium',
        level: 'h2',
        label: 'Title'
    }
};
