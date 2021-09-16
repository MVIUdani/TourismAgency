import React, { Component,useState } from "react";
import  styles from '../css/transport_owner_account.css'
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Transportowner_account_details(){

    const [user_name,setUser_name] = useState("");
    const [bank_name,setBank_name] = useState("");
    const [branch_name,setBranch_name] = useState("");
    const [account_no,setAccount_no] = useState("");
    const [user_id, setUser_id] = useState("");

    const passBankDetails = () => {
        Axios.post('http://localhost:5000/api/account_details_insert', {
         
        user_name:user_name, 
        bank_name:bank_name,
        branch_name:branch_name,
        account_no:account_no,
        user_id:user_id,
        
        }).then( () => {
  
            alert("successfull insert your bank details.");
        });
    };
  

    return(

        
<div className="Account_update">
<form>
<div className={styles.container}>
    <center><h1>Bank Account Details</h1></center>
    <p>Please fill your bank account details.</p>
    <hr></hr>

    <label htmlFor=""><h6>Account owner's name</h6></label>
    <input type="text" placeholder="Please enter account owner's name" name="user_name" id="" required onChange={(e) => {
            setUser_name(e.target.value);
            
        }}></input>

    <label htmlFor=""><h6>Bank Name</h6></label>
    <input type="text" placeholder="Bank Name" name="bank_name" id="" required onChange={(e) => {
            setBank_name(e.target.value);
            
        }}></input>


    <label htmlFor=""><h6>Branch Name</h6></label>
    <input type="text" placeholder="Branch Name" name="branch_name" id="" required onChange={(e) => {
            setBranch_name(e.target.value);
            
        }}></input>

    
    <label htmlFor=""><h6>Account Number</h6></label>
    <input type="int" placeholder="Please enter your account number" name="account_no" id="" required onChange={(e) => {
            setAccount_no(e.target.value);
            
        }}></input>

    <input type="hidden" placeholder="" name="user_id" id="" value="3" required onChange={(e) => {
            setUser_id(e.target.value);
            
        }}></input>


    <hr></hr>

    <Link to="/transport_owner_profile"><button onClick={passBankDetails} type="submit" className="registerbtn">Submit</button></Link>
  </div>

</form>
</div>




    );

}

export default Transportowner_account_details;