import React, { Component } from "react";
import styles from './editprofile.css';

export default class AdminEditprofile extends Component {
    render() {
        return (

<div className="Edit">
<form>
<div className={styles.container}>
    <center><h1>Edit Profile Details</h1></center>
    <p>You can edit your profile details.</p>
    <hr></hr>

    <label htmlFor="email"><h6>First Name</h6></label>
    <input type="text" placeholder="" name="firstname" id="" required></input>

    <label htmlFor="psw"><h6>Last Name</h6></label>
    <input type="text" placeholder="" name="lastname" id="" required></input>

    <label htmlFor="psw-repeat"><h6>Email</h6></label>
    <input type="email" placeholder="" name="email" id="" required></input>

  

    <label htmlFor="psw-repeat"><h6>Mobile Number</h6></label>
    <input type="int" placeholder="" name="mobile" id="" required></input>

    <button type="submit" className="registerbtn" formAction="./admin">Submit</button>
    
    <hr></hr>
   

  
  </div>

</form>
</div>



        );

    }
}


/*  <label htmlFor="psw-repeat"><h6>Address</h6></label>
    <input type="text" placeholder="" name="address" id=""></input>  */