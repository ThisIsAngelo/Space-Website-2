gsap.registerPlugin(ScrollTrigger);

let lastScrollTop = 0;
const header = document.querySelector("header");
const toTop = document.querySelector(".to-top");
const heroSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const heroSectionOffsetTop = heroSection.offsetTop;

  if (scrollTop > heroSectionOffsetTop) {
    toTop.classList.add("active");  
  } else {
    toTop.classList.remove("active");
  }

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

gsap.to("#intro-logo", {
  opacity: 100,
  duration: 2,
  ease: "power4.inOut",
  onComplete: () => {
    gsap.to("#intro-logo", {
      scale: 80,
      transform: "translateX(800%) translateY(400%)",
      duration: 6,
      ease: "power4.inOut",
    })
  }
})

const textAnimate = new SplitType("#text-animate")

gsap.to(".intro-1", {
  opacity: 0,
  display: "none",
  delay: 5.5,
  onComplete: () => {
    gsap.to("#header", {
      opacity: 100,
      y: 0,
      duration: 1,
      ease: "power4.inOut",
    })

    gsap.to("#hero-image", {
      opacity: 100,
      y: 0,
      duration: 2.5,
      ease: "power4.inOut",
    })

    gsap.to(".char", {
      opacity: 100,
      y:0,
      stagger: 0.05,
      delay:0.2,
      duration:.1,
    })

    gsap.to("#sub-title", {
      opacity: 100,
      y: 0,
      delay:0.2,
      duration: 1,
      ease: "power4.inOut",
    })

    gsap.to(".point", {
      opacity: 100,
      y:0,
      stagger: 0.5,
      delay:0.2,
      duration:1,
      ease: "power4.inOut",
    })
  }
});

gsap.to("#planet-selection", {
  scrollTrigger: {
    trigger: "#planet-selection",
    start: "top 75%",
  },
  opacity: 1,
  x: 0,
  duration: 2,
  ease: "power4.inOut",
  onComplete: () => {
    gsap.to("#planet-title", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.inOut",
    })

    gsap.to("#planet-desc", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: .5,
      stagger: .2,
      ease: "power4.inOut",
    })

    gsap.to(".point-planet", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: .5,
      stagger: .2,
      ease: "power4.inOut",
    })

    gsap.to("#planet", {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 1,
      ease: "power4.inOut",
    })
  }

})

gsap.to("#about-title", {
  scrollTrigger: {
    trigger: "#about-title",
    start: "top 75%",
  },
  opacity: 1,
  y: 0,
  duration: 1.5,
  ease: "power4.inOut",
  onComplete: () => {
    gsap.to("#about-desc", {
      opacity: 1,
      y: 0,
      duration: .5,
      stagger: .2,
      ease: "power4.inOut",
    })

    gsap.to("#about-action", {
      opacity: 1,
      y: 0,
      duration: .5,
      ease: "power4.inOut",
    })

    gsap.to("#about-image", {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power4.inOut",
    })
}})

gsap.to("#grow-title", {
  scrollTrigger: {
    trigger: "#grow-title",
    start: "top 65%",
  },
  opacity: 1,
  y: 0,
  duration: 1.5,
  ease: "power4.inOut",
  onComplete: () => {
    gsap.to("#benefit", {
      opacity: 1,
      y: 0,
      duration:1,
      stagger: 0.2,
      ease: "power4.inOut",
    })
  }
})

gsap.to("#join-title", {
  scrollTrigger: {
    trigger: "#join-title",
    start: "top 75%",
  },
  opacity: 1,
  y: 0,
  duration: 1.5,
  ease: "power4.inOut",
  onComplete: () => {
    gsap.to("#join-desc", {
      opacity: 1,
      y: 0,
      duration:1,
      ease: "power4.inOut",
    })

    gsap.to("#join-action", {
      opacity: 1,
      y: 0,
      duration:1,
      ease: "power4.inOut",
    })
  }
})

gsap.to("#footer", {
  scrollTrigger: {
    trigger: "#footer",
    start: "top 90%",
  },
  y:0,
  opacity: 1,
  duration: 1,
});