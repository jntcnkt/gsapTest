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
    start: "top 95%",
    end: "top top",
    scrub: 0.5,
  },
});
let sliderTest = gsap.timeline({
  scrollTrigger: {
    trigger: ".test",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});
let scaleIn = gsap.timeline({
  scrollTrigger : {
    trigger: ".zoom",
    start: "top bottom",
    end: "top top",
    scrub: true,
  },
});

scaleIn.to(".zoom", {
  delay: 0.5,
  duration: 3.5,
  scale: 2,
  ease: "power3",
});
textAnimations.fromTo(
  ".section-welcome-home",
  {
    duration: 1,
    textAlign: "left",
    ease: "back.in(1.7)",
  },
  {
    delay: 0.5,
    duration: 3.5,
    x: "+=30vw",
    ease: "slow(0.1, 0.7, false)",
  }
);
let proxy = { skew: 0 },
  skewSetter = gsap.quickSetter(".section-product-slider-home", "skewY", "deg"), // fast
  clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {
        skew: 0,
        duration: 0.8,
        ease: "power1",
        overwrite: true,
        onUpdate: () => skewSetter(proxy.skew),
      });
    }
  },
});

sliderTest.to(".test", {
  backgroundPosition: `50% ${100 / 2}vh`,
  ease: "slow(0.1, 0.7, false)",
  duration: 3.5,
});
// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".section-product-slider-home", {
  transformOrigin: "right center",
  force3D: true,
});
/*
Hi, I also just had an interview (on-site) at Google. Here are some of the things that helped me prepare.

Cracking the Code Book (5th edition)

Algorithm Design Manual, since you mentioned you're rusty on algorithms and data structures.

Big-O Cheatsheet

Check out hiredintech. It has some good tips and the canvas handout is pretty nice to keep you organize when you are practicing problems.

Practice problems from TopCoder. Division 2 Level 1-3 are around the level of questions I received. Focus on the questions that deal with the general data structures: arrays, strings, graphs. One way to get you start practice "thinking" is to come up with your own examples and edge cases before you look at the examples given in the TopCoder problems. My experience is, the interviewer will ask you a question and probably give you a basic example. It is up to you to come up with more test cases and examples.

Know your resume, prepare to talk about 1-2 past projects. This can be projects done for a class.

Good Luck.
*/
