import { mount } from '@vue/test-utils';
import Component from './VueTitle.vue';

describe('VueTitle.vue', () => {
    const wrapper = mount(Component, {
        props: {
            label: 'Title goes here',
            level: 'h2',
            size: 'medium'
        }
    });

    it('Match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
});
