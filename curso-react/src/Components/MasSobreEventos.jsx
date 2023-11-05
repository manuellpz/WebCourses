import React,{Component} from "react";

const Boton = ({myOnClick}) => <button onClick={myOnClick}>Boton Hecho Componente</button>

export default class MasSobreEventos extends Component {
   handleClick = (e) => {
      console.log(e)
      console.log(e.target)
      console.log(e.nativeEvent)
      console.log(e.nativeEvent.target)
   }
   render() {
      return (
         <div>
            <h2>Más Sobre Eventos</h2>
            <button onClick={this.handleClick}>Saludar</button>
            <Boton myOnClick={this.handleClick} />
         </div>
      )
   }
}