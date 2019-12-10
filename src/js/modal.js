const openModal = document.getElementById('open-modal-one');
const openModalTwo = document.getElementById('open-modal-two')
const closeModal = document.getElementById('close-modal-one');
const closeModalTwo = document.getElementById('close-modal-two');
const modal = document.querySelector('.modal');

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
`

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
                <img modal-img-one src="./src/assets/images/medicalBoard_001.png" alt="Primera pantalla de la aplicacion medical board">
                <img modal-img-two src="./src/assets/images/medicalBoard_002.png" alt="Segunda pantalla de la aplicacion medical board">
                <img modal-img-three src="./src/assets/images/medicalBoard_003.png" alt="Tercera pantalla de la aplicacion medical board">
            </div>
`

function openingModal() {
    modal.style.display = 'grid';
}

function closingModal() {
    modal.style.display = 'none';
}

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    openingModal();
    modal.innerHTML = '';
    modal.insertAdjacentHTML('beforeend', modalPuerquiAhorro)
});

openModalTwo.addEventListener('click', (e) => {
    e.preventDefault();
    openingModal();
    modal.innerHTML = '';
    modal.insertAdjacentHTML('beforeend', modalMedicalBoard)
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    closingModal();
});

closeModalTwo.addEventListener('click', (e) => {
    e.preventDefault();
    closingModal();
});