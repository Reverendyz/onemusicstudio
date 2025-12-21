<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()
</script>
<template>
  <v-btn
    @click="theme.toggle()"
    variant="plain"
    :ripple="false"
    append-icon="mdi-theme-light-dark"
    >{{ $t('message.themeToggle') }}</v-btn
  >
</template>
