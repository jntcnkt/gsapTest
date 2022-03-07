/*import { gsap } from "js/gsap.min.js";
import { ScrollTrigger } from "js/ScrollTrigger.min.js";*/
/*
MarvelStudiosSpoilers
reactjs
programming
coding
learnprogramming
ProgrammerHumor
programminghorror
leetcode
*/
gsap.registerPlugin(ScrollTrigger);

let textAnimations = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-welcome-home",
    start: "top top",
    end: "top center",
    scrub: 0.2,
  },
});
let scaleIn = gsap.timeline({
  scrollTrigger: {
    trigger: ".featured-item",
    start: "center center",
    end: "top bottom",
    scrub: 0.2,
  },
});
let novedadesTexto = gsap.timeline({
  scrollTrigger: {
    trigger: ".textbanner-slider",
    start: "center center",
    end: "top bottom",
    scrub: 0.2,
  },
});
let novedadesProducto = gsap.timeline({
  scrollTrigger: {
    trigger: ".js-swiper-featured",
    start: "center center",
    end: "top bottom",
    scrub: 0.2,
  },
});
let slider = [".js-home-main-slider-container", ".section-video-home"];

scaleIn.fromTo(
  ".featured-item",
  {
    
    duration: .5,
    scale: 0.5,
    ease: "none",
  },
  {
    delay: 0.5,
    duration: 1,
    scale: 1,
    ease: Expo.easeIn,
  }
);

textAnimations.fromTo(
  ".section-welcome-home",
  {
    duration: 0.5,
    xPercent: "100",
    ease: "back.in(1.7)",
  },
  {
    delay: 0.5,
    duration: 3.5,
    xPercent: "0",
    ease: "slow(0.1, 0.7, false)",
  }
);
gsap.to(slider[0], {
  ease: "none",
  scrollTrigger: {
    trigger: ".js-main-content.main-content",
    scrub: 1,
    pin: true,
    snap: 1 / (slider.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=200vh",
  }
});
gsap.to(slider[1], {
  ease: "none",
  /*scale: 2,*/
  scrollTrigger: {
    trigger: slider[0],
    scrub: 1,
    pin: true,
    snap: 1 / (slider.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=100vw"
  }
});
novedadesTexto.fromTo(
  ".textbanner-slider",
  {
    y: "-=30vh"
    duration: .5,
    scale: 0.3,
    ease: "none",
    borderRadius: "50%",
  },
  {
    delay: 0.5,
    duration: 1,
    scale: 1,
    ease: Expo.easeIn,
    borderRadius: "0%",
  }
);

novedadesProducto.fromTo(
  ".js-swiper-featured",
  {
    
    duration: .5,
    scale: 0.4,
    ease: "none",
    borderRadius: "50%",
  },
  {
    delay: 0.5,
    duration: 1,
    scale: 1,
    ease: Expo.easeIn,
    borderRadius: "0%",
  }
);

