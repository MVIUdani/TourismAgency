import React, { Component } from "react";
import styles from '../css/transport-owner-details.css';

function Vehicle () {
    
        return (

            
<div className="Basic">
<form>
<div className={styles.container}>
    <center><h1>Vehicle Details</h1></center>
    <p>Please fill your vehicle details.</p>
    <hr></hr>

    <label htmlFor="email"><h6>Vehicle type</h6></label>
    <input type="text" placeholder="Vehicle type" name="vehicle_type" id="" required></input>

    <label htmlFor="psw"><h6>Vehicle color</h6></label>
    <input type="text" placeholder="Vehicle color" name="vehicle_color" id="" required></input>

    <label htmlFor="psw-repeat"><h6>Number of seats</h6></label>
    <input type="text" placeholder="Number of seats" name="no_of_seats" id="" required></input>

    <label htmlFor="psw-repeat"><h6>Valid date for licence</h6></label>
    <input type="date" placeholder="Enter valid date for licence " name="valid_date" id="" required></input>

    <label htmlFor="psw-repeat"><h6>Charging for a 1 km</h6></label>
    <input type="int" placeholder="Charging for a 1 km" name="no_of_seats" id="" required></input>

    <label htmlFor="psw-repeat"><h6>Other facilities of your vehicle</h6></label>
    <input type="text" placeholder="Other facilities" name="no_of_seats" id="" required></input>

    <label htmlFor="psw-repeat"><h6>Plate number of vehicle</h6></label>
    <input type="int" placeholder="Enter your vehicle plate number" name="no_of_seats" id="" required></input>
    
    <hr></hr>

    <button type="submit" className="registerbtn1">Submit</button>
  </div>

</form>
</div>



              
);
} 

export default Vehicle;

/*

import React, { Component,useState, useEffect } from "react";
import styles from '../css/transport-owner-details.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Vehicle() {
  const [name,setName] = useState("");
  const [seats, setSeats] = useState("");
  const [color, setColor] = useState("");
  
  const [valid_date,setValid_date] = useState("");
  const [cost,setCost] = useState("");
  const [plate_no,setPlate_no] = useState("");
  const [other_details,setOther_details] = useState("");

  const [user_id, setUser_id] = useState("");

  const [VehicleList, setVehicleList] = useState([]);

  const submitReview = () => {
      Axios.post('http://localhost:3001/api/insert', {
        
      name:name, 
      seats:seats,
      color:color,
      user_id:user_id,
      valid_date:valid_date,
      cost:cost,
      plate_no:plate_no,
      other_details:other_details,
    
      
      }).then( () => {

          alert("successfull insert");
      });
  };


  const ShowDetails = () => {
    Axios.get('http://localhost:3001/api/show').then( (response) => {

       setVehicleList(response.data);
    });
};

const ShowDelete = () => {
    Axios.delete('http://localhost:3001/api/delete', name);   
    
};
  

        return (

            
<div className="Basic">
<form>
<div className={styles.container}>
    <center><h1>Vehicle Details</h1></center>
    <p>Please fill your vehicle details.</p>
    <hr></hr>

    <label htmlFor=""><h6>Vehicle type</h6></label>
    <input type="text" placeholder="Vehicle type" name="name" id="" required  onChange={(e) => {
            setName(e.target.value);
            
        }}></input>

    <label htmlFor=""><h6>Number of seats</h6></label>
    <input type="int" placeholder="Number of seats" name="seats" id="" required  onChange={(e) => {
            setSeats(e.target.value);

        }}></input>

    <label htmlFor=""><h6>Vehicle color</h6></label>
    <input type="text" placeholder="Vehicle color" name="color" id="" required  onChange={(e) => {
            setColor(e.target.value);

        }}></input>


    <label htmlFor="psw-repeat"><h6>Valid date for licence</h6></label>
    <input type="date" placeholder="Enter valid date for licence " name="valid_date" id="" required  onChange={(e) => {
            setValid_date(e.target.value);

        }}></input>

    <label htmlFor="psw-repeat"><h6>Charging for a 1 km</h6></label>
    <input type="int" placeholder="Charging for a 1 km" name="cost" id="" required  onChange={(e) => {
            setCost(e.target.value);

        }}></input>


    <label htmlFor="psw-repeat"><h6>Plate number of vehicle</h6></label>
    <input type="int" placeholder="Enter your vehicle plate number" name="plate_no" id="" required  onChange={(e) => {
            setPlate_no(e.target.value);

        }}></input>

    <label htmlFor="psw-repeat"><h6>Other facilities of your vehicle</h6></label>
    <input type="text" placeholder="Other facilities" name="other_details" id="" required  onChange={(e) => {
            setOther_details(e.target.value);

        }}></input>


    <input type="hidden" value="1" name="user_id" id=""  onChange={(e) => {
            setUser_id(e.target.value);

        }}></input>

    


    <Link to="/transport_owner_profile"><button onClick={submitReview} type="submit" className="registerbtn">Submit</button></Link>
  </div>

</form>
<br></br>
<button  onClick={ShowDetails} type="submit" className="register">Show my vehicle details</button>

{VehicleList.map((val,key) => {

    return (
            <div className="Dataget">
                <br></br>
                
                <h6> Vehicle Type: {val.name}</h6>
                <br></br>
                <h6> Number Of Seats: {val.seats}</h6>
                <br></br>
                <h6> Color: {val.color}</h6>

                <button className="Use_button">Edit</button>
                <button  onClick={ShowDelete} className="Use_button">Delete</button>
                

            </div>

    );

}


)};


       
</div>


             );
            }
            
            export default Vehicle;
            */