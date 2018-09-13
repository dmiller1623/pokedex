export const cleanPokemon = (data) => {
  const pokemon = data.map(poke => {
    return poke
  })
  return pokemon
}

export const getEachPokemon = (pokemon) => {
  const eachPoke = pokemon.map(async (number) => {
    const response = await fetch(`http://localhost:3001/pokemon/${number}`)
    const data = await response.json()
    return data
  })
  return Promise.all(eachPoke)
}

