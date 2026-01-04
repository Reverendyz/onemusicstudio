<script setup lang="ts">
import RoomCard from '@/components/RoomCard.vue'
import { ref } from 'vue'

const carouselItem = ref<
  {
    src: string
    cover: boolean
  }[]
>([
  {
    src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
    cover: true,
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/cards/hotel.jpg',
    cover: true,
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    cover: true,
  },
])

const rooms = [
  {
    id: 'roomA',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F23%2FGreen-Square-PNG-File.png&f=1&nofb=1&ipt=beda6dc8f85006743f75772cc431ffa23e3cddc1df65d4bf6290ac145d46ddad',
    equipments: [
      { icon: 'mdi-guitar-electric', details: 'Fender Stratocaster' },
      { icon: 'mdi-metronome', details: 'Yamaha Drum Set' },
      { icon: 'mdi-microphone', details: 'Shure SM58' },
    ],
  },
  {
    id: 'roomB',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fdark-blue-background-square-backdrop-illustration-with-copy-space_7954-36213.jpg&f=1&nofb=1&ipt=174ba8c6ef3e4f3088a54cc5d231201119939655e9c51449c1adf3419a585b8e',
    equipments: [
      { icon: 'mdi-piano', details: 'Yamaha Grand Piano' },
      { icon: 'mdi-microphone', details: 'AKG C414' },
      { icon: 'mdi-speaker', details: 'KRK Rokit 5' },
    ],
  },
]
</script>
<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="ma-4">{{ $t('message.studio.title') }}</h1>
        <p class="ma-4">{{ $t('message.studio.description') }}</p>
        <v-row justify="center" class="mt-6">
          <v-col class="d-flex" cols="12" md="12" sm="12">
            <v-carousel
              show-arrows="hover"
              cycle
              :transition-duration="1500"
              interval="5000"
              hide-delimiter-background
            >
              <v-carousel-item
                v-for="(item, i) in carouselItem"
                :key="i"
                :src="item.src"
                :cover="item.cover"
              ></v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
        <v-divider class="my-6"></v-divider>
        <v-row class="mt-6" justify="center">
          <v-col v-for="room in rooms" :key="room.id" cols="12" sm="6" md="6" class="text-center">
            <room-card
              :image="room.image"
              :name="$t(`message.studio.rooms.${room.id}.name`)"
              :description="$t(`message.studio.rooms.${room.id}.description`)"
              :equipments="room.equipments"
              />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
