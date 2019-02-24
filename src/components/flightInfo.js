import React from 'react'

const  flightInfo=(props)=> {
    const {launch,missionName,rocket, logo,details}=props.data;
    if(launch !==undefined || missionName !==undefined || rocket !==undefined || details !==undefined ){
      return (
        
        <div className="main-container">
          <div className="header">FLIGHT INFO</div>
            <ul>
                <li>Launch: {launch}</li>
                <li>Mission name: {missionName} </li>
                <li>Rocket: {rocket}</li>
                <li>Details: {details}</li>
            </ul>
                <img className="logo" src={logo}></img>
        </div>
      )

    }
}
export default flightInfo