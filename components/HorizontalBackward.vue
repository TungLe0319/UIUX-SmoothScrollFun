<template>
  <div class="horizontal-forward">
    <div class="scroll-content">
      <!-- Your content goes here -->
      <!-- Example content: -->


      
      <div v-for="item in 24" :key="item" class="item">{{ item}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Lenis from '@studio-freight/lenis';

export default {
  name: 'HorizontalForward',

  setup() {
    const lenis = new Lenis({
      orientation: 'horizontal', // Set orientation to horizontal
    });

    const items = ref([
      { id: 1, text: 'Item 1' },
      { id: 2, text: 'Item 2' },
      { id: 3, text: 'Item 3' },
      // Add more items as needed
    ]);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    onMounted(() => {
      lenis.scrollTo(0); // Scroll to the start on mount
      requestAnimationFrame(raf);
    });

    onUnmounted(() => {
      lenis.destroy(); // Clean up Lenis instance on component unmount
    });

    return {
      items,
    };
  },
};
</script>

<style scoped>
.horizontal-forward {
  width: 100%;
  overflow-x: hidden;
}

.scroll-content {
  display: flex;
  flex-direction: row;
  white-space: nowrap;
}

.item {
  min-width: 300px;
  height: 200px;
  margin-right: 20px;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
}
</style>
