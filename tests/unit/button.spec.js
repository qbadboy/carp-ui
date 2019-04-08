import { shallowMount, mount } from '@vue/test-utils';
import Button from '@/components/button';
import Loading from '@/components/loading';

describe('button.vue', () => {
  it('button content', () => {
    const Content = 'CARP-BUTTON';
    const wrapper = shallowMount(Button, {
      slots: {
        default: [Content]
      }
    });
    expect(wrapper.text()).toMatch(Content);
  });

  it('show loading', () => {
    const Content = 'CARP-BUTTON';
    const wrapper = mount(Button, {
      propsData: {
        loading: true
      },
      slots: {
        default: [Content]
      }
    });

    const loadingByName = wrapper.find({ name: 'carp-loading' });
    expect(loadingByName.is(Loading)).toBe(true);
    expect(wrapper.text()).not.toMatch(Content);
  });

  it('set button props', () => {
    const wrapper = mount(Button, {
      propsData: {
        disabled: true,
        radius: true,
        outline: true,
        inline: true,
        small: true
      }
    });
    expect(wrapper.classes('disabled')).toBe(true);
    expect(wrapper.classes('radius')).toBe(true);
    expect(wrapper.classes('outline')).toBe(true);
    expect(wrapper.classes('small')).toBe(true);
  });
});
