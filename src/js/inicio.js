let secciones = ["login.html", "registro.html"]
let btnRegistro, btnInicioSesion;

window.onload = init;

function init(){
    inicializarVariables();
    crearEventos();
}

function inicializarVariables(){
    btnInicioSesion = document.getElementById("btnInicioSesion");
    btnRegistro = document.getElementById("btnRegistro");
}

function crearEventos(){
    btnInicioSesion.addEventListener("click", enrutador);
    btnRegistro.addEventListener("click", enrutador);
}

function enrutador(evento){
    switch(evento.target.id){
        case "btnInicioSesion":
            location.href = secciones[0];
            break;
        case "btnRegistro":
            location.href = secciones[1];
            break;
    }
}