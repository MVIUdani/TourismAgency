import React, { useState,useEffect } from "react";
import '../../css/package-details.css';
import { Link,useHistory} from 'react-router-dom';
import SimpleRating from "../customer/rating";
import Axios from "axios";

export default function Package_details_three() {

  const [travel,setTravel] = useState('');

  const history = useHistory();

  const handleChange=(e)=>{
  setTravel(e.target.value);
}

const addTravel=()=>{
  Axios.post("http://localhost:5000/insertTransport_p3",{
      travel: travel,
      bus: '20000',
      van: '18000',
      car: '16000',
  }).then((response) => {
      console.log(response);
    });
    history.push('/count_pasenger_three');
};
        return (    
     
    <div className="Start">

            <div className="Package-details">

            <img className="Image-size" src='Package3/Nuwara-Eliya.jpg' alt="" width="240" height="210"></img>
            <img className="Image-size" src='Package3/horton-plains.jpg' alt="" width="230" height="210"></img>
            <img className="Image-size" src='Package3/ravana-ella.jpg' alt="" width="200" height="225"></img>
            <img className="Image-size" src='Package3/yala2.jpg' alt="" width="235" height="215"></img>
            <img className="Image-size" src='Package3/hummanaya.jpg' alt="" width="220" height="225"></img>
            <img className="Image-size" src='Package3/Galle-Fort.jpg' alt="" width="210" height="225"></img>

           </div>
            <div className="Places-image">
            <h3>Package No: 03 <SimpleRating /></h3>
            <h5>Visit Places:</h5>
             <div  className="List_package">
            <ul>
              <li><h6>Day 01 & 02 : Nuwara Eliya</h6></li>
              <li><h6>Day 03 & 04 : Horton Plains National Park</h6></li>
              <li><h6>Day 05 & 06 : Rawana Falls</h6></li>
              <li><h6>Day 07 & 08 : Yala National Park Safari</h6></li>
              <li><h6>Day 09 & 10 : Hummanaya</h6></li>
              <li><h6>Day 11 & 12 : Galle Dutch Fort</h6></li>
              
            </ul>
            </div>
            <h5>Day Duration: 12 Days</h5>
            <h5>Select your transport type:</h5>
            <div style={{marginLeft:"30px"}}>
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
  

            <h5>Price for one passenger: {travel == "bus" ? 'Rs.20,000' : '' || travel == "van" ? 'Rs.18,000' : '' || travel == "car" ? 'Rs.16,000' : ''}</h5>

            <Link to="/package_three_location"><h5>Locations</h5></Link>
            <Link to="/package_three_hotel_details"><h5>Hotel Facilities</h5></Link>
          
          <br></br>
          <Link to="/edit_and_request_package"><button className="Btn1" type="button"><h6>Edit Package</h6></button></Link>
          <Link to="/request"><button className="Btn1" type="button"><h6>Request new Package</h6></button></Link>
          <button className="Btn1" type="button" onClick={addTravel}><h6>Book Now</h6></button>
          

            </div>
            
            </div>
   
         );
   

}