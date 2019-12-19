const openModal = document.getElementById("open-modal-one");
const openModalTwo = document.getElementById("open-modal-two");
const modal = document.querySelector(".modal");
const logoHomeMobile = document.getElementById("logo-mobile");
const openModalPablo = document.getElementById("open-modal-pablo");
const openModalIvan = document.getElementById("open-modal-ivan");
const openModalAriadna = document.getElementById("open-modal-ariadna");
const openModalAnalhi = document.getElementById("open-modal-analhi");
const openModalIrving = document.getElementById("open-modal-irving");
const openModalKaren = document.getElementById("open-modal-karen");
const openModalOlga = document.getElementById("open-modal-olga");
const openModalMision = document.getElementById("open-icon-mision");
const openModalContact = document.getElementById("open-icon-contact");

const usObj = {
  pablo: {
    id: "open-modal-pablo",
    num: "one",
    img: "https://duqwc0tf73olm.cloudfront.net/portrait_pablo.png",
    cargo: "Founder & CEO",
    frase: "El trabajo hay que hacerlo bien",
    autor: "",
    parrafo1:
      "Pablo nació y creció en la Ciudad de México. Estudió Ingeniería en Comunicaciones y Electrónica con especialización en Acústica en la Escuela Superior de Ingeniería Mecánica y Eléctrica del Insituto Politécnico Nacional.",
    parrafo2:
      "Realizó una maestría en Music, Science and Technology en la Universidad de Stanford en California.  Posteriormente fue reclutado para desarrollar una app de música para iOS. Continuó haciendo consultorías para proyectos de iOS mientras vivió en San Francisco por 3 años. Regresó a la Ciudad de México a consolidar TACODE en 2019.",
    parrafo3: "A Pablo le gusta tocar la guitarra, nadar y practicar yoga."
  },
  ivan: {
    id: "open-modal-ivan",
    num: "two",
    img: "https://duqwc0tf73olm.cloudfront.net/portrait_ivan.png",
    cargo: "Ingeniero de Software",
    frase: "Solo aquellos que intentan lo absurdo pueden lograr lo imposible",
    autor: "-Albert Einstein-",
    parrafo1:
      "Mi gusto por la producción audiovisual me llevó a estudiar una carrera en tecnología en el IPN.",
    parrafo2:
      "Mi meta era trabajar en un proyecto que mezclara el desarrollo de software con la música. Así llegué a laborar en TACODE como Ingeniero de Software en el desarrollo de una app móvil sobre notación musical y manipulación de audio. De esta forma entré al mundo de la tecnología Apple estando involucrado en cada etapa, como diseño, desarrollo y mantenimiento.",
    parrafo3:
      "Invierto parte de mi tiempo libre en aprender cosas nuevas sobre diversos temas, pues considero que es la mejor forma de crecer personal y profesionalmente. También disfruto jugar volleyball, el cine, la música y el universo."
  },
  ariadna: {
    id: "open-modal-ariadna",
    num: "three",
    img: "https://duqwc0tf73olm.cloudfront.net/portrait_ariadna.png",
    cargo: "Diseñadora UX",
    frase:
      "El propósito de la vida es vivirla, saborear las experiencias al máximo y buscar con entusiasmo y sin temor nuevas experiencias que nos enriquezcan",
    autor: "-Eleonor Roosevelt-",
    parrafo1:
      "Soy UX Designer en TACODE. Creo firmemente que las experiencias van más allá de satisfacer las necesidades y requerimientos del cliente, sino que engloban a un todo.",
    parrafo2:
      "Mi trabajo en TACODE es unificar las emociones, los juicios, patrones, contextos, navegación y funcionamiento de un producto o servicio para que las personas se enamoren de nuestras creaciones digitales.",
    parrafo3:
      "Las metodologías ágiles que aprendí en Laboratoria y mi background en Administración me impulsaron a ser estratégica y plantearme diversos escenarios que me ayuden a alcanzar a los objetivos tanto personales como profesionales."
  },
  irving: {
    id: "open-modal-irving",
    num: "four",
    img: "https://duqwc0tf73olm.cloudfront.net/portrait_irving.png",
    cargo: "Marketing Digital",
    frase: "Nada es verdad, todo está permitido",
    autor: "",
    parrafo1:
      "Estudié la licenciatura en mercadotecnia. Mi misión en TACODE es crear las campañas, estrategias y todo lo referente a marketing digital.",
    parrafo2:
      "Me gusta mucho la fotografía y el marketing, me encanta salir a pasear a bosques, playas, montañas, lugares históricos y llevar equipo para tomar fotografías.",
    parrafo3:
      "Cuando algo nuevo se me presenta soy muy curioso e indago para saber más sobre ello."
  },
  analhi: {
    id: "open-modal-analhi",
    num: "five",
    img: "https://duqwc0tf73olm.cloudfront.net/portrait_analhi.png",
    cargo: "Diseñadora UI",
    frase:
      "La mayoría de la gente cree que el diseño es algo decorativo. Para mí, nada es más importante en el futuro que el diseño. El diseño es el alma de todo lo creado por el hombre",
    autor: "-Steve Jobs-",
    parrafo1:
      "Estudié diseño y comunicación visual. Lo que más me apasiona del diseño es transformar un concepto en algo visual, usable y funcional.",
    parrafo2:
      "Mi interés en la tecnología, la animación y el diseño web me llevó a aprender a programar y a sumergirme en el diseño de interfaces. En TACODE me encargo de crear la interfaz de los sitios web.",
    parrafo3:
      "En mi tiempo libre me gusta tocar el piano, leer, ir al cine y tomar fotografías."
  },
  karen: {
    id: "open-modal-karen",
    num: "six",
    img: "https://duqwc0tf73olm.cloudfront.net/portrait_karen.png",
    cargo: "Desarolladora Fullstack",
    frase: "Hazlo con pasión, si no, no lo hagas",
    autor: "",
    parrafo1:
      "Soy una apasionada del desarrollo web. En Tacode me he especializado en animaciones y desarrollo frontend, aunque también atiendo cuestiones backend.",
    parrafo2:
      "Considero que tres piezas clave en mi trabajo son la paciencia, determinación y atención a los detalles.",
    parrafo3:
      "En mis tiempos libres soy bailarina, ando en bici, leo novelas y poesía, hago pesas y juego con mi gata, entre otras cosas."
  },
  olga: {
    id: "open-modal-olga",
    num: "seven",
    img: "https://duqwc0tf73olm.cloudfront.net/portrait_olga.png",
    cargo: "Desarolladora Fullstack",
    frase:
      "Cualquier tecnología suficientemente avanzada es indistinguible de la magia",
    autor: "-Arthur C. Clarke-",
    parrafo1:
      "Considero que con dedicación, esfuerzo y determinación no hay meta imposible de alcanzar. Siempre me ha apasionado la ciencia y la tecnología, por lo que estudié la carrera técnica en armado y mantenimiento de computadoras, posteriormente ingrese a la carrera de Medicina.",
    parrafo2:
      "Sin embargo, el mundo de la tecnología me llamó de nuevo llevándome a especializarme en el desarrollo Web. Actualmente realizo funciones de Fullstack Developer y Cloud Computing.",
    parrafo3:
      "En mi tiempo libre me gusta ir al cine, escuchar musica y realizar actividades acuáticas."
  }
};

