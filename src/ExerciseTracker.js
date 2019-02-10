import React from 'react';
import Workout from './Workout';
import moment from 'moment'
import uuid from 'uuid'
import './App.css';

class ExerciseTracker extends React.Component {

  constructor(props) {
    super(props);
		this.state = { workouts: [],
                   newWorkout: '',
                  newcalories:'',
                  totalcalories:0,
                   };
  }

  updateNewWorkout = (event) => {
  	 this.setState({ newWorkout: event.target.value });
	   }

  updatenewcalorie = (event) => {
     this.setState({ newcalories: event.target.value });
    }

	addWorkout = () => {
    const id = uuid.v4();
  		const workout = {
	    	title: this.state.newWorkout,
	    	id:id,
        cals: this.state.newcalories,
        time: moment().format('MMMM Do YYYY, h:mm:ss a')
  		};

		  const workouts = Object.assign([], this.state.workouts);
  		workouts.push(workout);

      let newcal = this.state.newcalories + this.state.totalcalories;
      this.setState({totalcalories:newcal});

  		this.setState({ workouts });	
      this.setState({ newWorkout: '' });
      this.setState({ newcalories: '' });
	}

	deleteWorkout = (workout) => {
  		const workouts = Object.assign([], this.state.workouts);
  		//locate workout to delete (iterate through array)
  		for (let i = 0; i < workouts.length; i++) {
    		if (workout.id === workouts[i].id ){
      			//remove the element at pos i (workout to be deleted)
      			workouts.splice(i, 1);
    		}
  		}
      const newcal = this.state.totalcalories - this.state.newcalories;
      this.setState({totalcalories:newcal});
  		//update the state
  		this.setState({ workouts });
	}

  render() {
    	return (
        <div>
          <div class='addworkout'>
            <label1>Workout name</label1>
            <br/>
  				  <input  value={this.state.newWorkout} onChange={this.updateNewWorkout} />
            <br/>
            <label1>Calories burned</label1>
            <br/>
            <input type="number" value={this.state.newcalories} onChange={this.updatenewcalorie} />
            <br/>
            <br/>
  				  <button class='button' onClick={this.addWorkout}>Save workout</button>
  			</div>
          <div class='workouts'>
            <h3>Workouts</h3>
          <ul>
    			   {this.state.workouts.map(workout => 
  					 <Workout workout={workout} key={workout.date} deleteWorkout={this.deleteWorkout} />
    					)}
  				</ul>
          <p> Total calories burnt: {this.state.totalcalories} </p>
          </div>

      	</div>

    	);
  	}
}

export default ExerciseTracker;