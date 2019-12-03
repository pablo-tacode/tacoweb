/* General elements */
const sections = document.querySelectorAll("article");

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
const servicesIcon = document.getElementById("service");
const servicesLink = document.getElementById("services-link");
const slides = document.querySelectorAll(".carousel-img");
const prevArrow = document.getElementById("prev");
const nextArrow = document.getElementById("next");


/* General Functions */
function changePage(link) {
  zeppelinFloating.pause();
  sections.forEach(section => {
    if (link.classList.contains(`${section.id}`)) {
      fadeIn(section);
      if (section.id === "homes") {
        zeppelinFloating.play();
        homeBackgroundEntrance()
        section.classList.add("active");
      } else {
        section.classList.add("active");
        homeBackgroundExit();
      }
    }
  });
}

function focusAnchor(link) {
  link.classList.remove("innactive")
  link.classList.add("active");
}

function removeClass(element) {
  element.classList.remove("active");
  element.classList.add("innactive")
}

function sideIconsOnFocus(link) {
  link.firstChild.style.opacity = "1";
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

const hideEn = () => {
  en.classList.add("hide");
  es.classList.remove("hide");
};

const hideEs = () => {
  es.classList.add("hide");
  en.classList.remove("hide");
};

const hideEng = () => {
  enMobile.classList.add("hide");
  esMobile.classList.remove("hide");
};

const hideSpa = () => {
  esMobile.classList.add("hide");
  enMobile.classList.remove("hide");
};


let xPercent, mountainScale

function listenToScreenWidth(w) {
  const targetWidth = 1024;
  if (w <= targetWidth) {
    xPercent = "0%"
    mountainScale = 1
    showSlides(slideIndex);
    if(home.classList.contains('active')){
      console.log('Home is active')
      }else{
        mountainOne.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
      }
  } else {
    xPercent = "23%"
    mountainScale = 3
    slides.forEach(slide => slide.removeAttribute('style'));
    if(home.classList.contains('active')){
      console.log('Home is active')
      }else{
        mountainOne.style.transform = "translate(23%, 0%) matrix(3, 0, 0, 1, 0, 0)";
      }
}}

let slideIndex = 1;

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}


function addingSlides(n) {
  showSlides(slideIndex += n);
}

/* ------------------------------------- GSAP Animation functions ------------------------------------- */

function fadeIn(section) {
  TweenMax.fromTo(section, 1.5, {
    x: "-100%"
  }, {
    x: "0%",
    zIndex: 1
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
  tl.to(mountainOne, 1, {
      scaleX: mountainScale,
      ease: "power1.out"
    }, 0.1)
    .to(mountainOne, 1, {
      xPercent: xPercent,
      onComplete: focusAnchor(mountainOne)
    }, 0.1)
    .to(mountainTwo, 1, {
      y: "100%"
    }, 0.1)
    .to(cities, 1, {
      y: "100%"
    }, 0.1)
    .to(tagline, 0.5, {
      opacity: 0
    }, 0.1)
}

function homeBackgroundEntrance() {
  const tl = new TimelineMax();
  tl.to(mountainOne, 1, {
      scaleX: 1,
      ease: "power1.out"
    }, 0.1)
    .to(mountainOne, 1, {
      onStart: removeClass(mountainOne),
      xPercent: "0%"
    }, 0.1)
    .to(mountainTwo, 1, {
      y: "0%"
    }, 0.1)
    .to(cities, 1, {
      y: "0%"
    }, 0.1)
    .to(tagline, 1, {
      opacity: 1
    }, 0.7)
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

en.addEventListener("click", hideEn);

es.addEventListener("click", hideEs);

enMobile.addEventListener("click", hideEng);

esMobile.addEventListener("click", hideSpa);

prevArrow.addEventListener("click", (e) => {
  e.preventDefault()
  addingSlides(-1)
});

nextArrow.addEventListener("click", (e) => {
  e.preventDefault()
  addingSlides(1)
});

/* ------------------------------------- CSSOM EVENTS ------------------------------------- */

/* Adjusting viewport units in mobile version. Reference: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/ */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
let w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
listenToScreenWidth(w);

/* Listen when rezising in order to 'refresh' the vh value */
window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  let w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
  listenToScreenWidth(w);
});