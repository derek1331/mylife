import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Tracker from './components/tracker'
import NextTime from './components/nextTime'
import Goals from './components/goals'
import Notes from './components/notes'
import List from './components/list'
import Entertainment from './components/entertainment'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Tracker title="Phone Interviews">
          </Tracker>
          <br></br>
          <Tracker title="Jobs Applied Too">
          </Tracker>
          <br></br>
          <NextTime title="Call Booba"></NextTime>
          <br></br>
          <Goals></Goals>
          <br></br>
          <Notes></Notes>
          <br></br>
          <List title="Shopping List"></List>
          <br></br>
          <Entertainment></Entertainment>
      </div>
    );
  }
}

export default App;
