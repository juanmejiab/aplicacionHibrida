let secciones = "mesas.html"
let btnReservaMesa

window.onload = init;

function init(){
    inicializarVariables();
    crearEventos();
}

function inicializarVariables(){
    btnReservaMesa = document.getElementById("btnReservaMesa");
}

function crearEventos(){
    btnReservaMesa.addEventListener("click", enrutador);
}

function enrutador(){
    location.href = secciones;
}