<script lang="ts" setup>
import './assets/css/tailwind.css'
import Cursor from './components/Globals/Cursor.vue';
import ProgressBar from './components/Globals/ProgressBar.vue';
</script>

<template>
  <div class="">
    <NuxtLayout>
   <v-app>

      
        <NuxtPage />
    
      </v-app>
    </NuxtLayout>
   
    <Cursor/>
    <ProgressBar/>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.20s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>