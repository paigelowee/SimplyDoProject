import React, { Component } from 'react';
import './App.css';
import ExerciseTracker from './ExerciseTracker';

class App extends Component {
  render() {
    return (
      <div class="main">
        <h1 class= 'App'>Fitness Tracker</h1>
        <ExerciseTracker />
      </div>
    );
  }
}

export default App;
