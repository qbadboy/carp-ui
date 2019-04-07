import { shallowMount } from '@vue/test-utils';
import App from '@/App';

describe('App.vue', () => {
  it('render carp', () => {
    const msg = 'CARP';
    const wrapper = shallowMount(App);
    expect(wrapper.text()).toMatch(msg);
  });
});
