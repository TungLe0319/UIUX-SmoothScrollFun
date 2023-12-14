<template>
  <div class="">
    <v-layout class="flex flex-col ">
      <NavBar />
      <slot />
      <Footer />
    </v-layout>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { VuePreloader } from 'vue-preloader';
import '../node_modules/vue-preloader/dist/style.css'


import Lenis from '@studio-freight/lenis'



let smoother

function initLenis() {
  smoother = new Lenis({
    duration: 1,
    smooth: true,
    smoothTouch: false
  })

  function raf(time) {
    smoother.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}


onMounted(() => {
  initLenis()
})

</script>

<style scoped></style>