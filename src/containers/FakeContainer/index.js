import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { fakeAction, addPokemon, isLoading } from '../../actions';
import { cleanPokemon } from '../../helper.js'
import Loading from '../../components/Loading'
import Card from '../../components/CardContainer'
import CardContainer from '../../components/CardContainer';

class FakeContainer extends Component {

  componentDidMount = () => {
    this.getPokemon()
  }

  getPokemon = async () => {
    try {
      this.props.isLoading(false)
      const url = 'http://localhost:3001/types'
      const response = await fetch(url)
      const data = await response.json()
      const pokemon = await cleanPokemon(data)
      this.props.addPokemon(pokemon)
      this.props.isLoading(true)
    } catch(error) {
      throw new Error(error.message)
    }
  }

  render() {
      if(!this.props.isLoading) {
        return(
          <Loading/>
        )
      } else {
    return (
      <div>
        <CardContainer />
        {/* <button onClick={()=> {
          this.props.fakeAction()
          alert('FAKE')
        }}> FAKE </button> */}
      </div>
    );
  }
  }
}

FakeContainer.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = (state) => ({
   isLoading: state.isLoading 
  });

const mapDispatchToProps = dispatch => ({ 
  addPokemon: (pokemon) => dispatch(addPokemon(pokemon)),
  isLoading: (bool) => dispatch(isLoading(bool))
});
export default connect(mapStateToProps, mapDispatchToProps)(FakeContainer);
