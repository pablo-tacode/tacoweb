const zeppelin = document.getElementById("zeppelin");
const sections = document.querySelectorAll("article");
const menuLinks = document.querySelectorAll(".header-links");
const headerLinksToFocus = document.querySelectorAll(".links-onhover");
const tabLinks = document.querySelectorAll(".tab-links");
const backgroundIcons = document.querySelectorAll(".background-icons");
const sideIcons = document.querySelectorAll(".side-icons");
const sideIconsImages = document.querySelectorAll(".icon");
const tagline = document.getElementById("tagline");
const servicesIcon = document.getElementById("service");
const servicesLink = document.getElementById("services-link");
const en = document.getElementById("en");
const es = document.getElementById("es");

function changePage(link) {
  zeppelinFloating.pause();
  sections.forEach(section => {
    if (link.classList.contains(`${section.id}`)) {
      fadeIn(section);
      dispel(tagline);
      if (section.id === "homes") {
        zeppelinFloating.play();
        appear(tagline);
        section.classList.add("active");
      } else {
        section.classList.add("active");
      }
    }
  });
}

function focusAnchor(link) {
  link.classList.add("active");
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
/* ------------------------------------- GSAP Animation functions ------------------------------------- */

function fadeIn(section) {
  TweenMax.from(section, 1.5, {
    x: "-100%"
  });
}

function dispel(element) {
  TweenMax.to(element, 1.5, {
    opacity: 0
  });
}

function appear(element) {
  TweenMax.to(element, 1.5, {
    opacity: 1
  });
}

const zeppelinFloating = TweenMax.to(zeppelin, 2, {
  y: "-=15px",
  yoyo: true,
  repeat: -1,
  ease: Power0.easeNone,
  paused: false
});

/* ------------------------------------- DOM EVENTS ------------------------------------- */

menuLinks.forEach(link =>
  link.addEventListener("click", function(e) {
    e.preventDefault();
    removeActiveClass(sections);
    removeActiveClass(headerLinksToFocus);
    removeActiveClass(backgroundIcons);
    changePage(link);
  })
);

headerLinksToFocus.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    focusAnchor(link);
  });
});

tabLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    changeBackgroundColor(link);
  });
});

sideIcons.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    removeActiveClass(sideIconsImages);
    focusAnchor(link.firstChild);
  });
});

zeppelin.addEventListener("click", function(e) {
  e.preventDefault();
  servicesIcon.classList.add("active");
  servicesLink.classList.add("active");
});

en.addEventListener("click", hideEn);

es.addEventListener("click", hideEs);

/* ------------------------------------- CSSOM EVENTS ------------------------------------- */

/* Adjusting viewport units in mobile version. Reference: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/ */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

/* Listen when rezising in order to 'refresh' the vh value */
window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
