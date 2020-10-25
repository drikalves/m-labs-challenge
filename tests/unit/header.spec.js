import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';

describe('Header.vue', () => {
  it('to match with snapshot', () => {
    const wrapper = shallowMount(Header);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
