import React from 'react'

const PokemonCard = ({ name, weight, type, handleSwitch, sprites, pokemonTypes }) => {
  return(
    <div onClick={handleSwitch}>
      <h1>{name}</h1>
      <h1>{weight}</h1>
      <img src={sprites.front_default}/>
    </div>
  )
}

export default PokemonCard