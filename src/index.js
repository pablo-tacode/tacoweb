/* const backgroundContainer = document.getElementById('background-container');
const mobile = window.matchMedia("(max-width: 700px)");
const tablet = window.matchMedia("(max-width: 1024px)");
const desktop = window.matchMedia("(max-width: 1600px)");
const tv = window.matchMedia("(max-width: 3040px)");
const portrait = window.matchMedia("(orientation: portrait)");

function changeBackground() {
  backgroundContainer.innerHTML = "";
  if (window.orientation === 90) {
    backgroundContainer.insertAdjacentHTML(
      "beforeend",
      `<img src="./src/assets/background-landscape.svg" alt="background-landscape">`
    );
  } else if (mobile.matches) {
    backgroundContainer.insertAdjacentHTML(
      "beforeend",
      `<img src="./src/assets/background-mobile.svg" alt="background-mobile">`
    );
  } else if (tablet.matches) {
    backgroundContainer.insertAdjacentHTML(
      "beforeend",
      `<img src="./src/assets/background-tablet.svg" alt="background-tablet">`
    );
  } else if (desktop.matches) {
    backgroundContainer.insertAdjacentHTML(
      "beforeend",
      `<img src="./src/assets/background-desktop.svg" alt="background-desktop">`
    );
  } else if (tv.matches) {
    backgroundContainer.insertAdjacentHTML(
      "beforeend",
      `<img src="./src/assets/background-TV.svg" alt="background-TV">`
    );
  }
}
changeBackground();
mobile.addListener(changeBackground);
 */

 const bttnChange = document.getElementById("bttn-change");
 const backgroundImg = document.getElementById("background-img");


bttnChange.addEventListener("click", ()=>{
    backgroundImg.style.background="linear-gradient(180deg, rgba(35, 31, 32, 1) 2.32%, rgba(16, 24, 63, 1) 22.73%, rgba(17, 35, 74, 1) 26.54%, rgba(19, 60, 100, 1) 37.41%, rgba(20, 70, 110, 1) 43.87%, rgba(22, 81, 129, 1) 47.51%, rgba(26, 107, 171, 1) 56.82%, rgba(28, 117, 188, 1) 61.57%, rgba(28, 116, 186, 1) 61.64%, rgba(30, 96, 150, 1) 63.06%, rgba(31, 79, 119, 1) 64.61%, rgba(32, 64, 91, 1) 66.37%, rgba(33, 52, 69, 1) 68.35%, rgba(34, 42, 52, 1) 70.67%, rgba(35, 36, 41, 1) 73.54%, rgba(35, 32, 34, 1) 77.56%, rgba(35, 31, 32, 1) 88.74%)"
    backgroundImg.style.filter="progid:DXImageTransform.Microsoft.gradient(startColorstr='#231F20',endColorstr='#231F20' , GradientType=0);"
})


