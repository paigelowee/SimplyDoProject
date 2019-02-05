import React, { Component } from 'react';
import './App.css';
import ExerciseTracker from './ExerciseTracker';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Excercise Tracker</h1>
        <ExerciseTracker />
      </div>
    );
  }
}

export default App;
