let secciones = "opciones.html"
let logoMesas, mesas, btnMesas, fecha;
let lMesas = [];

window.onload = init;

function init(){
    inicializarVariables();
    crearEventos();
}

function inicializarVariables(){
    logoMesas = document.getElementById("logoMesas");
    btnMesas = document.getElementById("btnResevaMesa");
    mesas = document.querySelectorAll('.mesas');
    fecha = document.getElementById("fecha");
}

function crearEventos(){
    logoMesas.addEventListener("click", enrutador);
    btnMesas.addEventListener("click", reservar);
}

function enrutador(){
    location.href = secciones;
}

function reservar(){
    lMesas = [];
    mesas.forEach(e => {
        if (e.checked == true){
            lMesas.push(e.value);
        }
    });
    
    if (lMesas.length == 1 && fecha.value.length != 0){
        alert("Reserva exitosa! \nReservó la " + lMesas[0] + " para la fecha " + fecha.value);
        location.href="contacto.html";
    }
    else if (lMesas.length == 2 && fecha.value.length != 0){
        alert("Reserva exitosa! \nReservó la " + lMesas[0] + " y la " + lMesas[1] + " para la fecha " + fecha.value);
        location.href="contacto.html";
    }
    else if(fecha.value.length == 0){
        alert("Ingrese la fecha de la reserva");
    }
    else{
        alert("Solo puede reservar máximo 2 mesas");
        mesas.forEach(e => {
            e.checked = false;
        });
    }
}