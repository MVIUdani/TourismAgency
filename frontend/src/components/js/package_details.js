import React, { Component } from "react";
import '../css/package-details.css';

export default class Packagedetails extends Component {
    render() {
        return (

            <div className="Big"> 
    <center><h2><i>Package Details</i></h2></center>
          
     
    <div className="Start">

        
          
          <div className='C'>

           <img className="Photo" src='sigiriya.jpg' alt="" width="255" height="215"></img>
         
            <div className="C-part">

            <img className="Photo" src='polonnaruwa.jpg' alt="" width="250" height="210"></img>
            </div>
          </div>

          <div className='E'>
          <img className="Photo" src='atamasthanaya.jpg' alt="" width="250" height="225"></img>

            <div className="E-part">
            <img className="Photo" src='waterfall01.jpg' alt="" width="240" height="215"></img>

            </div>
          </div>

         <div className="D">
         <h3>Package No:</h3>
          <h4>Visit Places:</h4>
          <h4>Day limits:</h4>
          <h4>Transport type:</h4>
          <h4>Price:</h4>
          <a href="#"><h4>Locations:</h4></a>
          <a href="#"><h4>Hotel Facilities:</h4></a>
          
          <br></br><br></br>
         
          <button type="button">Book Now</button>
          
          </div>
     
  <br></br>

    </div>

    </div>

         );
    }

}