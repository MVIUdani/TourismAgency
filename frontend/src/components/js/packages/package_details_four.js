import React, { useState,useEffect } from "react";
import '../../css/package-details.css';
import { Link } from 'react-router-dom';
//import SimpleRating from "./customer/rating";

export default function Package_details_four() {
   
  const [travel,setTravel] = useState('');
  const handleChange=(e)=>{
  setTravel(e.target.value);
}
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
            <div style={{marginLeft:"35px"}}>
  <form>
             <input type="radio" value="bus" id="bus" 
               onChange={handleChange} name="travel" />
             <label for="bus">Travelling Bus</label>
<br></br>
            <input type="radio" value="van" id="van"
              onChange={handleChange} name="travel"/>
            <label for="van">Travelling Van</label>
 <br></br>  
            <input type="radio" value="car" id="car"
              onChange={handleChange} name="travel"/>
            <label for="car">Travelling Car</label>
  </form>
</div>
  

            <h5>Price for one passenger: {travel == "bus" ? 'Rs.17,000' : '' || travel == "van" ? 'Rs.15,000' : '' || travel == "car" ? 'Rs.13,000' : ''}</h5>
           
            <Link to="/package_four_location"><h5>Locations</h5></Link>
            <Link to="/package_four_hotel_details"><h5>Hotel Facilities</h5></Link>
          
          <br></br>
          <Link to="/edit_and_request_package"><button className="Btn1" type="button"><h6>Edit Package</h6></button></Link>
          <Link to="/request"><button className="Btn1" type="button"><h6>Request new Package</h6></button></Link>
          <Link to="/count_pasenger"><button className="Btn1" type="button"><h6>Book Now</h6></button></Link>
          
            </div>
            
            </div>
   
         );
    

}