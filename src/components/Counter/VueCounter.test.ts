import VueCounter from '@/components/Counter/VueCounter.vue';
import wait from '@/ts/utilities/wait';
import { mount } from '@vue/test-utils';
import type { Pinia } from 'pinia';
import { createPinia } from 'pinia';

describe('Counter', () => {
    let pinia: Pinia;

    beforeEach(() => {
        pinia = createPinia();
    });

    it('increments the count when the increment button is clicked', async () => {
        const wrapper = mount(VueCounter, {
            global: {
                plugins: [pinia]
            }
        });
        const incrementButton = wrapper.find('[data-test="button-increment"]');
        const countDisplay = wrapper.find('[data-test="count"]');

        await incrementButton.trigger('click');

        expect(countDisplay.text()).toBe('1');
    });

    it('starts the timer when the start timer button is clicked', async () => {
        const wrapper = mount(VueCounter, {
            global: {
                plugins: [pinia]
            }
        });
        const startTimerButton = wrapper.find('[data-test="button-start"]');
        const countDisplay = wrapper.find('[data-test="count"]');

        await startTimerButton.trigger('click');
        await new Promise((resolve) => setTimeout(resolve, 2000));

        expect(countDisplay.text()).toBe('2');
    });

    it('resets the count when the reset button is clicked', async () => {
        const wrapper = mount(VueCounter, {
            global: {
                plugins: [pinia]
            }
        });
        const incrementButton = wrapper.find('[data-test="button-increment"]');
        const resetButton = wrapper.find('[data-test="button-reset"]');
        const countDisplay = wrapper.find('[data-test="count"]');

        await incrementButton.trigger('click');
        await resetButton.trigger('click');

        expect(countDisplay.text()).toBe('0');
    });

    it('stops the timer when the stop timer button is clicked', async () => {
        const wrapper = mount(VueCounter, {
            global: {
                plugins: [pinia]
            }
        });

        const resetButton = wrapper.find('[data-test="button-reset"]');
        const startTimerButton = wrapper.find('[data-test="button-start"]');
        const stopTimerButton = wrapper.find('[data-test="button-stop"]');
        const countDisplay = wrapper.find('[data-test="count"]');

        resetButton.trigger('click');
        startTimerButton.trigger('click');
        await wait(1);
        expect(countDisplay.text()).toBe('1');
        stopTimerButton.trigger('click');
        await wait(1);
        expect(countDisplay.text()).toBe('1');
    });
});
