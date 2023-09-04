import type { Meta, StoryObj } from '@storybook/vue3';
import { iconSizes } from './Icon.constants';
import { iconNames } from './Icon.constants.generated';
import VueIcon from './VueIcon.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'Atoms/Icon',
    component: VueIcon,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: iconSizes },
        name: { control: 'select', options: iconNames }
    }
} satisfies Meta<typeof VueIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallIcon: Story = {
    args: {
        size: 'small',
        name: 'facebook'
    }
};

export const MediumIcon: Story = {
    args: {
        size: 'medium',
        name: 'facebook'
    }
};

export const LargeIcon: Story = {
    args: {
        size: 'large',
        name: 'facebook'
    }
};
