import React, { useState,useEffect } from "react";
import '../../css/package-details.css';
import { Link } from 'react-router-dom';
import SimpleRating from "../customer/rating";
import Axios from "axios";

export default function PackageSeconddetails() {
    const [package_id, setPackage_id] = useState("");
    const [time_limit, setDay_duration] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:5000/readPackageSecond").then((response) => {
            setPackage_id(response.data[0].package_id);
            setDay_duration(response.data[0].time_limit);
            
          });
    },[]);

        return (    
     
    <div className="Start">

            <div className="Package-details">

            <img className="Image-size" src='sigiriya.jpg' alt="" width="240" height="210"></img>
            <img className="Image-size" src='polonnaruwa.jpg' alt="" width="230" height="210"></img>
            <img className="Image-size" src='hortan.jpg' alt="" width="210" height="225"></img>
            <img className="Image-size" src='waterfall02.jpg' alt="" width="235" height="215"></img>
            <img className="Image-size" src='atamasthanaya.jpg' alt="" width="230" height="225"></img>
            <img className="Image-size" src='athugala.jpg' alt="" width="200" height="225"></img>

           </div>
            <div className="Places-image">
            <h3>Package No: 0{package_id} <SimpleRating /></h3>
            <h5>Visit Places:</h5>
             <div  className="List_package">
            <ul>
              <li><h6>Day 01 & 02 : Polonnaruwa</h6></li>
              <li><h6>Day 03 & 04 : Bopath Ella Water Fall</h6></li>
              <li><h6>Day 05 & 06 : Atamastana</h6></li>
              <li><h6>Day 07 & 08 : Kurunegala-Athagala</h6></li>
              <li><h6>Day 09 & 10 : Nallur Kandaswamy Kovil</h6></li>
              
            </ul>
            </div>
            <h5>Day Duration: {time_limit}</h5>
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
  

            <h5>Price for one passenger: 450$</h5>
            <Link to="/location-of-package"><h5>Locations</h5></Link>
            <Link to="/hotel-details-of-packageone"><h5>Hotel Facilities</h5></Link>
          
          <br></br>
          <Link to="/edit_and_request_package"><button className="Btn1" type="button"><h6>Edit & request package</h6></button></Link>
          <Link to="/request"><button className="Btn1" type="button"><h6>Request new Package</h6></button></Link>
          <Link to="/count_pasenger"><button className="Btn1" type="button"><h6>Book Now</h6></button></Link>
          

            </div>
            
            </div>
   
         );
   

}