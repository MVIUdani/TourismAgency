import React, {useState,useEffect} from "react";
import '../css/otherhotel.css';
import { Link } from 'react-router-dom';

function Other_hotel01() {
    return(


<div className="Otherclass">     
<br></br><br></br>
<div className="Hotel">

<div className="Hotel_details">
  <div className="Day">
    <h1>Hotel Details</h1>
    <h4>Hotel Name: Grand Hotel Nuwara Eliya</h4><br></br>
    <h4> Hotel Description:</h4>
    <br></br>
    The Grand Hotel is a four-star boutique hotel[1] in Nuwara Eliya, Sri Lanka, that was built in the style of an Elizabethan-era manor house.[2] The hotel has 154 rooms, including three presidential suites, four junior suites, including a governor's suite that have been maintained to preserve the traditional design.[2] The Grand Hotel has a number of restaurants, bars and a billiards room.
    <br></br><br></br>
   
    
  </div>
</div>

<div className="Hotel_images">

<img className="Hotel_size" src='hotel/h_01.jpg' alt="" width="450" height="245"></img>
<img className="Hotel_size" src='hotel/h_02.jpg' alt="" width="285" height="220"></img>
<img className="Hotel_size" src='hotel/hortan_bed.jpg' alt="" width="240" height="205"></img>

<img className="Hotel_size" src='hotel/hortan_food.jpg' alt="" width="250" height="210"></img>
<img className="Hotel_size" src='hotel/hortan_food2.jpg' alt="" width="255" height="215"></img>

</div>

</div>   


        </div>


    );
}

export default Other_hotel01;