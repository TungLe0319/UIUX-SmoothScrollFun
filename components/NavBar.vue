<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const activeItem = ref<string | null>(null);
const navTransform = ref('translateY(0)')
const Y = ref(0)
let lastScrollPosition = 0

const route = useRoute()
route.path

function handleScroll() {
  const scrollY = window.scrollY;


  Y.value = scrollY

  // Adjust the threshold value (200) based on your specific requirement
  const scrollThreshold = 200;

  navTransform.value =
    scrollY > lastScrollPosition && scrollY > scrollThreshold
      ? 'translateY(-100%)'
      : 'translateY(0)';

  lastScrollPosition = scrollY;
}
const isActive = (href: string) => {
  return activeItem.value === href;
};


const scrollToSection = (sectionId: string) => {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

function handleIndicator(el: HTMLElement) {
  const indicator = document.querySelector('.nav-indicator') as HTMLElement
  const items = document.querySelectorAll('.nav-item')

  items.forEach((item) => {
    item.classList.remove('active')
    item.removeAttribute('style')
  })

  indicator.style.width = `${el.offsetWidth}px`
  indicator.style.left = `${el.offsetLeft}px`

  const activeColor = el.getAttribute('active-color')
  if (activeColor !== null) {
    indicator.style.backgroundColor = activeColor
    el.style.color = activeColor
  }

  el.classList.add('active')
}

interface HTMLElementWithActiveClass extends HTMLElement {
  classList: DOMTokenList & {
    contains(token: string): boolean
  }
}
// Function to setup listeners
function setupIndicatorListeners() {
  const items: NodeListOf<HTMLElement> = document.querySelectorAll('.nav-item')
  const indicator: HTMLElement | null
    = document.querySelector('.nav-indicator')

  items.forEach((item: HTMLElement) => {
    if (item.getAttribute('href') === route.path) {
      item.classList.add('is-active')
      handleIndicator(item)
    }
    item.addEventListener('click', e =>
      handleIndicator(e.target as HTMLElement))
    if ((item as HTMLElementWithActiveClass).classList.contains('is-active'))
      handleIndicator(item)
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  setTimeout(() => {
    setupIndicatorListeners()
  }, 2000)


})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})






const items = [
  
  { title: 'about', href: '#about', icon: 'mdi-book' },
  { title: 'services', href: '#services', icon: 'mdi-food' },
  { title: 'projects', href: '#projects', icon: 'mdi-food' },
  { title: 'contact', href: '#contact', icon: 'mdi-food' },

]


const threshold = ref(100)
</script>
<template>
  <v-app-bar app elevation="0" :scroll-threshold="threshold"
    class="px-4 font-serif transition-color bg-transparent duration-500 "
 >
    <template v-slot:prepend>
      <v-menu offset="10">
        <template v-slot:activator="{ props }">
          <div class="lg:hidden block">
            <v-app-bar-nav-icon v-bind="props"></v-app-bar-nav-icon>
          </div>
        </template>
        <v-list class="w-full bg-red-400" color="orange-lighten-4">
          <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary">
            <NuxtLink :to="item.href">
              <div class="flex space-x-4 my-5">
                <v-icon :icon="item.icon" size="x-large"></v-icon>
                <v-list-item-title v-text="item.title" class="!text-5xl"></v-list-item-title>
              </div>
            </NuxtLink>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
    <div class="flex space-x-4 items-center justify-center" v-motion-slide-left :delay="2000">
      <Icon name="ic:outline-barcode" class="text-5xl  drop-shadow-lg" />
      <v-toolbar-title>
        <h3 class="font-bold">Tung</h3>
      </v-toolbar-title>
      <Icon name="material-symbols-light:code-off-rounded" class="text-5xl  drop-shadow-lg" />
    </div>
    <v-spacer></v-spacer>
    <!-- <ul  class="gap-4 relative hidden lg:flex">
      <li v-motion-slide-right :delay="2000"  v-for="(item, index) in items" :key="index">
        <nuxt-link  :to="item.href" class="nav-item" exact-active-class="active text-orange-300 drop-shadow-sm ">
          {{ item.title }}
        </nuxt-link>
      </li>
      <div v-motion-slide-right :delay="2000" class="nav-indicator"></div>
    </ul> -->
    <div>
      <ul class="gap-4 relative hidden lg:flex">
        <li v-motion-slide-right :delay="1000" v-for="(item, index) in items" :key="index">
          <button @click="scrollToSection(item.href)" class="nav-item   !text-3xl font-bold text-indigo-950 "
            :class="{ 'active text-orange-300 drop-shadow-sm': isActive(item.href) }">
            {{ item.title }}
          </button>
        </li>
      </ul>
    </div>
  </v-app-bar>
</template>

<style scoped>
.nav-item {
  @apply transition-all duration-300 ease-in-out relative p-2 text-xl;
}

.nav-item:before {
  content: "";
  position: absolute;
  bottom: 0;

  width: 0%;
  height: 4px;
  background-color: rgb(0, 0, 0);

  opacity: 0;
  transition: 0.3s;
}



.nav-item:hover:before {
  width: 100%;
  opacity: 1;
  transition: 0.3s;
}


.nav-indicator {
  position: absolute;
  left: 0;
  bottom: -6px;
  height: 4px;
  transition: 0.4s;
  background-color: rgb(253 186 116);


  border-radius: 8px 8px 0 0;
}

.nav-indicator.active {
  transform: translateX(100%);
}

@media (max-width: 580px) {
  .nav {
    overflow: auto;
  }
}
</style>
