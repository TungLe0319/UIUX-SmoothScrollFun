<template>
  <SectionHeader header="< Projects />" />
  <div class=" relative   px-10 space-y-72 ">
    <div class="  " v-for="(p, index) in projects">
      <ProjectItem :title="p.title" :src="p.src" :description="p.description" :date="p.date" :tech="p.tech" :link="p.link"
        :index="index" />
    </div>
  </div>
</template>

<script  setup>
import Projects from '../data/Projects.json'
import SectionHeader from "./Globals/SectionHeader.vue";
const projects = ref(Projects)


</script>

<style></style>