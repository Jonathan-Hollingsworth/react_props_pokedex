import React from 'react';

const Pokecard = ({id, name, type, base_experience}) => {
    return (
        <div className='pokemon'>
          <b>{name}</b>
          <br />
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
          <p>Type: {type}</p>
          <p>EXP: {base_experience}</p>
        </div>
    )
}

export default Pokecard