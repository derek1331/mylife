import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Tracker from './components/tracker'
import NextTime from './components/nextTime'
import Goals from './components/goals'
import Notes from './components/notes'

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
          <Goals></Goals>
          <Notes></Notes>
      </div>
    );
  }
}

export default App;
