import pokemonReducer from './pokemonReducer'
import * as actions from '../actions'

describe('pokemonReducer', () => {
  it('should return the initial state', () => {
    const expected = []
    
    const results = pokemonReducer(undefined, {})

    expect(results).toEqual(expected)
  })

  it('should return an array', () => {
    const mock = [{ name: 'pidgey' }, { name: 'bulbasaur'}]
    const expected = [{ name: 'pidgey'},  { name: 'bulbasaur'}]

    const results = pokemonReducer(undefined, actions.addPokemon(mock))

    expect(results).toEqual(expected)
  })
})