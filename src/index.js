const backgroundContainer = document.getElementById('background-container');
const mobile = window.matchMedia("(max-width: 700px)");
const tablet = window.matchMedia("(max-width: 1024px)");
const desktop = window.matchMedia("(max-width: 1600px)");
const tv = window.matchMedia("(max-width: 3040px)");
const portrait = window.matchMedia("(orientation: portrait)");

function changeBackground () {
    backgroundContainer.innerHTML='';
    if(mobile.matches && portrait.matches){
        backgroundContainer.insertAdjacentHTML('beforeend', `<object data="./src/assets/background-mobile.svg" alt="background-mobile"></object>`)
    }else if(tablet.matches && portrait.matches){
        backgroundContainer.insertAdjacentHTML('beforeend', `<object data="./src/assets/background-tablet.svg" alt="background-tablet"></object>`)
    }else if(desktop.matches && portrait.matches){
        backgroundContainer.insertAdjacentHTML('beforeend', `<object data="./src/assets/background-desktop.svg" alt="background-desktop"></object>`)
    }else if(tv.matches){
        backgroundContainer.insertAdjacentHTML('beforeend', `<object data="./src/assets/background-TV.svg" alt="background-TV"></object>`)
    }else {
        backgroundContainer.insertAdjacentHTML('beforeend', `<object data="./src/assets/background-landscape.svg" alt="background-landscape"></object>`)
    }
}



changeBackground();
mobile.addListener(changeBackground);



