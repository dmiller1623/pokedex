export const addPokemonTypes = (pokemon) => ({
  type: 'ADD_POKEMON_TYPES',
  pokemon
})

export const isLoading = (bool) => ({
  type: 'LOADING',
  bool
})

export const addPokemon = (ids) => ({
  type: 'ADD_POKEMON',
  ids
})
