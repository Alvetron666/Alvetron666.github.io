let btnPart = document.querySelectorAll('.button-participate');
let modalPart = document.querySelector('.modal-participate');
let btnPartClose = modalPart.querySelector('.modal-participate__close-btn')

btnPart.forEach( item => {
    item.onclick = () => {
        modalPart.classList.add('modal-participate--active');
    }
})

btnPartClose.onclick = () => {
    modalPart.classList.remove('modal-participate--active');
}