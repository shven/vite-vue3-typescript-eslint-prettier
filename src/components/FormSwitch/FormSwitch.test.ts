import { mount } from '@vue/test-utils';
import Component from './VueFormSwitch.vue';

describe('FormSwitch', () => {
    const wrapper = mount(Component, {
        props: {
            modelValue: 'option1',
            'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
            name: 'switch',
            options: {
                option1: 'Option 1',
                option2: 'Option 2'
            }
        }
    });

    it('should emit update:modelValue event when input is clicked', async () => {
        // Simulate clicking on the second option
        const secondRadio = wrapper.find('input[value="option2"]');
        await secondRadio.setChecked();

        // Check if the emitted event matches the expected value

        expect(wrapper.props('modelValue')).toBe('option2');
    });
});
