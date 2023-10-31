import React,{Component} from "react";
import data from "../helpers/data.json"

const Lista = (props) => {
   return (
      <li key={props.fr.id}>
         <a href={props.fr.web} target="_blank">{props.fr.name}</a>
      </li>
   )
}

class RenderizadoElementos extends Component {
   constructor(props) {
      super(props);
      this.state = {
         seasons:["Spring","Summer","Fall-Autumn","Winter"]
      }
   }
   render() {
      return (
         <div>
            <h2>Renderizado De Elementos</h2>
            <h3>Estaciones Del Año</h3>
            <ol>
               {
                  this.state.seasons.map((s,index) => <li key={index}>{s}</li>)
               }
            </ol>
            <h3>Frameworks Frontend JavaScript</h3>
            <ol>
               {
                  data.frameworks.map((d,index) => <Lista key={index} fr={d}/>)
               }
            </ol>
         </div>
      )
   }
}

export default RenderizadoElementos;