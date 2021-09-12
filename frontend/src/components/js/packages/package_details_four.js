import React, { Component } from "react";
import '../../css/package-details.css';
import { Link } from 'react-router-dom';
//import SimpleRating from "./customer/rating";

export default class Package_details_four extends Component {
    render() {
        return (    
     
    <div className="Start">

            <div className="Package-details">

            <img className="Image-size" src='Package4/gallefort.jpg' alt="" width="240" height="210"></img>
            <img className="Image-size" src='Package4/rumassala_2.jpg' alt="" width="220" height="210"></img>
            <img className="Image-size" src='Package4/jungle_beach.jpg' alt="" width="220" height="225"></img>
            <img className="Image-size" src='Package4/port.jpg' alt="" width="220" height="220"></img>
            <img className="Image-size" src='Package4/hikkaduwa-coral-reef.jpg' alt="" width="230" height="215"></img>
            <img className="Image-size" src='Package4/trinco-lakpura.jpg' alt="" width="225" height="215"></img>

           </div>
            <div className="Places-image">
            <h3>Package No: 04</h3>
            <h5>Visit Places:</h5>
             <div  className="List_package">
            <ul>
              <li><h6>Day 01 & 02 : Galle Fort & Rumassala & Jungle beach</h6></li>
              <li><h6>Day 03 & 04 : Hikkaduwa coral garden </h6></li>
              <li><h6>Day 05 & 06 : Hambantota national port and city</h6></li>
              <li><h6>Day 07 & 08 : Thirukoneswaram Kovil & Nilaveli Uppuveli beach</h6></li>
              
            </ul>
            </div>
            <h5>Day Duration: 08 Days</h5>
            <h5>Select your transport type:</h5>

            <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
  <label class="form-check-label" for="flexRadioDefault1">
  Travelling Bus 
  </label> 
  </div> 

  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
   Travelling Van
  </label>
  </div>
            <h5>Price for one passenger: 380$</h5>
            <Link to="/package_four_location"><h5>Locations</h5></Link>
            <Link to="/hotel-details-of-packageone"><h5>Hotel Facilities</h5></Link>
          
          <br></br>
          <Link to="/edit_and_request_package"><button className="Btn1" type="button"><h6>Edit & request package</h6></button></Link>
          <Link to="/request"><button className="Btn1" type="button"><h6>Request new Package</h6></button></Link>
          <Link to="/count_pasenger"><button className="Btn1" type="button"><h6>Book Now</h6></button></Link>
          
            </div>
            
            </div>
   
         );
    }

}