// const textTrainee = document.querySelector('#trainee-it');
// let mensaje = '| Trainee it';
// let i = 1;

// window.document.addEventListener('DOMContentLoaded', setInterval('mostrarLetra()', 100));

// function mostrarLetra() {
//     if(mensaje.length+1 === i){
//         return;
//     }else{
//         textTrainee.textContent = mensaje.slice(0,i++);
//     }

// }

const textWelcome = document.querySelector('#welcome');
let mensaje = 'Welcome to my website.';
let i = 1;

window.document.addEventListener('DOMContentLoaded', setInterval('mostrarLetra()', 100));

function mostrarLetra() {
    if(mensaje.length+1 === i){
        return;
    }else {
        textWelcome.innerHTML = mensaje.slice(0,i++);
    }
}
