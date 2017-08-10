import React, { Component } from 'react';
import NavContainer from './components/NavContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavContainer isLoggedIn={false} />
      </div>
    );
  }
}

export default App;
