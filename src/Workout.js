import React from 'react';
import './App.css';

class Workout extends React.Component {
  render() {
    return (
    	<div>
	    	<li>Workout: {this.props.workout.title}<br/>
	    		Calories burned: {this.props.workout.cals}<br/>
	    		Date/Time: {this.props.workout.time}<br/><br/>
	    	<button class='button' onClick={() => this.props.deleteWorkout(this.props.workout)}>Delete workout</button>
			</li>
    	</div>
    );
  }
}

export default Workout;