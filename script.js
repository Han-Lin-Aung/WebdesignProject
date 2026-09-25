var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1200,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const heroSwiper = new Swiper(".heroSwiper", {
  loop: true,

  speed: 1500,

  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },

  effect: "fade",

  fadeEffect: {
    crossFade: true,
  },

  navigation: {
    nextEl: ".heroSwiper .swiper-button-next",
    prevEl: ".heroSwiper .swiper-button-prev",
  },

  pagination: {
    el: ".heroSwiper .swiper-pagination",
    clickable: true,
  },
});

var mySwiper = new Swiper(".travellers_box .mainSwiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
});

// For Active Button

const hamburger = document.querySelector(".humberger_menu");
const mobileMenu = document.querySelector(".mobile_menu");
const closeMenu = document.querySelector(".close_menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

document.addEventListener("click", (event) => {
  if (
    mobileMenu.classList.contains("active") &&
    !mobileMenu.contains(event.target) &&
    !hamburger.contains(event.target)
  ) {
    mobileMenu.classList.remove("active");
  }
});

const dropdownButtons = document.querySelectorAll(".mobile_dropdown_btn");

dropdownButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const dropdown = button.parentElement;

    dropdown.classList.toggle("active");
  });
});

// GSAP
gsap.registerPlugin(ScrollTrigger);
const mm = gsap.matchMedia();

