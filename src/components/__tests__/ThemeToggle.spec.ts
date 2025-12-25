import { render, fireEvent } from '@testing-library/vue'
import { expect, test, vi } from 'vitest'

const toggleMock = vi.fn()

vi.mock('vuetify', () => ({
  useTheme: () => ({
    toggle: toggleMock,
  }),
}))

import ThemeToggle from '@/components/ThemeToggle.vue'

test('chama theme.toggle ao clicar no botão', async () => {
  const { getByRole } = render(ThemeToggle, {
    global: {
      stubs: {
        'v-btn': {
          template: `<button><slot /></button>`,
        },
      },
      mocks: {
        $t: (key: string) => key,
      },
    },
  })

  await fireEvent.click(getByRole('button'))

  expect(toggleMock).toHaveBeenCalledTimes(1)
})
