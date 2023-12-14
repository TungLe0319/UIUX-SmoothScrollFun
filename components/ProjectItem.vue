<script setup >
import { defineProps, ref, computed, reactive } from 'vue';
import { useParallax } from '@vueuse/core';
import { appState} from "../appstate/appstate";

const target = ref(null);
const parallax = reactive(useParallax(target));

const layerBase = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  transition: '.3s ease-out all',

};

const layer0 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 10}px) translateY(${parallax.roll * 10}px) scale(1.33)`,
}));

const containerStyle = {
  margin: '1em auto',
  perspective: '1000px',

};

const cardStyle = computed(() => ({
  height: '24rem',
  width: '35rem',

  transition: '.3s ease-out all',
  transform: `rotateX(${parallax.roll * 20}deg) rotateY(${parallax.tilt * 20}deg)`,
}));

const props = defineProps({
  title: String,
  src: String,
  description: String,
  date: String,
  tech: Array,
  link: String,
  index: Number,
});




const showOverlay = ref(false);




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
  <div ref="target" class="flex flex-col justify-center min-h-[450px] transition-all duration-300 ease-out relative   ">
    <div
      class="backdrop-blur-xl bg-gray-950/40 rounded-md w-5/6 h-1/2 p-5 left-1/2  bottom-0   text-white noto-sans -translate-x-1/2 z-50 absolute transition-all duration-500 origin-center"
      :class="showingInfo ? 'scale-100' : 'scale-0'">
      <p class="font-semibold underline mb-5">Project Description:</p>
      {{ description }}
    </div>
    <div :style="containerStyle" class=" group flex  justify-center  w-full  ">
      <div v-motion :initial="{
        opacity: 0,
        y: 100,
      }" :visibleOnce="{
  opacity: 1,
  y: 0,
  transition: {
    duration: 300,
    delay: 100,
  },
}" :style="cardStyle">
        <a :href="link"  @mouseenter="handleCursor" @mouseleave="resetCursor" target="_blank" class=" ">
          <div class=" font-bold text-3xl  flex   mb-20   w-96 space-x-2  ">
            <div class=" ">
              0{{ index + 1 }}
            </div>
            <h4 class=" vb      text-xl group-hover:text-teal-300 transition-colors duration-200 ">
              &lt; {{ title }}
              /> </h4>
            <div class="flex space-x-4">
              <div class=" bg-red-900">
              </div>
            </div>
            <div class=" flex space-x-2 ">
              <div @click="toggleInfo" @mouseover="showInfo" @mouseleave="hideInfo"
                class="z-50 group/info   flex items-center justify-center ">
                <Icon name="ion:information-circle-sharp" class=" text-3xl" />
              </div>
              <div class="text-gray-500 group-hover:text-teal-300  group-hover:translate-x-4 transition-all duration-200">
                <Icon name="material-symbols:arrow-right-alt-rounded" />
              </div>
            </div>
          </div>
          <img :style="layer0" :src="src" alt="" class="   rounded-md
               object-cover hover:shadow-2xl hover:shadow-gray-800      w-full h-full  " />
          <div class="absolute     -bottom-[10rem]  -left-0   text-white flex   w-full">
            <div v-for="t in tech">
              <!-- <img :src="t.src" alt="" class="w-10 my-2"> -->
              <v-tooltip :text="t.title">
                <template v-slot:activator="{ props }">
                  <Icon v-bind="props" :name="t.src" alt="" class="mx-0.5 my-2 shadow-none text-4xl " />
                </template>
              </v-tooltip>
            </div>
          </div>
        </a>
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
</style>~/appstate/appstate