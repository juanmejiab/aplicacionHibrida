let secciones = "opciones.html";
let logo;

window.onload = init;

function init(){
    inicializarVariables();
    crearEventos();
}
function inicializarVariables(){
    logo = document.getElementById("logo");
}

function crearEventos(){
    logo.addEventListener("click", enrutador);
}

function enrutador(){
    location.href = secciones;
}