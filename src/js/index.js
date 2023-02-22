let secciones = ["index.html", "inicio.html", "login.html", "regitro.html", "opciones.html"]
let btnRegistro, btnInicioSesion;
let contador 


window.onload = init;

function init(){
    inicializarVariables();
    setTimeout(carga,2500);
    crearEventos();
}

function carga(){
    location.href = secciones[1];
}

function inicializarVariables(){
    btnRegistro = document.getElementById("btnRegistro");
    btnInicioSesion = document.getElementById("btnInicioSesion");   
}

function crearEventos(){
    //btnRegistro.addEventListener("click", (e)=>{e.target.id});
    btnRegistro.addEventListener("click", enrutador);
    btnInicioSesion.addEventListener("click", enrutador);
}

function enrutador(evento){
    alert(evento.target.id);

}