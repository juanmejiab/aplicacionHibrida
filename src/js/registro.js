let secciones = ["opciones.html", "inicio.html"]
let btnRegistrarse, logoRegistro;

window.onload = init;

function init(){
    inicializarVariables();
    crearEventos();
}

function inicializarVariables(){
    btnRegistrarse = document.getElementById("btnRegistrarse");
    logoRegistro = document.getElementById("logoRegistro");
}

function crearEventos(){
    btnRegistrarse.addEventListener("click", enrutador);
    logoRegistro.addEventListener("click", enrutador);
}

function enrutador(evento){
    if(evento.target.id=="btnRegistrarse"){
        location.href = secciones[0];
    }
    else{
        location.href = secciones[1];
    }    
}