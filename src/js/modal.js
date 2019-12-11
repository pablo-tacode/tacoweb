const openModal = document.getElementById("open-modal-one");
const openModalTwo = document.getElementById("open-modal-two");
const modal = document.querySelector(".modal");
const logoHomeMobile = document.getElementById("logo-mobile");

const usObj = {
  pablo: {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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

logoHomeMobile.addEventListener("click", e => {
  e.preventDefault();
  modalExit();
});

fetch("../src/us.json")
  .then(resp => resp.json())
  .then(packageJson => {
    console.log(packageJson);
  });
