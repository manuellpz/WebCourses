import React from 'react'
import './App.css'
import Componente from './Components/Componente'

function App() {
  const stations = ["Spring","Summer","Fall / Autumn","Winter"]

  return (
    <>
      <h1>Stations of the year</h1>
      <ul>
        {
          stations.map((st,idx)=>(
            <li key={idx}>{st}</li>
          ))
        }
      </ul>
      <Componente msg="HI I AM A COMPONENT"/>
      <Componente msg="I AM ANOTHER COMPONENT"/>
    </>
  )
}

export default App

//Notas
/*
  - Los componentes se pueden definir de dos maneras: <Componente></Componente> | <Componente />
*/
