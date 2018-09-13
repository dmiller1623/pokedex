import { mapStateToProps, mapDispatchToProps, PokemonContainer } from '../PokemonContainer'
import * as actions from '../../actions'

describe('mapStateToProps', () => {
  it('should return an object with isLoading, pokemonTypes and pokemon', () => {
    const mockState = {
      isLoading: false,
      pokemon: [],
      pokemonTypes: [],
      powers: []
    }

    const expected = {
      isLoading: false,
      pokemon: [],
      pokemonTypes: [],
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)

  })
  describe('mapDispatchToProps', () => {
    it('should call dispatch when an add Pokemon is called',() => {
      const mockDispatch = jest.fn()
      const actionToDispatch = actions.addPokemon()
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.addPokemon()

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should call dispatch when an isLoading is called',() => {
      const mockDispatch = jest.fn()
      const actionToDispatch = actions.isLoading()
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.isLoading()

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should call dispatch when an add pokemon types is called',() => {
      const mockDispatch = jest.fn()
      const actionToDispatch = actions.addPokemonTypes()
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.addPokemonTypes()

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})