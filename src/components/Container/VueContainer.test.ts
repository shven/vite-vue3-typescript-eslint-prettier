import { mount } from '@vue/test-utils';
import VueContainer from './VueContainer.vue';

describe('VueContainer.vue', () => {
    const wrapper = mount(VueContainer, {
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
