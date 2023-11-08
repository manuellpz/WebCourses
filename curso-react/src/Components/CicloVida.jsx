import React, { Component } from "react";

class Reloj extends Component {
  constructor(props) {
    super(props);
  }
  componentWillUnmount() {
   console.log(3,"El componente ha sido eliminado del DOM")
  }
  render() {
    return <h3>{this.props.hour}</h3>;
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    console.log(0, "El componente se inicializa, AUN No está en el DOM");
    this.state = {
      hour: new Date().toLocaleTimeString(),
      visible: false,
    };
    this.timer = null;
  }

  componentDidMount() {
    console.log(1, "El componente ya se encuentra en el DOM");
  }

  /*Este método se ejecuta cuando las propiedades o el estado han sufrido algún cambio, y puede recibir dos argumentos las propiedades previas antes de cambiar y el estado previo antes de cambiar*/
  componentDidUpdate(prevProps, prevState) {
    console.log(2, "Las propiedades o el estado han cambiado");
    console.log(prevProps);
    console.log(prevState);
  }

  tictac = () => {
    this.timer = setInterval(() => {
      this.setState({
        hour: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
    this.setState({
      visible: true,
    });
  };

  detener = () => {
    clearInterval(this.timer);
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log(
      4,
      "El componente se dibuja (redibuja) por algun cambion en el DOM"
    );
    return (
      <div>
        <h2>Ciclo De Vida Componentes Clase</h2>
        {this.state.visible && <Reloj hour={this.state.hour} />}
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
      </div>
    );
  }
}
