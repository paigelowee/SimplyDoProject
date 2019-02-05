import React from 'react';

class Workout extends React.Component {
  render() {
    return (
    	<div>
	    	<li>{this.props.workout.title}  
	    	<button onClick={() => this.props.deleteWorkout(this.props.workout)}>Delete</button>
			</li>
    	</div>
    );
  }
}

export default Workout;