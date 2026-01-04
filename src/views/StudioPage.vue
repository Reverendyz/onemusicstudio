<script setup lang="ts">
import RoomCard from '@/components/RoomCard.vue'
import { ref } from 'vue'
import { storage } from '@/firebase'
import { ref as storageRef, getDownloadURL } from 'firebase/storage'

const carouselItem = ref<
  {
    src: string
    cover: boolean
  }[]
>([
  {
    src: '',
    cover: true,
  },
  {
    src: '',
    cover: true,
  },
  {
    src: '',
    cover: true,
  },
])

const rooms = ref([
  {
    id: 'roomA',
    alt: 'Blue Room',
    image: '', // Will be loaded from Firebase Storage
    equipments: [
      { icon: 'mdi-guitar-electric', details: 'Fender Stratocaster' },
      { icon: 'mdi-metronome', details: 'Yamaha Drum Set' },
      { icon: 'mdi-microphone', details: 'Shure SM58' },
    ],
  },
  {
    id: 'roomB',
    alt: 'Green Room',
    image: '', // Will be loaded from Firebase Storage
    equipments: [
      { icon: 'mdi-piano', details: 'Yamaha Grand Piano' },
      { icon: 'mdi-microphone', details: 'AKG C414' },
      { icon: 'mdi-speaker', details: 'KRK Rokit 5' },
    ],
  },
])

const loadImages = async () => {
  try {
    // Load carousel images
    const blueroomRef = storageRef(storage, 'blueroom.jpeg')
    if(carouselItem.value[0]) carouselItem.value[0].src = await getDownloadURL(blueroomRef)

    const greenroomRef = storageRef(storage, 'greenroom.jpeg')
    if(carouselItem.value[1]) carouselItem.value[1].src = await getDownloadURL(greenroomRef)

    const greenroom2Ref = storageRef(storage, 'greenroom2.jpeg')
    if(carouselItem.value[2]) carouselItem.value[2].src = await getDownloadURL(greenroom2Ref)

    // Load room card images
    const roomARef = storageRef(storage, 'blueroom.jpeg')
    if (rooms.value[0]) rooms.value[0].image = await getDownloadURL(roomARef)

    const roomBRef = storageRef(storage, 'greenroom.jpeg')
    if (rooms.value[1]) rooms.value[1].image = await getDownloadURL(roomBRef)
  } catch (error) {
    console.error('Error loading images from Firebase Storage:', error)
  }
}

loadImages()
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
              :alt="room.alt"
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
