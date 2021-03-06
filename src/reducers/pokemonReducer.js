const pokemonReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_POKEMON':
      return [...state, ...action.ids];
    default:
      return state;
  }
}

export default pokemonReducer