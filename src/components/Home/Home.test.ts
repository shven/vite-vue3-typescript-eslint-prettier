import { shallowMount } from '@vue/test-utils';
import Component from './VueHome.vue';

describe('VueIcon.vue', () => {
    const wrapper = shallowMount(Component);

    it('Match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
});
