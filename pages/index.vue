<template>
  <div class="flex flex-col    bg-indigo-600/70  main-container  ">
    <div class="">
      <HeroVersionTwo />
    </div>
    <div class="min-h-screen flex flex-col items-center justify-center  z-10 ">
      <div class="p-20 backdrop-blur ">
        <div class="flex space-x-4 text-[13rem] font-bold mb-4">
          <p>Tung</p>
          <p>Le</p>
        </div>
        <p class="text-8xl text-indigo-900 font-serif">WEB DESIGNER & DEVELOPER BASED IN Idaho, United States</p>
      </div>

<div class="flex justify-between w-full px-5 items-center">
  <div class="flex space-x-10 items-center">
    <div class="flex">
      <Icon name="uil:arrow-circle-down" class="text-5xl animate-bounce" />
      <div class="text-5xl font-bold">
        Scroll <br>To Explore
      </div>
    </div>
    <div class="text-4xl font-bold">
     Using  StudioFreight/Lenis for that <br>
      Buttery Smooth Scrolling
    </div>
  </div>

  <div class="flex bg-indigo-800 p-0.5">
    <div class="bg-black flex items-center px-3">
      <Icon name="uil:github" class="text-5xl" />
    </div>
    <div class=" flex items-center p-2">
     <p class="font-bold text-3xl"> Check it out on Github</p>
       <Icon name="uil:external-link-alt" class="text-5xl" />
    </div>
  </div>
</div>      
    </div>


    <Projects/>

  </div>
</template>

<script  setup>
import Lenis from '@studio-freight/lenis'




</script>

<style>

</style>