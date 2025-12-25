import { createI18n } from 'vue-i18n'
import ptBR from '@/locales/pt.json'
import enUS from '@/locales/en.json'
import esES from '@/locales/es.json'

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'pt',
  fallbackLocale: 'en',
  messages: {
    pt: ptBR,
    en: enUS,
    es: esES,
  },
})
