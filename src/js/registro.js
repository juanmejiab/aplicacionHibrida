let secciones = ["login.html", "inicio.html"]
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
    logoRegistro.addEventListener("click", enrutador);
    btnRegistrarse.addEventListener("click", registrar);
}

function enrutador(){
    location.href = secciones[1];    
}

function registrar(){
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    let fechaNacimiento = document.getElementById("fechaNacimiento");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (calcularEdad(fechaNacimiento.value)>=18){
        let usuario = {
            nombre:nombre.value,
            apellidos:apellidos.value,
            fechaNacimiento:fechaNacimiento.value,
            email:email.value,
            password:password.value
        };
    
        localStorage.setItem("usuario",JSON.stringify(usuario));
        alert("Registro exitoso!");
        location.href=secciones[0];
    }
    else{
        alert("Para registrarse debe ser mayor de edad");
    }
    
}
function calcularEdad(fecha){
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}