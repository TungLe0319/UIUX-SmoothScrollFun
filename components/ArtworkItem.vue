<script setup >
import { defineProps, ref, computed, reactive } from 'vue';
import { useParallax } from '@vueuse/core';

const target = ref(null);
const parallax = reactive(useParallax(target));

const layerBase = {
  position: 'absolute',
  // height: '100%',
  // width: '100%',
  transition: '.3s ease-out all',

};

const layer0 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 10}px) translateY(${parallax.roll * 10}px) scale(1.33)`,
}));

const containerStyle = {

  perspective: '1000px',

};

const cardStyle = computed(() => ({


  transition: '.3s ease-out all',
  transform: `rotateX(${parallax.roll * 20}deg) rotateY(${parallax.tilt * 20}deg)`,
}));

const props = defineProps({

  src: String,

});




const showOverlay = ref(false);
const link = 'https://example.com'; // Replace with your actual link



const showingInfo = ref(false);
const toggleInfo = () => {
  showingInfo.value = !showingInfo.value;
};

const showInfo = () => {
  showingInfo.value = true;
};

const hideInfo = () => {
  showingInfo.value = false;
};

const startAnimation = () => {
  showOverlay.value = true;

  setTimeout(() => {
    showOverlay.value = false;
    // window.location.href = link;
  }, 3000);
};
</script>

<template>
  <div ref="target" class="flex flex-col justify-start lg:min-h-[600px] xl:min-h-[900px] py-72 transition-all duration-300 ease-out relative  w-1/5 lg:w-full    ">
 
    <div :style="containerStyle" class=" w-full  flex items-center justify-center  ">
      <div v-motion :initial="{
        opacity: 0,
        y: 100,
      }" :visible="{
  opacity: 1,
  y: 0,
  transition: {
    duration: 300,
    delay: 100,
  },
}" :style="cardStyle" class=" w-52 2xl:w-72 h-full ">
        <button @click="startAnimation" target="_blank" class="">
          <img :style="layer0" :src="src" alt="" class="   rounded-md
               object-cover shadow-none     " />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {

  top: 0;
  left: 1000px;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background-color: white;
  transform: translateX(-100%);
  transition: transform 3s ease;
}


.custom-tooltip {
  height: 100px;
  width: 200px;
  /* Adjust the width as needed */
  background-color: white;
  color: black;
  padding: 10px;
  /* Add padding as needed */
  border: 1px solid #ccc;
  /* Add border as needed */
  border-radius: 8px;
  /* Add border-radius as needed */
}




.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.slide-fade-leave-to,
.slide-fade-leave {
  opacity: 0;
  transform: translateY(-20px);
}
</style>