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