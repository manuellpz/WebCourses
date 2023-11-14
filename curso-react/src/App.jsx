import React from "react";
import "./app.css"
import Componente from "./Components/Componente";
import Propiedades from "./Components/Propiedades";
import Estado from './Components/Estado';
import RenderizadoCondicional from "./Components/RenderizadoCondicional";
import RenderizadoElementos from "./Components/RenderizadoElementos";
import EventosES6 from "./Components/EventosES6";
import EventosES7 from "./Components/EventosES7";
import MasSobreEventos from "./Components/MasSobreEventos";
import ComunicacionComponentes from './Components/ComunicacionComponentes';
import CicloVida from "./Components/CicloVida";
import AjaxApis from "./Components/AjaxApis";
import ContadorHooks from "./Components/ContadorHooks";

function App() {
  const stations = ["Spring", "Summer", "Fall / Autumn", "Winter"];

  return (
    <>
      <h1>Stations of the year</h1>
      <ul>
        {stations.map((st, idx) => (
          <li key={idx}>{st}</li>
        ))}
      </ul>
      <Componente msg="HI I AM A COMPONENT" />
      <hr />
      <Propiedades
        cadena="Esto es una cadena de texto"
        numero={26}
        booleano={true}
        arreglo={[1,3,5,7,9,11,15]}
        objeto={{nombre:"Manuel",edad:26,correo:"manuelmzt@gmail.com"}}
        elementoReact={<i>Esto es un elemento React</i>}
        funcion={num => num*num}
        componente={<Componente msg="Soy un componente pasado como Prop"/>}
      />
      <hr />
      <Estado />
      <hr />
      <RenderizadoCondicional />
      <hr />
      <RenderizadoElementos />
      <hr />
      <EventosES6 />
      <hr />
      <EventosES7 />
      <hr />
      <MasSobreEventos />
      <hr />
      <ComunicacionComponentes />
      <hr />
      <CicloVida />
      <hr />
      <AjaxApis />
      <hr />
      <ContadorHooks />
    </>
  );
}

export default App;
