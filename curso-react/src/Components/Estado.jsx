import React, { Component } from "react";

function EstadoHijo(props) {
   return (
      <div>
         <h3>{"Soy el valor del estado del componente padre: "+props.valorEstadoPadre}</h3>
      </div>
   )
}

class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "Alberto Soto",
    };
  }
  render() {
   return (
      <div>
         <h3>{"Soy el estado del componente padre: "+this.state.nombre}</h3>
         <EstadoHijo valorEstadoPadre={this.state.nombre}/>
      </div>
   )
  }
}

export default Estado;
