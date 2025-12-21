<script setup lang="ts">
import { useLocaleStore } from '@/stores/locale'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const localeStore = useLocaleStore()

const items = [
  {
    title: 'English',
    value: 'en',
  },
  {
    title: 'Español',
    value: 'es',
  },
  {
    title: 'Português',
    value: 'pt',
  },
]
</script>

<template>
  <v-autocomplete
    variant="underlined"
    max-width="150"
    min-width="120"
    dense
    :items="items"
    :placeholder="t('nav.language')"
    reverse
    v-model="localeStore.current"
  ></v-autocomplete>
</template>
