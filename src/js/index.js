/* General elements */
const sections = document.querySelectorAll("article");
const targetWidth = 1024;
const logoWLetters = document.querySelectorAll(".logo-w-letters");
const logoMobile = document.getElementById("logo-mobile");
const logoSvg = document.getElementById("logo-svg");

/* Background elements */
const mountainOne = document.getElementById("mountain-001");
const mountainTwo = document.getElementById("mountain-002");
const cities = document.getElementById("cities-001");

/* Menu elements */
const menuLinks = document.querySelectorAll(".header-links");
const headerLinksToFocus = document.querySelectorAll(".links-onhover");

/* Tab bar elements */
const tabLinks = document.querySelectorAll(".tab-links");
const backgroundIcons = document.querySelectorAll(".background-icons");

/* Side bar elements */
const sideIcons = document.querySelectorAll(".side-icons");
const sideIconsImages = document.querySelectorAll(".icon");

/* Dictionary elements */
const en = document.getElementById("en");
const es = document.getElementById("es");
const enMobile = document.getElementById("en-mobile");
const esMobile = document.getElementById("es-mobile");

/* Home elements */
const home = document.querySelector(".home");
const zeppelin = document.getElementById("zeppelin");
const tagline = document.getElementById("tagline");

/* Services elements */
const servicesSection = document.getElementById("service");
const servicesIcon = document.getElementById("service-icon");
const servicesLink = document.getElementById("services-link");
const nextArrow = document.getElementById("next");
/* let slideIndex = 1; */

/* Projects elements */
const nextPArrow = document.getElementById("next-projects");

/* Us elements */
const nextUArrow = document.getElementById("next-us");
const prevUArrow = document.getElementById("prev-us");

/* General Functions */
function changePage(link) {
  zeppelinFloating.pause();
  sections.forEach(section => {
    if (link.classList.contains(`${section.id}`)) {
      fadeIn(section);
      section.classList.add("active");
      if (section.id === "homes") {
        /* zeppelinFloating.play(); */
        homeBackgroundEntrance();
      } else if (section.id === "service") {
        homeBackgroundExit();
        if (1024 <= targetWidth) {
          showSlides(1, 0);
        }
      } else if (section.id === "project") {
        homeBackgroundExit();
        if (1024 <= targetWidth) {
          showSlides(1, 1);
        }
      } else if (section.id === "us") {
        homeBackgroundExit();
        if (1024 <= targetWidth) {
          showSlides(1, 2);
        }
      } else {
        homeBackgroundExit();
      }
    }
  });
}

function focusAnchor(link) {
  link.classList.remove("innactive");
  link.classList.add("active");
}

function removeClass(element) {
  element.classList.remove("active");
  element.classList.add("innactive");
}

function changeBackgroundColor(link) {
  backgroundIcons.forEach(icon => {
    let arr = icon.id.split("-");
    let x = arr.shift();
    if (link.classList.contains(x)) {
      icon.classList.add("active");
    }
  });
}

function removeActiveClass(arr) {
  arr.forEach(element => {
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    }
  });
}

/*const hideEn = (english, spanish) => {
  english.classList.add("hide");
  spanish.classList.remove("hide");
};
const hideEs = (spanish, english) => {
  spanish.classList.add("hide");
  english.classList.remove("hide");
};*/

let slideIndex = [1, 1, 1];
let slideId = [".slides-services", ".slides-projects", ".slides-us"];

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no, n);
}

function showSlides(n, no, originalValue) {
  let i;
  let x = document.querySelectorAll(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    if (originalValue === -1) {
      byeLeft(x[i]);
      entranceFromLeft(x[slideIndex[no] - 1]);
    } else {
      bye(x[i]);
      entranceFromRight(x[slideIndex[no] - 1]);
    }
  }
  x[slideIndex[no] - 1].style.display = "grid";
}

function listenToScreenWidth(w) {
  if (w <= targetWidth) {
    sections.forEach(section => {
      if (section.classList.contains("active")) {
        if (section.id === "service") {
          showSlides(1, 0);
        } else if (section.id === "project") {
          showSlides(1, 1);
        } else if (section.id === "us") {
          showSlides(1, 2);
        }
      }
    });
  } else {
    TweenMax.set(
      [
        "#slide-two",
        "#slide-one",
        "#slide-one-projects",
        "#slide-two-projects"
      ], {
        clearProps: "all"
      }
    );
  }
}

/* ------------------------------------- GSAP Animation functions ------------------------------------- */

function fadeIn(section) {
  const tl = new TimelineMax();
  tl.fromTo(
      section,
      1.5, {
        xPercent: -100
      }, {
        xPercent: 0,
        zIndex: 1
      },
      0.1
    )
    .fromTo(
      ".arrows",
      1, {
        opacity: 0
      }, {
        opacity: 1
      },
      1.3
    )
    .fromTo(
      ".section-title",
      1, {
        opacity: 0
      }, {
        opacity: 1,
        ease: "power2.out"
      },
      1.3
    );
}

function entranceFromRight(elementOne) {
  TweenMax.fromTo(
    elementOne,
    1, {
      xPercent: -200,
      width: 0,
      opacity: 0
    }, {
      xPercent: 0,
      width: "80%",
      opacity: 1
    }
  );
}

function entranceFromLeft(elementOne) {
  TweenMax.fromTo(
    elementOne,
    1, {
      xPercent: 200,
      width: 0,
      opacity: 0
    }, {
      xPercent: 0,
      width: "80%",
      opacity: 1
    }
  );
}

