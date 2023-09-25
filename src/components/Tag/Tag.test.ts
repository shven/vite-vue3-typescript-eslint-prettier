import { mount } from '@vue/test-utils';
import Component from './VueTag.vue';

describe('VueTag.vue', () => {
    const wrapper = mount(Component, {
        props: {
            text: 'tag text'
        }
    });

    it('Match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
});
