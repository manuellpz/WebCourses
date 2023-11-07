import React, { Component } from "react";

export default class Padre extends Component {
  state = {
    contador: 0,
  };

  incrementarContador = () => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <>
        <h2>Comunicacion entre componentes</h2>
        <p><b>{this.state.contador}</b></p>
        <Hijo
          incrementarContador={this.incrementarContador}
          message="Mensaje para el hijo"
        />
      </>
    );
  }
}

const Hijo = (props) => { 
  return (
    <>
      <h3>{props.message}</h3> 
      <button onClick={props.incrementarContador}>Incrementar</button>
    </>
  );
};
