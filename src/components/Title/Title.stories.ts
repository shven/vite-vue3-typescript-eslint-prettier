import type { Meta, StoryObj } from '@storybook/vue3';
import { titleLevels, titleSizes } from './Title';
import Title from './VueTitle.vue';

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

export const TinyTitle: Story = {
    args: {
        size: 'tiny',
        level: 'h2',
        label: 'Tiny title'
    }
};

export const SmallTitle: Story = {
    args: {
        size: 'small',
        level: 'h2',
        label: 'Small title'
    }
};

export const MediumTitle: Story = {
    args: {
        size: 'medium',
        level: 'h2',
        label: 'Medium title'
    }
};

export const LargeTitle: Story = {
    args: {
        size: 'large',
        level: 'h2',
        label: 'Large title'
    }
};

export const HugeTitle: Story = {
    args: {
        size: 'huge',
        level: 'h2',
        label: 'HugeTitle'
    }
};
