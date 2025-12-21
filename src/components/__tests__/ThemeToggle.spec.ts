import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import ThemeToggle from '../ThemeToggle.vue'

const toggleMock = vi.fn()

vi.mock('vuetify', () => ({
  useTheme: () => ({
    toggle: toggleMock,
  }),
}))

describe('ThemeToggle', () => {
  it('calls theme.toggle on click', async () => {
    const wrapper = mount(ThemeToggle)

    const btn = wrapper.find('v-btn')
    await btn.trigger('click')

    expect(toggleMock).toHaveBeenCalledTimes(1)
  })
})