mm.add("(min-width:752px)", () => {
  gsap.to("header", {
    height: "12vh",
    backgroundColor: "rgba(0,0,0,0.75)",
    backdropFilter: "blur(15px)",
    duration: 0.4,
    scrollTrigger: {
      trigger: "body",
      start: "top -50",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".logo", {
    x: -40,
    opacity: 0,
    duration: 2.2,
    ease: "power3.out",
  });

  gsap.from("#nav_home,#nav_destination,#nav_help", {
    y: -20,
    opacity: 0,
    duration: 1.1,
    stagger: 0.5,
    delay: 0.6,
    ease: "power3.out",
  });

  gsap.from(".homepage_intro h3", {
    y: -20,
    opacity: 0,
    duration: 1.9,
    delay: 1.8,
    ease: "power3.out",
  });

  gsap.from(".homepage_intro p", {
    y: 20,
    opacity: 0,
    duration: 1.9,
    delay: 1.8,
    ease: "power3.out",
  });

  gsap.from(".homepage_intro .homepage_button", {
    y: 20,
    opacity: 0,
    duration: 1.9,
    delay: 1.8,
    ease: "power3.out",
  });

  gsap.from(".packages_box .packages,.travelling_packages", {
    y: 60,
    opacity: 0,
    scale: 0.97,
    duration: 1.5,
    stagger: 0.2,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".packages_box",
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".top_show .heroSwiper", {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".top_show",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".extra_show > *", {
    y: 50,
    opacity: 0,
    duration: 0.9,
    stagger: 0.2,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".extra_show",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".our_goal .goal_title h1", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".our_goal .goal_title",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".our_goal .btn", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".our_goal",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".our_goal_box", {
    y: 50,
    opacity: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".our_goal_rows",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".collections_box", {
    y: 50,
    opacity: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".collections_rows",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".undersea", {
    y: 50,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".undersea_section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".exclusive_box", {
    y: 50,
    opacity: 0,
    duration: 0.9,
    stagger: 0.4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".exclusive_rows",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".travellers_page_title h1", {
    y: 60,
    opacity: 0,
    duration: 0.7,
    delay: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".travellers",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".travellers_page_title p", {
    y: 60,
    opacity: 0,
    duration: 0.7,
    delay: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".travellers",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".mainSwiper ", {
    y: 60,
    opacity: 0,
    duration: 0.7,
    delay: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".travellers_box",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".footer_title h1 ", {
    y: 60,
    opacity: 0,
    duration: 0.7,
    delay: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer_title",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".footer_title p ", {
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer_title",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".footer_input_box input,.footer_input_box button ", {
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: 1.35,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer_input_box",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".final_container > div", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    delay: 1.4,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".final_section",
      start: "top 82%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".copyright_left_box h3", {
    x: -30,
    opacity: 0,
    duration: 1,
    delay: 1.4,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".copyright",
      start: "top 95%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".copyright_right_box a", {
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    delay: 1.5,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".copyright",
      start: "top 95%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".destination_homepage_intro > *", {
    y: 50,
    opacity: 0,
    duration: 1.4,
    stagger: 0.15,
    delay: 0.9,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".destination_homepage_intro",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".contact_top_box > *", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    delay: 0.5,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".contact_top_box",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".contact_box_bottom > *", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    delay: 0.5,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".contact_box_bottom",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".contact_right_box > form", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.9,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".contact_right_box",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });
});

mm.add("(max-width: 751px)", () => {
  gsap.to("header", {
    height: "12vh",
    backgroundColor: "rgba(0,0,0,0.75)",
    backdropFilter: "blur(15px)",
    duration: 0.4,
    scrollTrigger: {
      trigger: "body",
      start: "top -50",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".logo", {
    x: -40,
    opacity: 0,
    duration: 2.2,
    ease: "power3.out",
  });

  gsap.from("#nav_home,#nav_destination,#nav_help", {
    y: -20,
    opacity: 0,
    duration: 1.1,
    stagger: 0.5,
    delay: 0.6,
    ease: "power3.out",
  });

  gsap.from(".homepage_intro h3", {
    y: -20,
    opacity: 0,
    duration: 1.9,
    delay: 1.8,
    ease: "power3.out",
  });

  gsap.from(".homepage_intro p", {
    y: 20,
    opacity: 0,
    duration: 1.9,
    delay: 1.8,
    ease: "power3.out",
  });

  gsap.from(".homepage_intro .homepage_button", {
    y: 20,
    opacity: 0,
    duration: 1.9,
    delay: 1.8,
    ease: "power3.out",
  });

  gsap.utils
    .toArray(".packages_box .packages,.travelling_packages")
    .forEach((box) => {
      gsap.from(box, {
        opacity: 0,
        scale: 0.97,
        y: 60,
        duration: 1.5,
        ease: "power3.out",

        scrollTrigger: {
          trigger: box,
          start: "top 75%",
          scrub: true,
        },
      });
    });

  gsap.from(".top_show .heroSwiper", {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".top_show",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".extra_show > *", {
    y: 50,
    opacity: 0,
    duration: 0.9,
    stagger: 0.2,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".extra_show",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".our_goal .goal_title h1", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".our_goal .goal_title",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".our_goal .btn", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".our_goal",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".our_goal_box", {
    y: 50,
    opacity: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".our_goal_rows",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.utils.toArray(".collections_rows .collections_box").forEach((boxes) => {
    gsap.from(boxes, {
      opacity: 0,
      scale: 0.97,
      y: 60,
      duration: 1.5,
      ease: "power3.out",

      scrollTrigger: {
        trigger: boxes,
        start: "top 80%",
        scrub: true,
      },
    });
  });

  gsap.from(".undersea", {
    y: 50,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".undersea_section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.utils.toArray(".exclusive_rows .exclusive_box").forEach((block) => {
    gsap.from(block, {
      opacity: 0,
      scale: 0.97,
      y: 60,
      duration: 1.5,
      ease: "power3.out",

      scrollTrigger: {
        trigger: block,
        start: "top 80%",
        scrub: true,
      },
    });
  });

  gsap.from(".travellers_page_title h1", {
    y: 60,
    opacity: 0,
    duration: 0.7,
    delay: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".travellers",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".travellers_page_title p", {
    y: 60,
    opacity: 0,
    duration: 0.7,
    delay: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".travellers",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".mainSwiper ", {
    y: 60,
    opacity: 0,
    duration: 0.7,
    delay: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".travellers_box",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".footer_title h1 ", {
    y: 60,
    opacity: 0,
    duration: 0.7,
    delay: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer_title",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".footer_title p ", {
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer_title",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".footer_input_box input,.footer_input_box button ", {
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: 1.35,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer_input_box",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".final_container > div", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    delay: 1.4,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".final_section",
      start: "top 82%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".copyright_left_box h3", {
    x: -30,
    opacity: 0,
    duration: 1,
    delay: 1.4,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".copyright",
      start: "top 95%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".copyright_right_box a", {
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    delay: 1.5,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".copyright",
      start: "top 95%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".destination_homepage_intro > *", {
    y: 50,
    opacity: 0,
    duration: 1.4,
    stagger: 0.15,
    delay: 0.9,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".destination_homepage_intro",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".contact_top_box > *", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    delay: 0.5,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".contact_top_box",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".contact_box_bottom > *", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    delay: 0.5,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".contact_box_bottom",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".contact_right_box > form", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.9,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".contact_right_box",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });
});
