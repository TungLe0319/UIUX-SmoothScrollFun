<template>

      <div ref="introSection" v-motion :initial="{
        opacity: 0,
        y: 100,
      }" :visible="{
  opacity: 1,
  y: 0,
  transition: {
    duration: 1000,
    delay: 100,
  },
}" class="min-h-[vh] ">
        <div class="  p-20 my-40">
          <h2 class=" text-6xl lg:text-8xl font-semibold   !leading-[9rem]  ">
            I 🖌️doodle🎨 my way across code and digital paper creating art and  
            experiences that fulfill me and hopefully inspires others.</h2>
        </div>
      </div>

</template>

<script lang="ts" setup>

</script>

<style>

</style>