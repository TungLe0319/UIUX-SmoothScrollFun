<template>
  <div class="cursor  flex items-center justify-center mix-blend-difference  " :class="appState.hoveringLink ? ' ' : ''"
    :style="{ left: `${position.x}px`, top: `${position.y}px`, width: `${appState.cursorWidth}px`, height: `${appState.cursorHeight}px` }">
 
  </div>
  <div v-if="!appState.hoveringLink" class="ringo text-3xl   "
    :class="appState.sectionIsDark ? 'brightness-200' : ' brightness-0'"
    :style="{ left: `${position.x}px`, top: `${position.y}px` }"> </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { appState } from '../../appstate/appstate';

const position = ref({ x: 0, y: 0 });

const updateCursorPosition = (event: MouseEvent) => {
  position.value.x = event.clientX;
  position.value.y = event.clientY;
};

onMounted(() => {
  window.addEventListener('mousemove', updateCursorPosition);

});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursorPosition);
});










</script>

<style scoped >
.cursor {
  position: fixed;

  
  background-color: #ffffff;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;

  transition: width 0.3s, height 0.3s;
}

.ringo {
  position: fixed;


  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: all 0.05s ease;


}
</style>
~/appstate/appstate