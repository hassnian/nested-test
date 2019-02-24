import React, { Component } from 'react';
import FlightInfo from './components/flightInfo'
import Loader from './components/loader'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data:{
        launch:null,
        missionName:null,
        rocket:null,
        logo:null,
        details:null
    }
    };
  }

  componentDidMount() {
      this.random();
   

  }
random=()=>{
  this.setState({
    isLoaded:false
  })
  fetch("https://api.spacexdata.com/v3/launches/" + Math.floor(Math.random()*70))
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: {
              launch:result.flight_number,
              missionName:result.mission_name,
              rocket:result.rocket.rocket_name,
            logo:result.links.mission_patch_small,
          details:result.details}
            });
            
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
}


  render() {

    const {err, isLoaded, data}=this.state;
    if (err) {
      return <div>Error: {err.message}</div>;
    } else if (!isLoaded) {
      return <Loader />;
    } else {
      return (
         <div className="App">
           
          <div className="center">
            <FlightInfo data={data}/>
            <button className="random-button" onClick={this.random}>Get random flight!</button>
  
          </div>
      </div>
      );
    }
  
  }
}

export default App;
