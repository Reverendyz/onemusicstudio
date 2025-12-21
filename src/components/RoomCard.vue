<script setup lang="ts">
import { shallowRef } from 'vue'

defineProps<{
  image?: string
  name: string
  description?: string
  equipments?: Record<string, string>[]
}>()

const show = shallowRef(false)
</script>

<template>
  <v-card class="mx-auto" max-width="400">
    <v-img :src="image" height="200" cover />
    <v-card-title>
      {{ name }}
    </v-card-title>
    <v-card-subtitle class="pb-6">
      {{ description }}
    </v-card-subtitle>
    <v-card-actions>
      <v-spacer />
      <v-btn
        :icon="show ? 'mdi-chevron-down' : 'mdi-chevron-up'"
        @click="show = !show">
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          <v-row>
            <v-col
              v-for="equipment in equipments"
              :key="equipment.icon"
              cols="12"
              sm="6"
            >
              <div class="d-flex align-center">
                <v-icon :icon="equipment.icon" class="mr-2"></v-icon>
                <span>{{ equipment.details }}</span>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
