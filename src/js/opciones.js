let secciones = ["mesas.html", "contacto.html"];
let btnReservaMesa, btnContacto;

window.onload = init;

function init(){
    inicializarVariables();
    crearEventos();
}

function inicializarVariables(){
    btnReservaMesa = document.getElementById("btnReservaMesa");
    btnContacto = document.getElementById("btnContacto");
}

function crearEventos(){
    btnReservaMesa.addEventListener("click", enrutador);
    btnContacto.addEventListener("click", enrutador);
}

function enrutador(evento){
    if (evento.target.id == "btnReservaMesa"){
        location.href = secciones[0];
    }
    else{
        location.href=secciones[1];
    }
    
}