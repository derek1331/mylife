import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Tracker from './components/tracker'
import NextTime from './components/nextTime'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Tracker title="Phone Interviews">
          </Tracker>
          <Tracker title="Jobs Applied Too">
          </Tracker>
          <NextTime title="Call Booba"></NextTime>
      </div>
    );
  }
}

export default App;
