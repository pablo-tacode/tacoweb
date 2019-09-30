 const bttnChange = document.getElementById("bttn-change");
 const backgroundImg = document.getElementById("background-img");


bttnChange.addEventListener("click", ()=>{
    if(backgroundImg.classList.contains("dark")){
        backgroundImg.classList.remove("dark")
        backgroundImg.classList.add("light")
    }else{
        backgroundImg.classList.remove("light")
        backgroundImg.classList.add("dark")
    }
})


