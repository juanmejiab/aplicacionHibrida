let secciones = [
    "index.html",
    "inicio.html",
    "login.html",
    "registro.html",
    "opciones.html"
];
let btnRegistro, btnInicioSesion, btnRegistrarse;
window.onload = init;
function init() {
    inicializarVariables();
    //setTimeout(carga,2500);
    crearEventos();
}
function carga() {
    location.href = secciones[1];
}
function inicializarVariables() {
    btnRegistro = document.getElementById("btnRegistro");
    btnInicioSesion = document.getElementById("btnInicioSesion");
    btnRegistrarse = document.getElementById("btnRegistrarse");
}
function crearEventos() {
    btnRegistro.addEventListener("click", enrutador);
    btnInicioSesion.addEventListener("click", enrutador);
    btnRegistrarse.addEventListener("click", enrutador);
}
function enrutador(evento) {
    switch(evento.target.id){
        case "btnInicioSesion":
            location.href = secciones[2];
            break;
        case "btnRegistro":
            location.href = secciones[3];
            break;
        case "btnRegistrarse":
            location.href = secciones[4];
            break;
    }
    alert(evento.target.id);
}

//# sourceMappingURL=index.de5c0784.js.map
