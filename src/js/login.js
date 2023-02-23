let secciones = "opciones.html"
let btnIniciarSesion

window.onload = init;

function init(){
    inicializarVariables();
    crearEventos();
}

function inicializarVariables(){
    btnIniciarSesion = document.getElementById("btnIniciarSesion");
}

function crearEventos(){
    btnIniciarSesion.addEventListener("click", enrutador);
}

function enrutador(){
    location.href = secciones;
}