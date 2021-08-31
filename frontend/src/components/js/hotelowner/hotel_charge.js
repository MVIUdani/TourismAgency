import React, { Component } from "react";
import '../../css/hotelowner/hotel_charge.css';
import { Link } from 'react-router-dom';

function Hotel_charge() {

    return(

        <div className="Charge_new">

            
    <form>
    <div className="Charge">
    <h1>Hotel chagers update</h1>
    <p>Please fill your hotel charging details.</p>
    <hr></hr>

    <label htmlFor=""><h6>One day charge for single room</h6></label>
    <input type="text" placeholder="Please enter cost" name="branch_name" id="" required></input>

    <label htmlFor=""><h6>One day charge for double room</h6></label>
    <input type="text" placeholder="Please enter cost" name="bank_name" id="" required></input>


    <label htmlFor=""><h6>One day charge for family room</h6></label>
    <input type="text" placeholder="Please enter cost" name="branch_name" id="" required></input>

    
    <label htmlFor=""><h6>Food charge for one pasenger with one day</h6></label>
    <input type="int" placeholder="Please enter cost" name="branch_name" id="" required></input>

    <input type="hidden" placeholder="" name="user_id" id="" required></input>


    <hr></hr>

    <button type="submit" className="registerbtn">Submit</button>
  </div>

</form>

        </div>

    );
    
}

export default Hotel_charge;