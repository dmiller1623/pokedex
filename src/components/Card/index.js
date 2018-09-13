import React from 'react'

const Card = ({ id, name, pokemon, getPokemon }) => {

  return (
    <div onClick={() => getPokemon() }>
      <h1>{name}</h1>
    </div>
  )
}

export default Card