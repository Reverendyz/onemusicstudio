<script setup lang="ts">
import { useLocaleStore } from '@/stores/locale'

const localeStore = useLocaleStore()
</script>

<template>
  <v-autocomplete
    variant="underlined"
    max-width="150"
    min-width="120"
    dense
    :items="[
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
    ]"
    v-model="localeStore.current"
  ></v-autocomplete>
</template>
