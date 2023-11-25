import React, { useState } from "react";

// export default function Formularios() {
//   const [nombre, setNombre] = useState("");
//   const [framework, setFramework] = useState("");
//   const [lenguaje, setLenguaje] = useState("");
//   const [terminos, setTerminos] = useState(false);

//   const handleSubmit = e => {
//    e.preventDefault()
//    alert('El formulario se ha enviado con exito')
//   }

//   return (
//     <>
//       <h2>Formularios</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="nombre">Nombre: </label>
//         <input
//           type="text"
//           id="nombre"
//           name="nombre"
//           value={nombre}
//           onChange={(e) => setNombre(e.target.value)}
//         />
//         <p>Elige Tu Framework Favorito</p>
//         <input
//           type="radio"
//           name="framework"
//           id="react"
//           value="react"
//           onChange={(e) => setFramework(e.target.value)}
//           defaultChecked
//         />
//         <label htmlFor="react">React</label>
//         <input
//           type="radio"
//           name="framework"
//           id="angular"
//           value="angular"
//           onChange={(e) => setFramework(e.target.value)}
//         />
//         <label htmlFor="angular">Angular</label>
//         <input
//           type="radio"
//           name="framework"
//           id="vue"
//           value="vue"
//           onChange={(e) => setFramework(e.target.value)}
//         />
//         <label htmlFor="vue">Vue</label>
//         <p>Elige Tu Lenguaje De Programación Favorito: </p>
//         <select
//           name="lenguaje"
//           onChange={(e) => setLenguaje(e.target.value)}
//           defaultValue=""
//         >
//           <option value="">---</option>
//           <option value="java">Java</option>
//           <option value="py">Python</option>
//           <option value="js">JavaScript</option>
//           <option value="cs">C-Sharp</option>
//           <option value="php">PHP</option>
//         </select>
//         <br />
//         <label htmlFor="terminos">Acepto los términos y condiciones</label>
//         <input
//           type="checkbox"
//           name="terminos"
//           id="terminos"
//           onChange={(e) => setTerminos(e.target.checked)}
//         />
//         <br />
//         <input type="submit" value="Enviar"/>
//       </form>
//     </>
//   );
// }

export default function Formularios() {
   const [form, setForm] = useState({});
 
   const handleSubmit = e => {
    e.preventDefault()
    alert('El formulario se ha enviado con exito')
   }

   const handleChange = e => {
      setForm({
         ...form,
         [e.target.name]:e.target.value
      })
   }
   const handleChecked = e => {
      setForm({
         ...form,
         [e.target.name]:e.target.checked
      })
   }
 
   return (
     <>
       <h2>Formularios</h2>
       <form onSubmit={handleSubmit}>
         <label htmlFor="nombre">Nombre: </label>
         <input
           type="text"
           id="nombre"
           name="nombre"
           value={form.nombre}
           onChange={handleChange}
         />
         <p>Elige Tu Framework Favorito</p>
         <input
           type="radio"
           name="framework"
           id="react"
           value="react"
           onChange={handleChange}
           defaultChecked
         />
         <label htmlFor="react">React</label>
         <input
           type="radio"
           name="framework"
           id="angular"
           value="angular"
           onChange={handleChange}
         />
         <label htmlFor="angular">Angular</label>
         <input
           type="radio"
           name="framework"
           id="vue"
           value="vue"
           onChange={handleChange}
         />
         <label htmlFor="vue">Vue</label>
         <p>Elige Tu Lenguaje De Programación Favorito: </p>
         <select
           name="lenguaje"
           onChange={handleChange}
           defaultValue=""
         >
           <option value="">---</option>
           <option value="java">Java</option>
           <option value="py">Python</option>
           <option value="js">JavaScript</option>
           <option value="cs">C-Sharp</option>
           <option value="php">PHP</option>
         </select>
         <br />
         <label htmlFor="terminos">Acepto los términos y condiciones</label>
         <input
           type="checkbox"
           name="terminos"
           id="terminos"
           onChange={handleChecked}
         />
         <br />
         <input type="submit" value="Enviar"/>
       </form>
     </>
   );
 }