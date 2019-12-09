const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');
const modal = document.querySelector('.modal');

function openingModal () {
    modal.style.display = 'grid';
}

function closingModal () {
    modal.style.display = 'none';
}

openModal.addEventListener('click', openingModal);
closeModal.addEventListener('click', closingModal);