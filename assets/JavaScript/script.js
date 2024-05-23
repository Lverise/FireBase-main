import { registrarPersona } from "./promesas.js";

addEventListener("load",()=>{
    document.getElementById("btnRegistrar").addEventListener("click", registrar);
})

const registrar = ()=>{
    let eNombre = document.getElementById("nombre");
    let vNombre = eNombre.value
    let objects = (nombre,vNombre)
    // console.log(objeto);
    registrarPersona.objeto
};