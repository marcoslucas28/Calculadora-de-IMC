export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open() {
        this.wrapper.classList.add('open');
    },

    close() {
        this.wrapper.classList.remove('open');
    }
}

Modal.buttonClose.onclick = () => {
    Modal.close();
}


const handleKeydown = (event) => {
    if(event.key === 'Escape'){
        Modal.close();
    }
}

window.addEventListener('keydown', handleKeydown);