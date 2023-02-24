let secciones = "opciones.html"
let logoMesas

window.onload = init;

function init(){
    inicializarVariables();
    crearEventos();
}

function inicializarVariables(){
    logoMesas = document.getElementById("logoMesas");
}

function crearEventos(){
    logoMesas.addEventListener("click", enrutador);
}

function enrutador(){
    location.href = secciones;
}