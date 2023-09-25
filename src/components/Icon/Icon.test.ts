import { mount } from '@vue/test-utils';
import Component from './VueIcon.vue';

describe('VueIcon.vue', () => {
    it('Default size is medium', () => {
        const wrapper = mount(Component, {
            props: {
                name: 'cart'
            }
        });

        expect(wrapper.element.classList.contains('icon--medium')).toBe(true);
    });

    it('Large class is set', () => {
        const wrapper = mount(Component, {
            props: {
                name: 'cart',
                size: 'large'
            }
        });

        expect(wrapper.element.classList.contains('icon--large')).toBe(true);
    });
});
