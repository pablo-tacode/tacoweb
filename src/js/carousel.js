function listenToScreenWidth(w) {
  if (w <= targetWidth) {
    sections.forEach(section => {
      if (section.classList.contains("active")) {
        if (section.id === "service") {
          const n2 = 0
          printCarousel(section, carouselServices, n2)
        } else if (section.id === "project") {
          const n2 = 1
          printCarousel(section, carouselProjects, n2)
        } else if (section.id === "us") {
          showSlides(1, 2);
        }
      }
    });
  } else {
    sections.forEach(section => {
      if (section.classList.contains("active")) {
        if (section.id === "service") {
          section.innerHTML = ''
          section.insertAdjacentHTML('beforeend', carouselServices)
          fadeIn(section, document.getElementById("services-title"))
        } else if (section.id === "project") {
          section.innerHTML = ''
          section.insertAdjacentHTML('beforeend', carouselProjects)
          fadeIn(section, document.getElementById("projects-title"))
        }
      }
    })
  }
}

async function printCarousel(section, carousel, num) {
  let promise = new Promise(function (resolve) {
    section.innerHTML = ''
    resolve(section.insertAdjacentHTML('beforeend', carousel))
  })
  await promise
  let title = document.getElementById(`${section.id}s-title`);
  let arrow = document.getElementById(`next-${section.id}`);
  fadeIn(section, title);
  showSlides(1, num)
  arrow.addEventListener("click", e => {
    e.preventDefault();
    plusSlides(1, num);
  })
}