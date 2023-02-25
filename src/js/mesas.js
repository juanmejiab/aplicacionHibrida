let secciones = "opciones.html"
let logoMesas, btnMesas;

window.onload = init;

function init(){
    inicializarVariables();
    crearEventos();
}

function inicializarVariables(){
    logoMesas = document.getElementById("logoMesas");
    btnMesas = document.getElementById("mesa");
}

function crearEventos(){
    logoMesas.addEventListener("click", enrutador);
    btnMesas.addEventListener("click", prueba);
}

function enrutador(){
    location.href = secciones;
}

function prueba(){
    //alert(toString(btnMesas.));
}