import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { addPokemonTypes, isLoading, addPokemon } from '../../actions';
import { cleanPokemon, getEachPokemon } from '../../helper.js'
import Loading from '../../components/Loading'
import CardContainer from '../../components/CardContainer';

class FakeContainer extends Component {
  constructor(){
    super() 
    this.state = {
      clicked: false,
      displayPokemon: []
    }
  }

  componentDidMount = () => {
    this.getPokemonTypes()
  }

  getPokemonTypes = async() => {
    try {
      const url = 'http://localhost:3001/types'
      this.props.isLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      const pokemon = await cleanPokemon(data)
      this.props.addPokemonTypes(pokemon)
      this.props.isLoading(false)
    } catch(error) {
      throw new Error(error.message)
    }
  }

  getPokemon = async (pokemon) => {
    const pokeNames = this.props.pokemon.map((pokemon) => {
      return pokemon.name
    })
    if(pokeNames.includes(pokemon.name)) {
      return 
    } else {
    const eachPokemon = await getEachPokemon(pokemon)
    this.props.addPokemon(eachPokemon)
    this.filterPokemon(eachPokemon)
    }
  }

  filterPokemon = (pokemon) => {
    const clicked = !this.state.clicked
    const displayPokemon = pokemon
    this.setState({ displayPokemon, clicked })
  }

  handleSwitch = () => {
    const clicked = !this.state.clicked
    this.setState({ clicked })
  }

  render() {
      if(!this.props.isLoading) {
        return(
          <Loading/>
        )
      } else {
    return (
      <div>
        <CardContainer 
        handleSwitch={this.handleSwitch} 
        pokemonTypes={this.props.pokemonTypes} 
        getPokemon={this.getPokemon} 
        clicked={this.state.clicked} 
        displayPokemon={this.state.displayPokemon}
        />
      </div>
    );
  }
  }
}

FakeContainer.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

export const mapStateToProps = (state) => ({
   isLoading: state.isLoading, 
   pokemonTypes: state.pokemonTypes,
   pokemon: state.pokemon
  });

export const mapDispatchToProps = dispatch => ({ 
  addPokemonTypes: (pokemon) => dispatch(addPokemonTypes(pokemon)),
  isLoading: (bool) => dispatch(isLoading(bool)),
  addPokemon: (ids) => dispatch(addPokemon(ids))
});
export default connect(mapStateToProps, mapDispatchToProps)(FakeContainer);
