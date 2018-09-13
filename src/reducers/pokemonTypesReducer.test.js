import pokemonTypesReducer from './pokemonTypesReducer'
import * as actions from '../actions'


describe('pokemonTypesReducer', () => {
  it('should return the initial state', () => {
    const expected = []

    const results = pokemonTypesReducer(undefined, {})
    expect(results).toEqual(expected)
  })

  it('should return an array of pokemon', () => {
    const mock = [{ name: 'fighting'}, { name: 'ghost' }]
    const expected = [{
        name: 'fighting'
        },
        {
        name: 'ghost'
       }]

    const results = pokemonTypesReducer(undefined, actions.addPokemonTypes(mock))
    expect(results).toEqual(expected)
  })
})