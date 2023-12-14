<template>
  <div v-motion :initial="{
    opacity: 0,
    y: 100,
  }" :visible="{
  opacity: 1,
  y: 0,
  transition: {
    duration: 1000,
    delay: 100,
  },
}" class=" w-full  ">
    <v-timeline align="start" side="end">
      <v-timeline-item v-for="(item, i) in experience" :key="i" :dot-color="'#8c8c73'" elevation="4" >
        <template v-slot:opposite>
          <div :class="`pt-1 headline font-weight-bold text-[#8c8c73]`" v-text="item.date"></div>
        </template>
        <v-card>
          <v-card-title :class="['text-h6', 'bg-[#8c8c73]', 'text-white']">
            {{ item.title }}
          </v-card-title>
          <v-card-text class="bg-white text--primary !p-4 ">
            <p class=" leading-loose"> {{ item.description }} </p>
          </v-card-text>
          <div class="flex flex-wrap  p-2 ">
            <div v-for="t in item.tech" class=" text-sm  p-0.5 px-3 text-white rounded-md m-0.5 bg-[#8c8c73] hover:bg-black/80 transition-color duration-300 ">
              {{ t }}
            </div>
          </div>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script lang="ts" setup>
import Experience from '../data/Experience.json'
const experience = ref(Experience)


const items = [
  {
    color: 'red-lighten-2',
    icon: 'mdi-star',
  },
  {
    color: 'purple-lighten-2',
    icon: 'mdi-book-variant',
  },
  {
    color: 'green-lighten-1',
    icon: 'mdi-airballoon',
  },
  {
    color: 'indigo-lighten-2',
    icon: 'mdi-layers-triple',
  },
]

</script>

<style></style>