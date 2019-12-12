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
    img: "./src/assets/images/retrato_pablo.png",
    cargo: "Founder & CEO",
    frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    parrafo1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    parrafo2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    parrafo3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  ivan: {
    id: "open-modal-ivan",
    num: "two",
    img: "./src/assets/images/retrato_estandar.png",
    cargo: "Ingeniero de Software",
    frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    parrafo1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    parrafo2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    parrafo3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  ariadna: {
    id: "open-modal-ariadna",
    num: "three",
    img: "./src/assets/images/retrato_estandar.png",
    cargo: "Diseñadora UX",
    frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    parrafo1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    parrafo2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    parrafo3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  irving: {
    id: "open-modal-irving",
    num: "four",
    img: "./src/assets/images/retrato_estandar.png",
    cargo: "Marketing Digital",
    frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    parrafo1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    parrafo2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    parrafo3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  analhi: {
    id: "open-modal-analhi",
    num: "five",
    img: "./src/assets/images/retrato_estandar.png",
    cargo: "Diseñadora UI",
    frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    parrafo1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    parrafo2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    parrafo3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  karen: {
    id: "open-modal-karen",
    num: "six",
    img: "./src/assets/images/retrato_estandar.png",
    cargo: "Desarolladora Fullstack",
    frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    parrafo1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    parrafo2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    parrafo3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  olga: {
    id: "open-modal-olga",
    num: "seven",
    img: "./src/assets/images/retrato_estandar.png",
    cargo: "Desarolladora Fullstack",
    frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    parrafo1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    parrafo2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    parrafo3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
};

const modalPuerquiAhorro = `
            <div class="modal-content" id="modal-one">
                <a class="close-modal" id="close-modal-one"><img src="./src/assets/images/close_bttn.svg" alt="Boton para cerrar modal"></a>
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
                <img class="modal-img-one" src="./src/assets/images/PuerquiAhorro_001.png" alt="Primera pantalla de la aplicacion puerqui ahorro">
                <img class="modal-img-two" src="./src/assets/images/PuerquiAhorro_002.png" alt="Segunda pantalla de la aplicacion puerqui ahorro">
                <img class="modal-img-three" src="./src/assets/images/PuerquiAhorro_003.png" alt="Tercera pantalla de la aplicacion puerqui ahorro">
            </div>
`;

const modalMedicalBoard = `
            <div class="modal-content" id="modal-two">
                <a class="close-modal" id="close-modal-two"><img src="./src/assets/images/close_bttn.svg" alt="Boton para cerrar modal"></a>
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
                <img class="modal-img-one" src="./src/assets/images/medicalBoard_001.png" alt="Primera pantalla de la aplicacion medical board">
                <img class="modal-img-two" src="./src/assets/images/medicalBoard_002.png" alt="Segunda pantalla de la aplicacion medical board">
                <img class="modal-img-three" src="./src/assets/images/medicalBoard_003.png" alt="Tercera pantalla de la aplicacion medical board">
            </div>
`;

const modalUs = obj => {
  let modalContent = `
    <div class="modal-content-us">
        <a class="close-modal" id="close-modal-us-${obj.num}"><img src="./src/assets/images/close_bttn.svg" alt="Boton para cerrar modal"></a>
        <div class="us-img-container">
            <img class="us-modal-img" src="${obj.img}" alt="${obj.cargo}">
            <p class="position">${obj.cargo}</p>
        </div>
        <div class="quote">
            <p>"${obj.frase}"</p>
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
                <a class="close-modal" id="close-modal-mision"><img src="./src/assets/images/close_bttn.svg" alt="Boton para cerrar modal"></a>
                <div class="us-modal-img-container">
                    <img class="us-modal-img" src="./src/assets/images/mision_vision_2.svg" alt="Mision y vision segunda parte">
                </div>
            </div>
            `;

const modalContact = `
        <div class="modal-content-contact">
            <a class="close-modal" id="close-modal-contact"><img src="./src/assets/images/close_bttn.svg" alt="Boton para cerrar modal"></a>
            <div class="address">
                <h2>DÓNDE ESTAMOS</h2>
                <p>Gral. Salvador Alvarado 72, Escandon I Secc, 11800 CDMX </p>
                <a id="open-map-bttn" href="https://www.google.com/maps/place/Gral.+Salvador+Alvarado+72,+Escand%C3%B3n+I+Secc,+Miguel+Hidalgo,+11800+Ciudad+de+M%C3%A9xico,+CDMX/@19.4045022,-99.1820195,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1ff663325880f:0x6a28b0ae4755f260!8m2!3d19.4045022!4d-99.1798254"><img src="./src/assets/images/ver-mapa-boton.svg" alt="Botón para ver la ubicación en el mapa de Goggle maps"></a>
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
