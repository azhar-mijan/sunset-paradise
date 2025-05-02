let split = new SplitText("#title");

gsap.from("#woman", {
  scrollTrigger: {
    scrub: true,
  },
  y: 50,
});

gsap.from("#leftplant", {
  scrollTrigger: {
    scrub: true,
  },
  x: -150,
});

gsap.from("#rightplant", {
  scrollTrigger: {
    scrub: true,
  },
  x: 150,
});

gsap.from("#ball", {
  scrollTrigger: {
    scrub: true,
  },
  x: -200,
});

gsap.from("#lifebuoy", {
  scrollTrigger: {
    scrub: true,
  },
  x: 200,
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".parallax",
      start: "top 50%",
      end: "bottom top",
      toggleActions: "restart none none reset",
    },
  })
  .from(split.chars, {
    yPercent: -150,
    stagger: 0.05,
    duration: 0.7,
    ease: "back",
  })
  .from(split.chars, { opacity: 0, delay: 0.05, stagger: 0.05, duration: 0.2 }, 0);



  window.addEventListener("scroll", function () {
    let value = window.scrollY;
  
    document.getElementById("bottom").style.bottom = value * 0.1 + "px";
    document.getElementById("woman").style.bottom = value * 0.3 + "px";
    document.getElementById("leftplant").style.left = value * -0.3 + "px";
    document.getElementById("rightplant").style.right = value * -0.3 + "px";
    document.getElementById("ball").style.top = value * 0.5 + "px";
    document.getElementById("lifebuoy").style.top = value * -0.2 + "px";
  });
  