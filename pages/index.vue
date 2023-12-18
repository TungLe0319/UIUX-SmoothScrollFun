<template>
  <div class="flex flex-col    bg-indigo-600/70    ">
    <div class="">
      <HeroVersionTwo />
    </div>
    <section ref="containerOne" class="min-h-screen flex flex-col items-center justify-center  z-10 ">
      <div class="p-20 backdrop-blur ">
        <div class="flex space-x-4 text-[13rem] font-bold mb-4 justify-center">
          <p class="first-name">Tung </p>
          <p class="last-name">Le</p>
        </div>
        <div class="text-8xl text-indigo-900  font-extrabold flex flex-col items-center justify-center">
          <p class="web-designer">
            WEB DESIGNER & </p>
          <p class="developer">
            DEVELOPER BASED IN
          </p>
          <p class="idaho">Idaho, United States</p>
        </div>
      </div>
      <div class="flex justify-between w-full px-5 items-center">
        <div class="flex space-x-10 items-center">
          <div class="flex scroll-to-explore">
            <Icon name="uil:arrow-circle-down" class="text-5xl " ref="arrow" />
            <div class="text-5xl font-bold">
              Scroll <br>To Explore
            </div>
          </div>
        </div>
        <div ref="containerOneItemSeven" class="flex bg-indigo-800 p-0.5">
          <div class="bg-black flex items-center px-3">
            <Icon name="uil:github" class="text-5xl" />
          </div>
          <div class=" flex items-center p-2">
            <p class="font-bold text-3xl"> Check it out on Github</p>
            <Icon name="uil:external-link-alt" class="text-5xl" />
          </div>
        </div>
      </div>
    </section>
 
    <section ref="containerTwo" class="main-container min-h-screen flex items-center justify-center  w-full  z-10 p-10">
      <div ref="cardOne" class="p-4 border-2 border-indigo-800/10 w-full h-72 shadow-xl bg-white rounded ">
        <p>SCROLLING TO YOUR FACE</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat dolorem perspiciatis ea facilis! Vero.
        </p>
      </div>
    </section>
   
  </div>
</template>

<script  setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const boxOne = ref(null)
const arrow = ref(null)
const cardOne = ref(null)
const containerOne = ref(null)
const containerOneItemSeven = ref(null)
const containerTwo = ref(null)
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);


  const tlOne = gsap.timeline({
    scrollTrigger: {
      trigger: containerOne.value,
      start: "top top",
      end: "+=1000",
      scrub: 1,
      pin: true,
      markers: true
    }
  });

  tlOne.to('.first-name', { xPercent: -350, rotate: 45, rotateY: 600, duration: 3 })
  tlOne.to('.last-name', { xPercent: 450, rotate: -45, rotateY: 600, duration: 3 }, "-=3")
  tlOne.to('.web-designer', { xPercent: 350, rotate: 45, rotateY: 600, duration: 3 }, "-=3")
  tlOne.to('.developer', { xPercent: -350, rotate: -45, rotateY: 600, duration: 3 }, "-=3")
  tlOne.to('.idaho', { xPercent: 350, duration: 3 }, "-=3")
  tlOne.to('.scroll-to-explore', { xPercent: -350,rotate:45,rotateY:600, duration: 3 }, "-=3")
  tlOne.to(containerOneItemSeven.value, { xPercent: 350, rotate: 45, rotateY: 637, duration: 3 }, "-=3")







  const tlTwo = gsap.timeline({
    scrollTrigger: {
      trigger: containerTwo.value,
      start: "top top",
      end: "+=1000",
      scrub: 1,
      pin: true,
      markers: true
    }
  });

tlTwo.from(cardOne.value, { yPercent: 300,width:0, duration: 3 })

  tlTwo.to(cardOne.value, { yPercent: 0,width:'100%', duration: 3 })
})
</script>

<style scoped>
.trigger {



  width: 100vw;
  height: 100vh;

  padding: 20px;
}

.box {
  background-color: black;
  width: 10vw;
  height: 10vw;
}
</style>