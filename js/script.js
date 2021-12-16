// Variables para hacer la animación del hero
// const textWelcome = document.querySelector('#welcome');
// let mensaje = 'Welcome to my website.';
// let i = 1;

// Evento para el hero
// window.addEventListener('DOMContentLoaded', iniciarIntervalo);

// Llama al método setInverval
// function iniciarIntervalo() {
//     setInterval('mostrarLetra()', 80);
// }

// Se imprimen la letras una por una en el hero
// function mostrarLetra() {
//     if(mensaje.length+1 === i){
//         return;
//     }else {
//         textWelcome.innerHTML = mensaje.slice(0,i++);
//     }
// }

// Evento scroll para los enlaces
window.addEventListener('scroll', () => {
    // if (document.documentElement.clientWidth <= 730) {
        const buttonSobreMi = document.querySelector('#nav-s');
        const seccionSobreMi = document.querySelector('#sobre-mi');
        const ubicacionSobreMi = seccionSobreMi.getBoundingClientRect();

        const buttonHerramintas = document.querySelector('#nav-h');
        const seccionHerramientas = document.querySelector('#herramientas');
        const ubicacionHerramientas = seccionHerramientas.getBoundingClientRect();

        if(ubicacionSobreMi.bottom > 150){
            buttonSobreMi.classList.add('selected');
            seccionSobreMi.firstElementChild.classList.add('window-actual');
        } else {
            buttonSobreMi.classList.remove('selected');
            seccionSobreMi.firstElementChild.classList.remove('window-actual');
        }


        if(ubicacionSobreMi.bottom < 150 && ubicacionHerramientas.bottom < 846) {
            buttonHerramintas.classList.add('selected');
            seccionHerramientas.firstElementChild.classList.add('window-actual');
        } else {
            buttonHerramintas.classList.remove('selected');
            seccionHerramientas.firstElementChild.classList.remove('window-actual');
        }
});


