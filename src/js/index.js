const zeppelin = document.getElementById('zeppelin');
const toggleBtnn = document.getElementById('toggle-bttn');
const menu = document.querySelector('.menu');
const headerNav = document.querySelector('header');
const menuPath = document.querySelectorAll('.menu-path')

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

toggleBtnn.addEventListener('click', toggleOpen)



function zeppelinFloating() {
    TweenMax.to(zeppelin, 2, {
        y: "-=20px",
        yoyo: true,
        repeat: -1,
        ease: Power2.easeInOut
    });
}

zeppelinFloating()