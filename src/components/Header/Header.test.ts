import { mount } from '@vue/test-utils';
import Component from './VueHeader.vue';

describe('VueHeader.vue', () => {
    const wrapper = mount(Component);

    it('Match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
});
