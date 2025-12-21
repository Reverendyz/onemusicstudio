<script setup lang="ts">
import { VDivider } from 'vuetify/components'
</script>
<template>
  <v-container>
    <v-responsive aspect-ratio="16/9" class="justify-center">
      <v-row>
        <v-col cols="12" md="12" class="text-center">
          <h1 class="ma-4">{{ $t('message.about.title') }}</h1>
          <p class="ma-4">{{ $t('message.about.description') }}</p>
        </v-col>
      </v-row>
      <v-divider class="mt-4 mb-8"></v-divider>
      <v-row class="justify-center">
        <v-col cols="12" md="12" class="text-center">
          <h2 class="mb-10">{{ $t('message.about.address') }}</h2>
          <iframe
            class="mb-5 border-md border-surface-variant rounded-lg"
            width="600"
            height="450"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.3532678871716!2d-49.2486441!3d-25.526606999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfbac1dd1c8c1%3A0x6abf2c14682e7794!2sOne%20Music%20Studio!5e0!3m2!1sen!2sbr!4v1766376568922!5m2!1sen!2sbr"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
