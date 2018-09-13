import { combineReducers } from 'redux'
import pokemonTypesReducer from './pokemonTypesReducer'
import isLoadingReducer from './isLoadingReducer'
import pokemonReducer from './pokemonReducer'

const rootReducer = combineReducers({
  pokemonTypes: pokemonTypesReducer,
  isLoading: isLoadingReducer,
  pokemon: pokemonReducer
})

export default rootReducer
