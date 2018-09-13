import React, { Component } from 'react';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/'
// import CardContainer from '../../components/CardContainer';

class App extends Component {


  render() {
    return (
      <div className='App'>
        <div>
         <h1 className='header'> POKéDEX </h1>
        </div>
        <div>
          <FakeContainer />
        </div>
      </div>
    );
  }
}


export default App;
