import React, { Component } from "react";
import styles from "../../css/hotelowner/hotel_owner_account.css";

function Hotelowner_account_details(){

    return(

        
<div className="Account_update_new">
<form>
<div className={styles.container}>
    <center><h1>Bank Account Details</h1></center>
    <p>Please fill your bank account details.</p>
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

export default Hotelowner_account_details;