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
/* const zeppelin = document.getElementById("zeppelin"); */
const tagline = document.getElementById("tagline");

/* Services elements */
const servicesIcon = document.getElementById("service");
const servicesLink = document.getElementById("services-link");
const slides = document.querySelectorAll(".carousel-img");
const nextArrow = document.getElementById("next");
let slideIndex = 1;

/* General Functions */
function changePage(link) {
  zeppelinFloating.pause();
  sections.forEach(section => {
    if (link.classList.contains(`${section.id}`)) {
      if (section.id === "homes") {
        zeppelinFloating.play();
        homeBackgroundEntrance();
        section.classList.add("active");
      } else {
        fadeIn(section);
        section.classList.add("active");
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
    if (link.classList.contains(`${icon.id}`)) {
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

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    bye(slides[i]);
  }
  slides[slideIndex - 1].style.display = "flex";
  entranceFromRight(slides[slideIndex - 1]);
}

function addingSlides(n) {
  showSlides((slideIndex += n));
}

function isHomeActiveMobile() {
  if (home.classList.contains("active")) {
    console.log("Home is active");
  } else {
    mountainOne.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
  }
}

function isHomeActiveDesktop() {
  if (home.classList.contains("active")) {
    console.log("Home is active");
  } else {
    mountainOne.style.transform = "translate(23%, 0%) matrix(3, 0, 0, 1, 0, 0)";
  }
}

function listenToScreenWidth(w) {
  console.log("listen to screen width");
  if (w <= targetWidth) {
    showSlides(slideIndex);
    isHomeActiveMobile();
  } else {
    TweenMax.set(["#slide-two", "#slide-one"], {
      clearProps: "all"
    });
    isHomeActiveDesktop();
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
      ".services-title",
      1, {
        opacity: 0
      }, {
        opacity: 1,
        ease: "power2.out"
      },
      1.3
    )
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

function bye(element) {
  TweenMax.to(element, 1, {
    xPercent: 200,
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
    .to(logoWLetters,
      0.5, {
        fill: '#ffffff'
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
        opacity: 1
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
      logoWLetters, 0.5, {
        clearProps: "all"
      },
      0.5
    )
    .to(
      logoMobile,
      1, {
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
  addingSlides(1);
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
    console.log(vh);
    let w =
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