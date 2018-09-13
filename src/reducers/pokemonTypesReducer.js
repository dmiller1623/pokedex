const pokemonTypesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POKEMON_TYPES':
      return action.pokemon
    default:
      return state
  }
}

export default pokemonTypesReducer