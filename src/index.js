const backgroundContainer = document.getElementById('background-container');
const mobile = window.matchMedia("(max-width: 700px)");
const tablet = window.matchMedia("(max-width: 1024px)");
const desktop = window.matchMedia("(max-width: 1600px)");
const tv = window.matchMedia("(max-width: 3040px)");
const portrait = window.matchMedia("(orientation: portrait)");

function changeBackground () {
    backgroundContainer.innerHTML='';
    if(mobile.matches && portrait.matches){
        backgroundContainer.insertAdjacentHTML('beforeend', `<img src="./src/assets/background-mobile.svg" alt="background-mobile">`)
    }else if(tablet.matches && portrait.matches){
        backgroundContainer.insertAdjacentHTML('beforeend', `<img src="./src/assets/background-tablet.svg" alt="background-tablet">`)
    }else if(desktop.matches && portrait.matches){
        backgroundContainer.insertAdjacentHTML('beforeend', `<img src="./src/assets/background-desktop.svg" alt="background-desktop">`)
    }else if(tv.matches && portrait.matches){
        backgroundContainer.insertAdjacentHTML('beforeend', `<img src="./src/assets/background-TV.svg" alt="background-TV">`)
    }else {
        backgroundContainer.insertAdjacentHTML('beforeend', `<img src="./src/assets/background-landscape.svg" alt="background-landscape">`)
    }
}



changeBackground();
mobile.addListener(changeBackground);



