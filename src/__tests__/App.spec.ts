import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { createVuetify } from 'vuetify'
import { createRouter, createMemoryHistory } from 'vue-router'
import { describe, expect, it } from 'vitest'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from '../App.vue'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      appTitle: 'One Music Studio',
    },
  },
})

const router = createRouter({
  history: createMemoryHistory(),
  routes: [],
})

const vuetify = createVuetify({
  directives,
  components,
})

describe('App (integration)', () => {
  it('mounts properly', async () => {
    const pinia = createPinia()

    const wrapper = mount(App, {
      global: {
        plugins: [pinia, i18n, router, vuetify],
      },
    })

    expect(wrapper.exists()).toBe(true)
  })
})
