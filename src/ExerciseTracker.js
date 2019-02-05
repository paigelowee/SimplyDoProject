import React from 'react';
import Workout from './Workout';


class ExerciseTracker extends React.Component {

    constructor(props) {
   		super(props);
		this.state = { workouts: [], newWorkout: '' };
	}
	//method 
	updateNewWorkout = (event) => {
  		this.setState({ newWorkout: event.target.value });
	}
	//mehthod to add workouts
	addWorkout = () => {
		//create  new workout obj
  		const workout = {
	  		//title got from state date built in java
	    	title: this.state.newWorkout,
	    	date: new Date()
  		};
  		//form array
		const workouts = Object.assign([], this.state.workouts);
  		//push workout onto array (save it)
  		workouts.push(workout);
  		//update state
  		this.setState({ workouts });
	}

	//method delete workouts
	deleteWorkout = (workout) => {
  		const workouts = Object.assign([], this.state.workouts);
  		//locate workout to delete (iterate through array)
  		for (let i = 0; i < workouts.length; i++) {
    		if (workout.date.getTime() === workouts[i].date.getTime()) {
      			//remove the element at pos i (workout to be deleted)
      			workouts.splice(i, 1);
    		}
  		}
  		//update the state
  		this.setState({ workouts });
	}

  	render() {
    	return (
      		<div>
				<input placeholder='Add a new workout' value={this.state.newWorkout} onChange={this.updateNewWorkout} />
				<button onClick={this.addWorkout}>Add workout</button>
				<ul>
  					{this.state.workouts.map(workout => 
					<Workout workout={workout} key={workout.date} deleteWorkout={this.deleteWorkout} />
  					)}
				</ul>
      	</div>

    	);
  	}
}

export default ExerciseTracker;