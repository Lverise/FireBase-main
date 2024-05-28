import { registrarPersona } from "./promesas.js";

addEventListener("load",()=>{
    document.getElementById("btnRegistrar").addEventListener("click", registrar);
})

const registrar = ()=>{
    //Recupero elemento
    let eNombre = document.getElementById("nombre");
    let vNombre = eNombre.value
    let eApellido = document.getElementById("apellido");
    let vApellido = eApellido.value
    let eTelefono = document.getElementById("telefono");
    let vTelefono = eTelefono.value
    let eCorreo = document.getElementById("correo");
    let vCorreo = eCorreo.value
    let objeto = {nombre:vNombre,apellido:vApellido,telefono:vTelefono,correo:vCorreo};

    // console.log(objeto);

    registrarPersona(objeto).then(()=>{
        alert("Se registra con exito")
    }).catch((error)=>{
        console.log(error);
    });
}