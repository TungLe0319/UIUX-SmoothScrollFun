import Lenis from "@studio-freight/lenis";
import gsap from "gsap";

export const useSmoothScroll = () => {
  const scrollLenis = new Lenis({
    duration: 1.5,
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
  });

  gsap.ticker.add((time: any) => {
    scrollLenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
};
