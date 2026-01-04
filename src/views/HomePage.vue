<script setup lang="ts"></script>
<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="ma-4">{{ $t('message.home.title') }}</h1>
        <p class="ma-4">{{ $t('message.home.description') }}</p>
        <v-row justify="center" class="mt-6">
          <v-col v-for="(img, index) in 4" :key="index" class="d-flex" cols="12" md="3" sm="6">
            <v-card
              class="mx-auto"
              color="surface-variant"
              image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg"
              max-width="340"
              subtitle="Take a walk down the beach"
              title="Evening sunset"
            >
              <template #actions>
                <v-btn
                  append-icon="mdi-chevron-right"
                  color="red-lighten-2"
                  text="Book Activity"
                  variant="outlined"
                  block
                ></v-btn>
              </template>
            </v-card>
          </v-col>
        </v-row>
        <v-btn justify="center" class="mt-15" variant="outlined" to="/studio">{{
          $t('message.home.button')
        }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
