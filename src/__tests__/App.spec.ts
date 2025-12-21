import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('mounts renders properly', () => {
    const wrapper = mount(App)
    expect(wrapper.exists()).toBe(true)
  })
  it('has app bar title with home button', () => {
    const wrapper = mount(App)
    const appBarTitle = wrapper.find('v-app-bar-title')
    expect(appBarTitle.exists()).toBe(true)
    expect(appBarTitle.find('v-btn').text()).toBe('One Music Studio')
  })
})
