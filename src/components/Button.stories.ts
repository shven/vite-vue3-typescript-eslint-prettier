import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';
import { buttonStyles, buttonSizes } from './Button.constants';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'Atoms/Button',
    component: Button,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        type: { control: 'select', options: buttonStyles },
        size: { control: 'select', options: buttonSizes },
        onClick: { action: 'clicked' }
    },
    args: { type: 'primary' }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    args: {
        type: 'primary',
        label: 'Button'
    }
};

export const Secondary: Story = {
    args: {
        type: 'secondary',
        label: 'Button'
    }
};
