// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Select the video element
const video = document.querySelector(".hero-video video");

// Animate the video element on scroll
gsap.matchMedia().add("(min-width: 810px)", () => {
  gsap.to(video, {
    y: -200,
    rotateX: 0,
    scale: 1,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".hero-video video",
      scroller: "body",
      start: "top 120%", // when the top of the video reaches the bottom of the viewport
      end: "top 30%", // when the bottom of the video reaches the top of the viewport
      scrub: 0.8, // smooth scrolling animation
    },
  });
  
  gsap.to(".hero-main", {
      y: 200,
      duration: 2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".hero-video",
        scroller: "body",
        start: "top bottom", // when the top of the video reaches the bottom of the viewport
        end: "top 0%", // when the bottom of the video reaches the top of the viewport
        scrub: 1, // smooth scrolling animation
      },
    });
  
})

onscroll = function() {
    if(window.scrollY > parseInt(document.querySelector("nav:not(.fixed-nav)").offsetHeight)) {
        document.querySelector('.fixed-nav').classList.add("active");
    } else {
        document.querySelector('.fixed-nav').classList.remove("active");
    }
}