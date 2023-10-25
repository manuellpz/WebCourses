import React from "react";
import PropTypes from "prop-types"

const Propiedades = (props) => {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <br />
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "Verdadero" : "Falso"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{`Datos: ${props.objeto.nombre} - ${props.objeto.edad} años - ${props.objeto.correo}`}</li>
        <li>{props.elementoReact}</li>
        <li>{(props.arreglo.map(props.funcion)).join(", ")}</li>
        <li>{props.componente}</li>
      </ul>
    </div>
  );
};

Propiedades.defaultProps = {
  porDefecto: "Propiedad Por Defecto",
};
Propiedades.propTypes = {
   numero:PropTypes.number.isRequired
}

export default Propiedades;
