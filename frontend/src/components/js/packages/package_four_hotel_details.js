import React, { Component } from "react";
import '../../css/package_hotel_details.css';
import { Link } from 'react-router-dom';


function Package_four_hotel_details(){

        return(
            <div className="Monitor">
        <div className="Hotel">

            <div className="Hotel_details">
              <div className="Day">
                <h1>Day 01 & Day 02</h1>
                <h4>Hotel Name:The Fortress Resort & spa hotel </h4><br></br>
                <h4> Hotel Description:</h4>
                Experience the crème de la crème of Galle restaurants at The Fortress Resort & Spa. Our dining venues are designed to provide not just satisfaction to your taste buds but your eyes as well; for each restaurant comes with stunning views of the Indian Ocean. Succulent seafood, delicious international favourites, exotic local fare and an exquisite selection of wines are all yours to savour!
                <br></br><br></br>
                <h5>If not available this hotel for relevent booked days. We give the other hotel:<Link to='/other_hotel01'><br></br><h4>Hotel Details</h4></Link></h5>
                
              </div>
            </div>

            <div className="Hotel_images">

            <img className="Hotel_size" src='Package4/h1.jpg' alt="" width="470" height="235"></img>
            <img className="Hotel_size" src='Package4/h5.jpg' alt="" width="220" height="200"></img>
            <img className="Hotel_size" src='Package4/h3.jpg' alt="" width="250" height="220"></img>
            <img className="Hotel_size" src='Package4/h2.jpg' alt="" width="260" height="205"></img>
            <img className="Hotel_size" src='Package4/h4.jpg' alt="" width="200" height="215"></img>

            </div>
            


            </div>   
<hr></hr>

            <div className="Hotel">

        <div className="Hotel_details">
          <div className="Day">
            <h1>Day 03 & Day 04 </h1>
            <h4>Hotel Name: Coral Sands hote</h4><br></br>
            
            Roman Beach offers spacious air-conditioned rooms with free Wi-Fi, high ceilings and views of the sea. Located on Hikkaduwa Beach, it presents an outdoor pool and a private beachfront.
            Located in Hikkaduwa, 1.1 km from Hikkaduwa Beach, Riff Hikkaduwa provides accommodation with a restaurant, free private parking, an outdoor swimming pool and a fitness centre
            <br></br><br></br>
            <h5>If not available this hotel for relevent booked days. We give the other hotel:<Link to='/other_hotel01'><br></br><h4>Hotel Details</h4></Link></h5>
            
          </div>
       
        </div>

        <div className="Hotel_images">

        <img className="Hotel_size" src='Package4/Hi1.jpg' alt="" width="460" height="260"></img>
        <img className="Hotel_size" src='Package4/Hi2.jpg' alt="" width="265" height="250"></img>
        <img className="Hotel_size" src='Package4/Hi3.jpg' alt="" width="230" height="210"></img>

        <img className="Hotel_size" src='Package4/Hi4.jpg' alt="" width="255" height="225"></img>
        <img className="Hotel_size" src='Package4/H6.jpg' alt="" width="240" height="210"></img>

        </div>

        </div>   
<hr></hr>

        <div className="Hotel">

<div className="Hotel_details">
  <div className="Day">
    <h1>Day 05 & Day 06</h1><br></br>
    <h4>Hotel Name:The Heritage Hotel Anuradhapura</h4><br></br>
     Overlooking the pristine southern coast of Sri Lanka, Shangri-La Hambantota is home to an 18-hole championship golf course, which is the only resort course in the country, an expansive spa featuring exceptional Ayurveda treatments, and a unique artisan village that showcases local arts and crafts.
274 rooms, including 20 suites
Sri Lanka’s only 18-hole golf resort course
Shangri-La Cares: Our commitment to your well-being in our care

    <br></br><br></br>
    <h5>If not available this hotel for relevent booked days. We give the other hotel:<Link to='/other_hotel01'><br></br><h4>Hotel Details</h4></Link></h5>
    
  </div>
</div>


<div className="Hotel_images">

<img className="Hotel_size" src='Package4/Ham_1.jpg' alt="" width="380" height="220"></img>
<img className="Hotel_size" src='Package4/Ham_2.jpg' alt="" width="305" height="220"></img>
<img className="Hotel_size" src='Package4/Ham_4.jpg' alt="" width="245" height="200"></img>
<img className="Hotel_size" src='Package4/Ham_5.jpg' alt="" width="250" height="210"></img>
<img className="Hotel_size" src='Package4/Ham_6.jpg' alt="" width="250" height="215"></img>

</div>

</div>   

<hr></hr>





<div className="Hotel">

<div className="Hotel_details">
  <div className="Day">
    <h1>Day 07 & Day 08</h1>
    <h4>Hotel Name: Grand Hotel Nuwara Eliya</h4><br></br>
    <h4> Hotel Description:</h4>
    The Grand Hotel is a four-star boutique hotel[1] in Nuwara Eliya, Sri Lanka, that was built in the style of an Elizabethan-era manor house.[2] The hotel has 154 rooms, including three presidential suites, four junior suites, including a governor's suite that have been maintained to preserve the traditional design.[2] The Grand Hotel has a number of restaurants, bars and a billiards room.
    <br></br><br></br>
    <h5>If not available this hotel for relevent booked days. We give the other hotel:<Link to='/other_hotel01'><br></br><h4>Hotel Details</h4></Link></h5>
    
  </div>
</div>

<div className="Hotel_images">

<img className="Hotel_size" src='hotel/hortan_hotel3.jpg' alt="" width="475" height="245"></img>
<img className="Hotel_size" src='hotel/hortan_hotel2.jpg' alt="" width="260" height="220"></img>
<img className="Hotel_size" src='hotel/hortan_bed.jpg' alt="" width="240" height="205"></img>

<img className="Hotel_size" src='hotel/hortan_food.jpg' alt="" width="250" height="210"></img>
<img className="Hotel_size" src='hotel/hortan_food2.jpg' alt="" width="255" height="215"></img>

</div>

</div>   


<hr></hr>

</div>   

        );


}

export default Package_four_hotel_details;
