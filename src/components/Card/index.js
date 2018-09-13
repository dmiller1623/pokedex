import React, { Component } from 'react'

const Card = ({ id, name, pokemon, type, weight, getPokemon, clicked }) => {
  return (
    <div onClick={() => getPokemon(pokemon) }>
     {!clicked && <h1>{name}</h1>} 
     {clicked && 
     <div> 
       <h1>{type}</h1> 
       <h1>{weight}</h1>
     </div>}
    </div>
  )
}

export default Card




