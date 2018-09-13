import React, { Component } from 'react';
import './App.css';
import PokemonContainer from '../../containers/PokemonContainer'

class App extends Component {


  render() {
    return (
      <div className='App'>
        <div>
         <h1 className='header'> POKéDEX </h1>
          <PokemonContainer />
          </div>
      </div>
    );
  }
}


export default App;
