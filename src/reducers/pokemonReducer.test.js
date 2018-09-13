import pokemonReducer from './pokemonReducer'
import * as actions from '../actions'


describe('pokemonReducer', () => {
  it('should return the initial state', () => {
    const expected = []

    const results = pokemonReducer(undefined, {})
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

    const results = pokemonReducer(undefined, actions.addPokemonTypes(mock))
    expect(results).toEqual(expected)
  })
})