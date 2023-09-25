import { mount } from '@vue/test-utils';
import Component from './VuePhotos.vue';

describe('VuePhotos.vue', () => {
    const wrapper = mount(Component);

    it('Match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
});
