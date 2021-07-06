import React, { Component } from "react";
import '../css/transport-owner-details.css';

export default class Vehicle extends Component {
    render() {
        return (


            <div className="Basic">
<form>
  <div className="container">
    <center><h1>Vehicle Details</h1></center>
    <p>Please fill your vehicle details.</p>
    <hr></hr>

    <label htmlFor="email"><b>Vehicle type</b></label>
    <input type="text" placeholder="Vehicle type" name="vehicle_type" id="" required></input>

    <label htmlFor="psw"><b>Vehicle color</b></label>
    <input type="text" placeholder="Vehicle color" name="vehicle_color" id="" required></input>

    <label htmlFor="psw-repeat"><b>Number of seats</b></label>
    <input type="text" placeholder="Number of seats" name="no_of_seats" id="" required></input>
    <hr></hr>

    <button type="submit" className="registerbtn">Submit</button>
  </div>

</form>
</div>

/*  
          <div className="auth-wrapper">
        <div className="auth-inner">
            <form>
                <h3>Please fill your vehicles details</h3>

                <div className="form-group">
                    <label>Vehicle Type</label>
                    <input type="text" className="form-control" placeholder="vehicle type" />
                </div>

                <div className="form-group">
                    <label>Vehicle color</label>
                    <input type="text" className="form-control" placeholder="Vehicle color" />
                </div>

                <div className="form-group">
                    <label>Number of seats</label>
                    <input type="int" className="form-control" placeholder="Number of seats" />
                </div>
                <hr></hr>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
               
                
            </form>
            </div>
            </div> 
             css file is vehicle.css
            
            
            */

              
);
} 
}