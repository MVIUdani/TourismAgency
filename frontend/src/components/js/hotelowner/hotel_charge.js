import React, { Component } from "react";
import '../../css/hotelowner/hotel_charge.css';
import { Link } from 'react-router-dom';

function Hotel_charge() {

    return(

        <div className="Charge_new">

            
    <form>
    <div className="Charge">
    <h1>Hotel chagers update</h1>
    <p>Please fill your hotel details.</p>
    <hr></hr>

    <label htmlFor=""><h6>Account owner's name</h6></label>
    <input type="text" placeholder="Please enter account owner's name" name="branch_name" id="" required></input>

    <label htmlFor=""><h6>Bank Name</h6></label>
    <input type="text" placeholder="Bank Name" name="bank_name" id="" required></input>


    <label htmlFor=""><h6>Branch Name</h6></label>
    <input type="text" placeholder="Branch Name" name="branch_name" id="" required></input>

    
    <label htmlFor=""><h6>Account Number</h6></label>
    <input type="int" placeholder="Please enter your account number" name="branch_name" id="" required></input>

    <input type="hidden" placeholder="" name="user_id" id="" required></input>


    <hr></hr>

    <button type="submit" className="registerbtn">Submit</button>
  </div>

</form>

        </div>

    );
    
}

export default Hotel_charge;