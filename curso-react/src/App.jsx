import React from "react";
import "./App.css";
import Componente from "./Components/Componente";
import Propiedades from "./Components/Propiedades";

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
    </>
  );
}

export default App;
