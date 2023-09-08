import React from 'react';
import Pokecard from "./pokecard"

const Pokedex = ({pokemon}) => {
    return (
      <>
        {pokemon.map(p => <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/>)}
      </>
    )
}

export default Pokedex