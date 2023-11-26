import React from "react";
import "./Estilos.css"
import moduleStyles from "./Estilos.module.css"

export default function Estilos() {
   const myStyles = {
      borderRadius:"8px",
      margin:"15px auto",
      maxWidth:"50%"
   }
   return (
      <section className="estilos">
         <h2>Estilos En React</h2>
         <h3 className="bg-react">Estilos CSS en hoja externa</h3>
         <h3 className="bg-react" style={myStyles}>Estilos En Linea (atributo style)</h3>
         <h3 className={moduleStyles.success}>Estilos CSS Mediante Modulos</h3>
      </section>
   )
}