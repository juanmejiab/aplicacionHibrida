let secciones = "opciones.html"
let btnRegistrarse

window.onload = init;

function init(){
    inicializarVariables();
    crearEventos();
}

function inicializarVariables(){
    btnRegistrarse = document.getElementById("btnRegistrarse");
}

function crearEventos(){
    btnRegistrarse.addEventListener("click", enrutador);
}

function enrutador(){
    location.href = secciones;
}