import React, { Component } from "react";

class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

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
        <h2>Eventos en componentes de clase ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{"Counter: " + this.state.counter}</h3>
      </div>
    );
  }
}

export default EventosES6;
