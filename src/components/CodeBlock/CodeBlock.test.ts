import { mount } from '@vue/test-utils';
import Component from './VueCodeBlock.vue';

describe('VueCodeBlock.vue', () => {
    const wrapper = mount(Component, {
        slots: {
            default: 'Slot content goes here'
        }
    });

    it('renders slot content', () => {
        expect(wrapper.text()).toContain('Slot content goes here');
    });

    it('Match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
});
