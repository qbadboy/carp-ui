import { mount } from '@vue/test-utils';
import Switch from '@/components/switch';

describe('switch.vue', () => {
  it('打开', () => {
    const onOff = true;
    const wrapper = mount(Switch, {
      propsData: {
        checked: onOff
      }
    });
    expect(wrapper.props('checked')).toBe(onOff);
    expect(wrapper.classes('on')).toBe(onOff);
  });

  it('关闭', () => {
    const onOff = false;
    const wrapper = mount(Switch, {
      propsData: {
        checked: onOff
      }
    });
    expect(wrapper.props('checked')).toBe(onOff);
    expect(wrapper.classes('on')).toBe(onOff);
  });
});
