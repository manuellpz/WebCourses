import React, { Component } from "react";

class Eventos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  //Dentro de una función no podemos acceder a todos los elementos del componente, por la limitante del contexto, que es dado por bloques, para eso usamos el método bind el cual nos permite enlazar contextos
  sumar() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  restar() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en componentes de clase</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{"Counter: " + this.state.counter}</h3>
      </div>
    );
  }
}

export default Eventos;
