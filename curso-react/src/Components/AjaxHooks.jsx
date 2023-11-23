import React, { useState, useEffect } from "react";

const Pokemon = ({ avatar, name }) => {
  return (
    <>
      <figure>
        <img src={avatar} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </>
  );
};

export default function AjaxHooks(props) {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      let url = "https://pokeapi.co/api/v2/pokemon/";
      const response = await fetch(url);
      const data = await response.json();
      data.results.forEach(async (el) => {
        const res = await fetch(el.url);
        const dat = await res.json();
        let pokemon = {
          id: dat.id,
          name: dat.name,
          avatar: dat.sprites.front_default,
        };
        setPokemones((pokemones) => [...pokemones, pokemon]);
      });
    };
    getPokemons();
  }, []);

  return (
    <>
      <h2>Petición Asíncrona Usando Hooks</h2>
      {pokemones.map((el) => (
        <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
      ))}
    </>
  );
}