function bye(element) {
  TweenMax.to(element, 1, {
    xPercent: 200,
    width: 0,
    opacity: 0
  });
}

function byeLeft(element) {
  TweenMax.to(element, 1, {
    xPercent: -200,
    width: 0,
    opacity: 0
  });
}

const zeppelinFloating = TweenMax.to(zeppelin, 2, {
  y: "-=15px",
  yoyo: true,
  repeat: -1,
  ease: Power0.easeNone,
  paused: false
});

function homeBackgroundExit() {
  const tl = new TimelineMax();
  tl.to(
      mountainOne,
      1.5, {
        onStart: focusAnchor(mountainOne)
      },
      0.1
    )
    .to(
      mountainTwo,
      1, {
        onStart: focusAnchor(mountainTwo)
      },
      0.1
    )
    .to(
      cities,
      1, {
        opacity: 0
      },
      "-0.1"
    )
    .to(
      tagline,
      0.3, {
        opacity: 0
      },
      0.1
    )
    .to(
      logoWLetters,
      0.5, {
        fill: "#ffffff",
        ease: "sine.out"
      },
      0.1
    )
    .to(
      logoMobile,
      1, {
        onStart: focusAnchor(logoMobile)
      },
      0.1
    )
    .to(
      logoSvg,
      1, {
        onStart: focusAnchor(logoSvg)
      },
      0.1
    )
    .to(
      ".web-studio",
      0.5, {
        fill: "transparent"
      },
      0.1
    );
}

function homeBackgroundEntrance() {
  const tl = new TimelineMax();
  tl.to(
      mountainOne,
      1.5, {
        onStart: removeClass(mountainOne)
      },
      0.1
    )
    .to(
      mountainTwo,
      1, {
        onStart: removeClass(mountainTwo)
      },
      0.1
    )
    .to(
      cities,
      1, {
        opacity: 1,
        onComplete: zeppelinFloating.play()
      },
      0.7
    )
    .fromTo(
      home,
      1.5, {
        xPercent: -100
      }, {
        xPercent: 0,
        zIndex: 1
      },
      0.1
    )
    .to(
      tagline,
      1, {
        opacity: 1
      },
      0.7
    )
    .to(
      logoWLetters,
      0.1, {
        clearProps: "all"
      },
      "-0.5"
    )
    .fromTo(
      logoMobile,
      1.5, {
        opacity: 0
      }, {
        opacity: 1
      },
      0.5
    )
    .to(
      logoMobile,
      1.5, {
        onStart: removeClass(logoMobile)
      },
      0.1
    )
    .to(
      logoSvg,
      1, {
        onStart: removeClass(logoSvg)
      },
      0.1
    )
    .to(
      ".web-studio",
      1.5, {
        fill: "#000000"
      },
      0.5
    );
}

/* ------------------------------------- DOM EVENTS ------------------------------------- */

menuLinks.forEach(link =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
    removeActiveClass(sections);
    removeActiveClass(headerLinksToFocus);
    removeActiveClass(backgroundIcons);
    changePage(link);
  })
);

headerLinksToFocus.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    focusAnchor(link);
  });
});

tabLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    changeBackgroundColor(link);
  });
});

sideIcons.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    removeActiveClass(sideIconsImages);
    focusAnchor(link.firstChild);
  });
});

zeppelin.addEventListener("click", function (e) {
  e.preventDefault();
  servicesIcon.classList.add("active");
  servicesLink.classList.add("active");
  homeBackgroundExit();
});

/*en.addEventListener("click", e => {
  e.preventDefault();
  hideEn(en, es);
});
es.addEventListener("click", e => {
  e.preventDefault();
  hideEs(es, en);
});
enMobile.addEventListener("click", e => {
  e.preventDefault();
  hideEn(enMobile, esMobile);
});
esMobile.addEventListener("click", e => {
  e.preventDefault();
  hideEs(esMobile, enMobile);
});*/

nextArrow.addEventListener("click", e => {
  e.preventDefault();
  plusSlides(1, 0);
});

nextPArrow.addEventListener("click", e => {
  e.preventDefault();
  plusSlides(1, 1);
});

nextUArrow.addEventListener("click", e => {
  e.preventDefault();
  plusSlides(1, 2);
});

prevUArrow.addEventListener("click", e => {
  e.preventDefault();
  plusSlides(-1, 2);
});

document.addEventListener("gesturestart", function (e) {
  e.preventDefault();
  document.body.style.zoom = 0.99;
});

document.addEventListener("gesturechange", function (e) {
  e.preventDefault();
  document.body.style.zoom = 0.99;
});

document.addEventListener("gestureend", function (e) {
  e.preventDefault();
  document.body.style.zoom = 0.99;
});

/* ------------------------------------- CSSOM EVENTS ------------------------------------- */

/* Adjusting viewport units in mobile version. Reference: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/ */

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
let w =
  document.documentElement.clientWidth ||
  document.body.clientWidth ||
  window.innerWidth;
listenToScreenWidth(w);

/* Listen when rezising in order to 'refresh' the vh value */

window.addEventListener(
  "resize",
  () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    w =
      document.documentElement.clientWidth ||
      document.body.clientWidth ||
      window.innerWidth;
    listenToScreenWidth(w);
  },
  false
);

if (/iPhone/i.test(navigator.userAgent)) {
  document.querySelector("html").classList.add("iphone");
}

let lastTouchEnd = 0;
document.addEventListener(
  "touchend",
  function (e) {
    let now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
      e.preventDefault();
    }
    lastTouchEnd = now;
  },
  false
);