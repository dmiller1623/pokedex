import { combineReducers } from 'redux'
import fakeReducer from './fake-reducer'
import pokemonReducer from './pokemonReducer'
import isLoadingReducer from './isLoadingReducer'
import { isLoading } from '../actions';

const rootReducer = combineReducers({
  fake: fakeReducer,
  pokemon: pokemonReducer,
  isLoading: isLoadingReducer
})

export default rootReducer
