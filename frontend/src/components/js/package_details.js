import React, { Component } from "react";
import '../css/package-details.css';
import { Link } from 'react-router-dom';

export default class Packagedetails extends Component {
    render() {
        return (

          
     
    <div className="Start">

            <div className="Package-details">

            <img className="Image-size" src='sigiriya.jpg' alt="" width="220" height="210"></img>
            <img className="Image-size" src='polonnaruwa.jpg' alt="" width="230" height="210"></img>
            <img className="Image-size" src='hortan.jpg' alt="" width="210" height="225"></img>
            <img className="Image-size" src='waterfall02.jpg' alt="" width="235" height="215"></img>
            <img className="Image-size" src='atamasthanaya.jpg' alt="" width="230" height="225"></img>
            <img className="Image-size" src='athugala.jpg' alt="" width="200" height="225"></img>

           </div>
            <div className="Places-image">
            <h3>Package No:</h3>
            <h5>Visit Places:</h5>
            <h5>Day limits:</h5>
            <h5>Transport type:</h5>
            <h5>Price:</h5>
            <Link to="/location-of-package"><h5>Locations:</h5></Link>
            <Link to="/"><h5>Hotel Facilities:</h5></Link>
          
          <br></br><br></br>
         
          <button className="Btn1" type="button">Request Package</button>
          <button className="Btn1" type="button">Book Now</button>
          

            </div>
            
            </div>
   
         );
    }

}