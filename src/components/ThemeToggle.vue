<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()
</script>
<template>
  <v-btn @click="theme.toggle()" variant="plain" :ripple="false" append-icon="mdi-theme-light-dark">
    <span class="theme-label">
      {{ $t('message.themeToggle') }}
    </span>
  </v-btn>
</template>

<style lang="css" scoped>
@media (max-width: 1102px) {
  .theme-label {
    display: none;
  }
}
</style>