const modalPuerquiAhorro = `
            <div class="modal-content" id="modal-one">
                <a class="close-modal" id="close-modal-one"><img src="https://duqwc0tf73olm.cloudfront.net/close_bttn.svg" alt="Boton para cerrar modal"></a>
                <div class="modal-text">
                    <h3>PUERQUI AHORRO</h3>
                    <ul>
                        <li>Consultas de movimientos</li>
                        <li>Consulta de disponible y detalles en movimientos</li>
                        <li>Resumen de gastos en categorías</li>
                        <li>Creación de reservas de dinero</li>
                        <li>Metas compartidas</li>
                        <li>Simulador de caja de ahorro</li>
                    </ul>
                </div>
                <img class="modal-img-one" src="https://duqwc0tf73olm.cloudfront.net/PuerquiAhorro_001.png" alt="Primera pantalla de la aplicacion puerqui ahorro">
                <img class="modal-img-two" src="https://duqwc0tf73olm.cloudfront.net/PuerquiAhorro_002.png" alt="Segunda pantalla de la aplicacion puerqui ahorro">
                <img class="modal-img-three" src="https://duqwc0tf73olm.cloudfront.net/PuerquiAhorro_003.png" alt="Tercera pantalla de la aplicacion puerqui ahorro">
            </div>
`;

