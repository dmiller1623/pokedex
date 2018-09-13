export const fakeAction = () => ({ type: 'FAKE'})

export const addPokemon = (pokemon) => ({
  type: 'ADD_POKEMON',
  pokemon
})

export const isLoading = (bool) => ({
  type: 'LOADING',
  bool
})
