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

/* GSAP Animation functions */

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

/* DOM EVENTS */

/* toggleBtnn.addEventListener('click', toggleOpen); */

menuLinks.forEach(link => link.addEventListener('click', function (e) {
    e.preventDefault();
    changePage(link);
    /* toggleOpen(); */
}));

/* CSSOM EVENTS */

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});