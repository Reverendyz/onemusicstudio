import { defineStore } from 'pinia'

export type AppLocale = 'pt' | 'en' | 'es'
export const useLocaleStore = defineStore('locale', {
  state: () => ({
    current: (localStorage.getItem('lang') as AppLocale) || 'pt',
  }),
  actions: {
    setLocale(locale: AppLocale) {
      this.current = locale
      localStorage.setItem('lang', locale)
    },
  },
})
