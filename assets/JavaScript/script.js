import { obtenerPersonas, registrarPersona } from "./promesas.js";

addEventListener("load",()=>{
    document.getElementById("btnRegistrar").addEventListener("click", registrar);
    cargarDatos();
})

const registrar = ()=>{
    //Recupero elemento
    let eNombre = document.getElementById("nombre");
    let vNombre = eNombre.value
    let eApellido = document.getElementById("apellido");
    let vApellido = eApellido.value
    let eEdad = document.getElementById("edad");
    let vEdad = eEdad.value
    let eRut = document.getElementById("rut");
    let vRut = eRut.value
    let eCorreo = document.getElementById("correo");
    let vCorreo = eCorreo.value
    let eFecha = document.getElementById("fechanacimiento");
    let vFecha = eFecha.value
    let objeto = {nombre:vNombre,apellido:vApellido,edad:vEdad,rut:vRut,correo:vCorreo,fechanacimiento:vFecha};

    // console.log(objeto);

    registrarPersona(objeto).then(()=>{
        alert("Se registra con exito")
        cargarDatos();
    }).catch((error)=>{
        //console.log(error);
        console.log(doc.data());
    });
}

const cargarDatos = ()=>{
    //Traer de las promesas todo lo registrado
    obtenerPersonas().then((personas)=>{
        console.log("HOLA")
        console.log(personas)
        //Cargarlo en la tabla del html
        let estructura = ""
        personas.forEach((p)=>{
            estructura += "<tr>"
            estructura += "<td>"+p.nombre+"</td>"
            estructura += "<td>"+p.apellido+"</td>"
            estructura += "<td>"+p.rut+"</td>"
            estructura += "<td>"+p.correo+"</td>"
            estructura += "<td>"+p.edad+"</td>"
            estructura += "<td>"+p.fechanacimiento+"</td>"
            estructura += "<td><button id='UPD"+p.id+"'>Actualizar</button></td>";
            estructura += "<td><button id='DEL"+p.id+"'>Eliminar</button></td>";
            estructura += "</tr>";
        })
        document.getElementById("cuerpoTabla").innerHTML = estructura;
        
        personas.forEach((p)=>{
            let elemento = document.getElementById("UPD"+p.id);
            elemento.addEventListener("click",()=>{
                document.getElementById("UPDnombre").value = p.nombre;
                document.getElementById("UPDapellido").value = p.apellido;
                document.getElementById("UPDrut").value = p.rut;
                document.getElementById("UPDcorreo").value = p.correo;
                document.getElementById("UPDedad").value = p.edad;
                document.getElementById("UPDfechanacimiento").value = p.fechanacimiento;
                document.getElementById("btnActualizar").value = p.id;
            })
        })
    })
alert("aca estoy")
}