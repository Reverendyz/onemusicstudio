<script setup lang="ts">
import ThemeToggle from '@/components/ThemeToggle.vue'
import LocaleSelector from '@/components/LocaleSelector.vue'
import { useLocaleStore } from '@/stores/locale'
import { useI18n } from 'vue-i18n'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useDisplay } from 'vuetify'

const navButtons = computed(() => [
  {
    icon: 'mdi-home',
    title: 'nav.home',
    to: '/',
    external: false,
  },
  {
    icon: 'mdi-music',
    title: 'nav.studio',
    to: '/studio',
    external: false,
  },
  {
    icon: 'mdi-information',
    title: 'nav.about',
    to: '/about',
    external: false,
  },
  {
    icon: 'mdi-instagram',
    title: 'Instagram',
    to: 'https://www.instagram.com/onemusicstudioo/',
    external: true,
  },
])

// Internationalization setup
const { locale } = useI18n()

const localeStore = useLocaleStore()

watch(
  () => localeStore.current,
  (newLocale) => {
    locale.value = newLocale
    localeStore.setLocale(newLocale)
  },
  {
    immediate: true,
  },
)

// Breadcrumbs setup
const route = useRoute()
const breadcrumbs = computed(() => {
  const metaCrumbs = route.meta.breadcrumbs as Array<{ title: string; to?: string }> | undefined
  if (!metaCrumbs) return []
  return metaCrumbs.map((item, index) => ({
    title: item.title,
    to: item.to,
    disabled: index === metaCrumbs.length - 1,
  }))
})

// Responsive navigation drawer setup
const { smAndDown } = useDisplay()

const showMobileNav = smAndDown

const drawer = ref(false)
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item
          v-for="(button, index) in navButtons"
          :key="index"
          v-bind="
            button.external
              ? { href: button.to, target: '_blank', rel: 'noopener' }
              : { to: button.to }
          "
          class="text-primary"
        >
          <template #prepend>
            <v-icon :icon="button.icon" />
          </template>

          <v-list-item-title class="text-primary">
            {{ button.external ? button.title : $t(button.title) }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar>
      <template v-if="showMobileNav" #prepend>
        <v-app-bar-nav-icon @click="drawer = true" />
      </template>

      <v-app-bar-title class="d-none d-md-flex">
        <router-link to="/" class="text-h5 text-title text-weight-bold text-decoration-none">
          One Music Studio
        </router-link>
      </v-app-bar-title>

      <div v-if="!showMobileNav" class="app-bar-buttons d-flex ga-2">
        <v-btn
          v-for="(button, index) in navButtons"
          :key="index"
          v-bind="
            button.external
              ? { href: button.to, target: '_blank', rel: 'noopener' }
              : { href: button.to }
          "
          variant="plain"
          class="text-decoration-none text-primary"
        >
          <v-icon :icon="button.icon" />
          <span class="d-none d-md-inline">
            {{ button.external ? button.title : $t(button.title) }}
          </span>
        </v-btn>
      </div>

      <template #append>
        <locale-selector />
        <theme-toggle />
      </template>
    </v-app-bar>

    <v-main>
      <v-breadcrumbs
        class="d-flex justify-center pt-8"
        v-if="breadcrumbs.length"
        :items="breadcrumbs"
      >
        <template #divider>
          <v-icon icon="mdi-chevron-right" />
        </template>

        <template #title="{ item }">
          <v-btn
            v-if="!item.disabled"
            :to="item.to"
            variant="plain"
            :ripple="false"
            class="pa-0 text-decoration-none text-primary"
          >
            {{ $t(item.title) }}
          </v-btn>

          <span v-else class="pa-0 text-decoration-none text-primary">
            {{ $t(item.title) }}
          </span>
        </template>
      </v-breadcrumbs>

      <v-container class="w-100">
        <v-row>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <router-view />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer padless class="bg-transparent">
      <v-col class="text-center text-primary">
        &copy; {{ new Date().getFullYear() }} One Music Studio
      </v-col>
    </v-footer>
  </v-app>
</template>

<style scoped>
.app-bar-buttons {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
