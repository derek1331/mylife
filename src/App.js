import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Tracker from './components/tracker'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Tracker title="Booba Tracker">
          </Tracker>
      </div>
    );
  }
}

export default App;
