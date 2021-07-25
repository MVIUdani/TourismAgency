import React, { Component } from "react";
import  styles from '../css/transport_owner_account.css'
import { Link } from 'react-router-dom';

function Transport_banak_account(){

    return(

              
<div className="Account_update">
<form>
<div className={styles.container}>
    <center><h1>Bank Account Details</h1></center>
    <p>Please fill your bank account details.</p>
    <hr></hr>

    <label htmlFor=""><h6>Account owner's name</h6></label>
    <input type="text" placeholder="" name="branch_name" id="" required></input>

    <label htmlFor=""><h6>Bank Name</h6></label>
    <input type="text" placeholder="" name="bank_name" id="" required></input>


    <label htmlFor=""><h6>Branch Name</h6></label>
    <input type="text" placeholder="" name="branch_name" id="" required></input>

    
    <label htmlFor=""><h6>Account Number</h6></label>
    <input type="int" placeholder="" name="branch_name" id="" required></input>

    <input type="hidden" placeholder="" name="user_id" id="" required></input>


    <hr></hr>

    <button type="submit" className="registerbtn">Edit</button>
    

  </div>

</form>
</div>





    );

}

export default Transport_banak_account;