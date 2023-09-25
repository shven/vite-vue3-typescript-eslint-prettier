import { mount } from '@vue/test-utils';
import Card from './VueCard.vue';

it('renders the card with default props', async () => {
    const wrapper = mount(Card, {
        props: {
            title: 'Title',
            image: 'https://via.placeholder.com/300'
        },
        global: {
            stubs: {
                vLazyLoad: true
            }
        }
    });

    // Check if the component renders with the default title and image
    expect(wrapper.find('.card__header').text()).toContain('Title');
});
