import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Job from './components/job';

class App extends Component {
  constructor(props){
    super(props);
  this.state = {
    jobs: [
        {"id": 1,
        "title": "Frontend Developer",
        "description": "Comfortable with modern JS stack, experience with React.",
        "employment_type": "full_time"},
        {"id": 2,
        "title": "Frontend Developer",
        "description": "Comfortable with modern JS stack, experience with React.",
        "employment_type": "full_time"}
      
    ]
  }
}
  render() {
    return (
      <div className="App">
      <ul>
        {
          this.state.jobs.map((job)=>{
            return(<Job id= {job.id}>{job.title}</Job>)
        })
        }
      </ul>
      </div>
    );
  }
}

export default App;
