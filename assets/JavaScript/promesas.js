

import { addDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js"
import { db } from "./firebase.js";
export const registrarPersona = async(persona)=>{
    const docRef = await addDoc(collection(db, "personas"), persona);
};

export const obtenerPersonas = async()=>{
    //esto recupera la referencia
    const ref = collection(db, "personas");
    //recuperamos una captura de la bd
    const qSnap = await getDocs(ref);
    let listado = []
    qSnap.forEach((doc) => {
        console.log(doc.id);
        listado.push({...doc.data(),id:doc.id})
    });
    console.log(listado);
    return listado;
}