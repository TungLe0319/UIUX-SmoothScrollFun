<template>
  <div>
    <swiper class="bg-red-400 p-4">
      <swiper-slide v-for="p in projects">
        <img :src="p.src" alt="" class=" w-full h-full object-cover " />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import Projects from '../data/Projects.json'
import { Swiper, SwiperSlide } from 'swiper/vue';
const projects = ref(Projects)
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;


  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>