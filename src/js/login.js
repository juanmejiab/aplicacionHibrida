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
    btnIniciarSesion.addEventListener("click", login);
    logoLogin.addEventListener("click", enrutador);
}

function enrutador(){
    location.href = secciones[1];  
}

function login(){
    let correo = document.getElementById("correo");
    let clave = document.getElementById("password");
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    if(correo.value==usuario.email && clave.value== usuario.password)
    {
        location.href = secciones[0];
    }
    else{
      alert("Datos incorrectos");
    }
}