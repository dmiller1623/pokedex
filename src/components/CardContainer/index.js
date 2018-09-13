import React from 'react'
import Card from '../../components/Card'

const CardContainer = ({ pokemon, getPokemon }) => {
  const displayPokemon = pokemon.map((poke, index) => {
    return <Card 
    {...poke}
    key={index}
    getPokemon={getPokemon}
    />
  })
  return (
    <div>
      {displayPokemon}
    </div>
  )
}

export default CardContainer