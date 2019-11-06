const zeppelin = document.getElementById('zeppelin');
const toggleBtnn = document.getElementById('toggle-bttn');
const menu = document.querySelector('.menu');
const headerNav = document.querySelector('header');
const menuPath = document.querySelectorAll('.menu-path');
const sections = document.querySelectorAll('article');
const menuLinks = document.querySelectorAll('.header-links');

function changePage(link) {
    zeppelinFloating.pause();
    sections.forEach(section => {
        section.classList.remove('active');
        if (link.classList.contains(`${section.id}`)) {
            fadeIn(section);
            if (section.id === "homes") {
                zeppelinFloating.play();
                section.classList.add('active');
            } else {
                section.classList.add('active');
            }
        }
    })
}

function toggleOpen() {
    menu.classList.toggle('active');
    headerNav.classList.toggle('active-header');
    menuPath.forEach(
        (path) => {
            if (path.classList.contains('open')) {
                path.classList.remove('open')
                path.classList.add('close')
            } else {
                path.classList.remove('close')
                path.classList.add('open')
            }
        }
    )
}

/* ------------------------------------- GSAP Animation functions ------------------------------------- */

function fadeIn(section) {
    TweenMax.from(section, 1, {
        y: "-100%"
    })
}

const zeppelinFloating =
    TweenMax.to(zeppelin, 2, {
        y: "-=15px",
        yoyo: true,
        repeat: -1,
        ease: Power0.easeNone,
        paused: false
    });

/* ------------------------------------- DOM EVENTS ------------------------------------- */

/* toggleBtnn.addEventListener('click', toggleOpen); */

menuLinks.forEach(link => link.addEventListener('click', function (e) {
    e.preventDefault();
    changePage(link);
    /* toggleOpen(); */
}));

/* ------------------------------------- CSSOM EVENTS ------------------------------------- */

/* Adjusting viewport units in mobile version. Reference: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/ */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

/* Listen when rezising in order to 'refresh' the vh value */
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});