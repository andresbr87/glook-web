/* ===================================================
   GLOOK — Firebase / Firestore integration
   Captura leads del formulario de contacto
   =================================================== */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBsn0kPlWOfQoqFaBwdk9GxL6OoA2_gBYA",
  authDomain: "glook-web.firebaseapp.com",
  projectId: "glook-web",
  storageBucket: "glook-web.firebasestorage.app",
  messagingSenderId: "403882397532",
  appId: "1:403882397532:web:04e6b43e2e150381acbb99"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

/* ---- Guardar lead en Firestore ---- */
window.guardarLead = async function(datos) {
  try {
    await addDoc(collection(db, "leads"), {
      nombre:    datos.nombre    || "",
      telefono:  datos.telefono  || "",
      email:     datos.email     || "",
      tipo:      datos.tipo      || "",
      categoria: datos.categoria || "",
      mensaje:   datos.mensaje   || "",
      fuente:    "Web",
      estado:    "Nuevo",
      fecha:     serverTimestamp()
    });
    console.log("Lead guardado en Firestore ✅");
  } catch (error) {
    console.error("Error guardando lead:", error);
  }
};
