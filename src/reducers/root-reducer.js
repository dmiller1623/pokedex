import { combineReducers } from 'redux'
import pokemonReducer from './pokemonReducer'
import isLoadingReducer from './isLoadingReducer'
import idsRedcuer from './idsReducer'

const rootReducer = combineReducers({
  pokemonTypes: pokemonReducer,
  isLoading: isLoadingReducer,
  pokemon: idsRedcuer
})

export default rootReducer
