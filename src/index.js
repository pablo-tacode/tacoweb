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
 const home = document.getElementById("home");
 const two = document.getElementById("two")

bttnChange.addEventListener("click", ()=>{
    if(home.style.display === "flex"){
        home.style.display = "none"
        two.style.display = "flex"
    }else {
        home.style.display = "flex"
        two.style.display = "none"
    }
})


