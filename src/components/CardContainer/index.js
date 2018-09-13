import React from 'react'
import Card from '../../components/Card'
import PokemonCard from '../../components/PokemonCard'

const CardContainer = ({ pokemonTypes, getPokemon, clicked, displayPokemon, handleSwitch }) => {
  const displayPokemonTypes = pokemonTypes.map((poke, index) => {
    return <Card 
    {...poke}
    key={index}
    getPokemon={getPokemon}
    />

  })
    const displayClicked = displayPokemon.map((poke, index) => {
      return <PokemonCard
      {...poke}
      key={index}
      handleSwitch={handleSwitch}
      pokemonTypes={pokemonTypes}
      />
  })

  return (
    <div>
      {clicked === false && displayPokemonTypes}
      {clicked === true && displayClicked}
    </div>
  )
}

export default CardContainer