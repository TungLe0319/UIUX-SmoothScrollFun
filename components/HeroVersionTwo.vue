<template>
  <div class="min-h-screen fixed flex items-center justify-center  bg-blue-700/40 ">
    <div class="blob-1 w-44 h-44 absolute left-1/2 top-4" :style="{ transform: `translate(${blob1X}px, ${blob1Y}px)` }">
    </div>
    <div class="blob-2 w-44 h-44 absolute top-72 left-24" :style="{ transform: `translate(${blob2X}px, ${blob2Y}px)` }">
    </div>
    <div class="blob-1 w-72 h-72 absolute bottom-0 left-0" :style="{ transform: `translate(${blob2X}px, ${blob2Y}px)` }">
    </div>
    <div class="blob-2 w-32 h-32 absolute bottom-24 right-24"
      :style="{ transform: `translate(${blob2X}px, ${blob2Y}px)` }"></div>
    <div class="blob-2 w-44 h-44 absolute top-24 right-44" :style="{ transform: `translate(${blob2X}px, ${blob2Y}px)` }">
    </div>
    <div class="blob-1 w-96  h-96 absolute left-1/2 bottom-1/4"
      :style="{ transform: `translate(${blob1X}px, ${blob1Y}px)` }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watchEffect } from 'vue';

const mouseX = ref(0);
const mouseY = ref(0);
const blob1X = ref(0);
const blob1Y = ref(0);
const blob2X = ref(0);
const blob2Y = ref(0);

const handleMouseMove = (event: MouseEvent) => {
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;
};

onMounted(() => {
  if (process.client) {
    window.addEventListener('mousemove', handleMouseMove);
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('mousemove', handleMouseMove);
  }
});

const followMouse = () => {
  if (process.client) {
    const range = 800;
    blob1X.value = (mouseX.value / window.innerWidth) * range;
    blob1Y.value = (mouseY.value / window.innerHeight) * range;

    blob2X.value = ((window.innerWidth - mouseX.value) / window.innerWidth) * range;
    blob2Y.value = ((window.innerHeight - mouseY.value) / window.innerHeight) * range;
  }
};

watchEffect(() => {
  followMouse();
});
</script>
<style lang="scss" scoped>
.blob-1 {

  background: radial-gradient(73.4% 100.98% at 95.54% 95.05%, rgba(255, 156, 65, 0.78) 0%, rgba(255, 168, 88, 0) 100%), linear-gradient(197.37deg, #FFF0A4 -0.38%, rgba(255, 240, 164, 0) 101.89%), radial-gradient(58.85% 73.83% at 9.82% 3.13%, rgba(49, 132, 255, 0.8) 0%, rgba(56, 75, 247, 0.208) 52.16%, rgba(62, 246, 246, 0) 100%), linear-gradient(117.39deg, #3E9EF6 3.91%, rgba(238, 43, 183, 0.33) 37.48%, rgba(246, 62, 106, 0) 73.98%), linear-gradient(306.53deg, #FFAADD 19.83%, rgba(255, 170, 221, 0) 97.33%);
  background-blend-mode: normal, normal, normal, normal, normal, normal;
  filter: blur(50px);
}

.blob-2 {
  border-radius: 25rem;
  background: radial-gradient(73.4% 100.98% at 95.54% 95.05%, rgba(255, 156, 65, 0.78) 0%, rgba(255, 168, 88, 0) 100%), linear-gradient(197.37deg, #FFF0A4 -0.38%, rgba(255, 240, 164, 0) 101.89%), radial-gradient(58.85% 73.83% at 9.82% 3.13%, rgba(49, 132, 255, 0.8) 0%, rgba(56, 75, 247, 0.208) 52.16%, rgba(62, 246, 246, 0) 100%), linear-gradient(117.39deg, #3E9EF6 3.91%, rgba(238, 43, 183, 0.33) 37.48%, rgba(246, 62, 106, 0) 73.98%), linear-gradient(306.53deg, #FFAADD 19.83%, rgba(255, 170, 221, 0) 97.33%);
  background-blend-mode: screen, saturation, lighten, multiply, luminosity, overlay;
  filter: blur(50px);
}</style>