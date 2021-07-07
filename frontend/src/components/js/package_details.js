import React, { Component } from "react";
import '../css/package-details.css';


export default class Packagedetails extends Component {
    render() {
        return (

          
     
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
         <h4>Package No:</h4>
          <h5>Visit Places:</h5>
          <h5>Day limits:</h5>
          <h5>Transport type:</h5>
          <h5>Price:</h5>
          <a href="#"><h5>Locations:</h5></a>
          <a href="#"><h5>Hotel Facilities:</h5></a>
          
          <br></br><br></br>
         
          <button type="button">Book Now</button>
          
          </div>
     
  <br></br>

    </div>

  

         );
    }

}