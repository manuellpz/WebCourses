import React,{Component} from "react";

const Pokemon = props => {
   return (
      <>
         <figure>
            <img src={props.avatar} alt={props.name} />
            <figcaption>{props.name}</figcaption>
         </figure>
      </>
   )
}

export default class AjaxApis extends Component {
   state = {
      pokemones: []
   }

   componentDidMount() {
     
      let url = "https://pokeapi.co/api/v2/pokemon/"
      fetch(url)
      .then(response => response.json())
      .then(data => {
        data.results.forEach(el => {
         fetch(el.url) 
         .then(res => res.json())
         .then(dat => {
            let pokemon = {
               id:dat.id,
               name:dat.name,
               avatar:dat.sprites.front_default
            }
            let pokemons = [...this.state.pokemones,pokemon]
            this.setState({
               pokemones:pokemons
            })
         })
        })
      })
   }

   render() {
      return (
         <div>
            <h3>Peticiones Asíncronas en Componentes de Clase</h3>
            {this.state.pokemones.map(el=>{
               return <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>
            })}
         </div>
      )
   }
}