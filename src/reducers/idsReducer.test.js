import idsReducer from './idsReducer'
import * as actions from '../actions'

describe('idsReducer', () => {
  it('should return the initial state', () => {
    const expected = []
    
    const results = idsReducer(undefined, {})

    expect(results).toEqual(expected)
  })

  it('should return an array', () => {
    const mock = [{ name: 'pidgey' }, { name: 'bulbasaur'}]
    const expected = [{ name: 'pidgey'},  { name: 'bulbasaur'}]

    const results = idsReducer(undefined, actions.addPokemon(mock))

    expect(results).toEqual(expected)
  })
})