const modalMedicalBoard = `
            <div class="modal-content" id="modal-two">
                <a class="close-modal" id="close-modal-two"><img src="https://duqwc0tf73olm.cloudfront.net/close_bttn.svg" alt="Boton para cerrar modal"></a>
                <div class="modal-text">
                    <h3>MEDICAL BOARD</h3>
                    <ul>
                        <li>Registro de pacientes nuevos</li>
                        <li>Almacenamiento de historiales clínicos</li>
                        <li>Calendarización de consultas</li>
                        <li>Comunicación directa con pacientes</li>
                        <li>Planeación de rutas para consultas a domicilio</li>
                        <li>Seguimiento de tratamientos</li>
                    </ul>
                </div>
                <img class="modal-img-one" src="https://duqwc0tf73olm.cloudfront.net/medicalBoard_001.png" alt="Primera pantalla de la aplicacion medical board">
                <img class="modal-img-two" src="https://duqwc0tf73olm.cloudfront.net/medicalBoard_002.png" alt="Segunda pantalla de la aplicacion medical board">
                <img class="modal-img-three" src="https://duqwc0tf73olm.cloudfront.net/medicalBoard_003.png" alt="Tercera pantalla de la aplicacion medical board">
            </div>
`;

const modalUs = obj => {
  let modalContent = `
    <div class="modal-content-us">
        <a class="close-modal" id="close-modal-us-${obj.num}"><img src="https://duqwc0tf73olm.cloudfront.net/close_bttn.svg" alt="Boton para cerrar modal"></a>
        <div class="us-img-container">
            <img class="us-modal-img" src="${obj.img}" alt="${obj.cargo}">
            <p class="position">${obj.cargo}</p>
        </div>
        <div class="quote">
            <p>"${obj.frase}".</p>
            <p id="author">${obj.autor}</p>
        </div>
        <div class="modal-us-info-container">
            <p>${obj.parrafo1}</p>
            <p>${obj.parrafo2}</p>
            <p>${obj.parrafo3}</p>
        </div>
    </div>
    `;
  modal.insertAdjacentHTML("beforeend", modalContent);
};

const modalMisionVision = `
            <div class="modal-content-mision">
                <a class="close-modal" id="close-modal-mision"><img src="https://duqwc0tf73olm.cloudfront.net/close_bttn.svg" alt="Boton para cerrar modal"></a>
                <div class="us-modal-img-container">
                    <img class="us-modal-img" src="https://duqwc0tf73olm.cloudfront.net/mision_vision_2_1.svg" alt="Mision y vision segunda parte">
                </div>
            </div>
            `;

const modalContact = `
        <div class="modal-content-contact">
            <a class="close-modal" id="close-modal-contact"><img src="https://duqwc0tf73olm.cloudfront.net/close_bttn.svg" alt="Boton para cerrar modal"></a>
            <div class="address">
                <h2>DÓNDE ESTAMOS</h2>
                <p>Gral. Salvador Alvarado 72, Escandón I Secc, 11800 CDMX </p>
                <a id="open-map-bttn" target="_blank" href="https://www.google.com/maps/place/Gral.+Salvador+Alvarado+72,+Escand%C3%B3n+I+Secc,+Miguel+Hidalgo,+11800+Ciudad+de+M%C3%A9xico,+CDMX/@19.4045022,-99.1820195,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1ff663325880f:0x6a28b0ae4755f260!8m2!3d19.4045022!4d-99.1798254"><img src="https://duqwc0tf73olm.cloudfront.net/ver-mapa-boton.svg" alt="Botón para ver la ubicación en el mapa de Goggle maps"></a>
            </div>
            <div class="contact-city"></div>
        </div>
`;

function openingModal() {
  modal.classList.remove("innactive");
  modal.classList.add("active");
}

function closingModal() {
  modal.classList.remove("active");
  modal.classList.add("innactive");
}

function scrollingTop() {
  modal.scrollTo(0, 0);
}

function paintModalData(bttnId) {
  for (let person in usObj) {
    let personObj = usObj[person];
    if (bttnId === personObj.id) {
      modalUs(personObj);
    }
  }
}

