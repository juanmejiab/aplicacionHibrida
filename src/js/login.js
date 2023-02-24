let secciones = ["opciones.html", "inicio.html"]
let btnIniciarSesion, logoLogin;

window.onload = init;

function init(){
    inicializarVariables();
    crearEventos();
}

function inicializarVariables(){
    btnIniciarSesion = document.getElementById("btnIniciarSesion");
    logoLogin = document.getElementById("logoLogin");
}

function crearEventos(){
    btnIniciarSesion.addEventListener("click", enrutador);
    logoLogin.addEventListener("click", enrutador);
}

function enrutador(evento){
    if(evento.target.id=="btnIniciarSesion"){
        location.href = secciones[0];
    }
    else{
        location.href = secciones[1];
    }    
}