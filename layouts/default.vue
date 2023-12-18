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





onMounted(() => {
 useSmoothScroll()
})

</script>

<style scoped></style>