function modalEntrance() {
  const tl = new TimelineMax();
  tl.to(modal, 0.1, {
    onStart: openingModal
  }).fromTo(
    modal,
    0.5,
    {
      yPercent: 100
    },
    {
      yPercent: 0,
      zIndex: 3
    },
    "=+0.1"
  );
}

function modalExit() {
  const tl = new TimelineMax();
  tl.fromTo(
    modal,
    0.8,
    {
      yPercent: 0
    },
    {
      yPercent: 100,
      zIndex: 3
    }
  ).to(
    modal,
    0.1,
    {
      onStart: scrollingTop,
      onComplete: closingModal
    },
    "=+0.1"
  );
}

openModal.addEventListener("click", e => {
  e.preventDefault();
  modalEntrance();
  modal.innerHTML = "";
  modal.insertAdjacentHTML("beforeend", modalPuerquiAhorro);
  const closeModal = document.getElementById("close-modal-one");
  closeModal.addEventListener("click", modalExit);
});

openModalTwo.addEventListener("click", e => {
  e.preventDefault();
  modalEntrance();
  modal.innerHTML = "";
  modal.insertAdjacentHTML("beforeend", modalMedicalBoard);
  const closeModalTwo = document.getElementById("close-modal-two");
  closeModalTwo.addEventListener("click", modalExit);
});

openModalPablo.addEventListener("click", e => {
  e.preventDefault();
  modalEntrance();
  modal.innerHTML = "";
  paintModalData(e.target.id);
  const closeModalUsOne = document.getElementById("close-modal-us-one");
  closeModalUsOne.addEventListener("click", modalExit);
});

openModalIvan.addEventListener("click", e => {
  e.preventDefault();
  modalEntrance();
  modal.innerHTML = "";
  paintModalData(e.target.id);
  const closeModalUsTwo = document.getElementById("close-modal-us-two");
  closeModalUsTwo.addEventListener("click", modalExit);
});

openModalAriadna.addEventListener("click", e => {
  e.preventDefault();
  modalEntrance();
  modal.innerHTML = "";
  paintModalData(e.target.id);
  const closeModalUsThree = document.getElementById("close-modal-us-three");
  closeModalUsThree.addEventListener("click", modalExit);
});

openModalAnalhi.addEventListener("click", e => {
  e.preventDefault();
  modalEntrance();
  modal.innerHTML = "";
  paintModalData(e.target.id);
  const closeModalUsFive = document.getElementById("close-modal-us-five");
  closeModalUsFive.addEventListener("click", modalExit);
});

openModalIrving.addEventListener("click", e => {
  e.preventDefault();
  modalEntrance();
  modal.innerHTML = "";
  paintModalData(e.target.id);
  const closeModalUsFour = document.getElementById("close-modal-us-four");
  closeModalUsFour.addEventListener("click", modalExit);
});

openModalKaren.addEventListener("click", e => {
  e.preventDefault();
  modalEntrance();
  modal.innerHTML = "";
  paintModalData(e.target.id);
  const closeModalUsSix = document.getElementById("close-modal-us-six");
  closeModalUsSix.addEventListener("click", modalExit);
});

openModalOlga.addEventListener("click", e => {
  e.preventDefault();
  modalEntrance();
  modal.innerHTML = "";
  paintModalData(e.target.id);
  const closeModalUsSeven = document.getElementById("close-modal-us-seven");
  closeModalUsSeven.addEventListener("click", modalExit);
});

logoHomeMobile.addEventListener("click", e => {
  e.preventDefault();
  modalExit();
});

openModalMision.addEventListener("click", e => {
  e.preventDefault();
  modalEntrance();
  modal.innerHTML = "";
  modal.insertAdjacentHTML("beforeend", modalMisionVision);
  const closeModalMision = document.getElementById("close-modal-mision");
  closeModalMision.addEventListener("click", modalExit);
});

openModalContact.addEventListener("click", e => {
  e.preventDefault();
  modalEntrance();
  modal.innerHTML = "";
  modal.insertAdjacentHTML("beforeend", modalContact);
  const closeModalContact = document.getElementById("close-modal-contact");
  closeModalContact.addEventListener("click", modalExit);
});
