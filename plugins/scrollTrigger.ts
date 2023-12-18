import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
nuxtApp.hook('page:transition:finish',(pageContext) => {
  ScrollTrigger.refresh()
})
})