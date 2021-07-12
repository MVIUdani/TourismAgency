import React, { Component } from "react";
import styles from '../../css/customer/customer_edit_profile.css';

export default class CusEditprofile extends Component {
    render() {
        return (


<div className="Edit">
<form>
<div className={styles.container}>
    <center><h1>Edit Profile Details</h1></center>
    <p>You can edit your profile details.</p>
    <hr></hr>

    <label htmlFor="firstname"><h6>First Name</h6></label>
    <input type="text" placeholder="" name="firstname" id="" required></input>

    <label htmlFor="lastname"><h6>Last Name</h6></label>
    <input type="text" placeholder="" name="lastname" id="" required></input>

    <label htmlFor="email"><h6>Email</h6></label>
    <input type="email" placeholder="" name="email" id="" required></input>

    <label htmlFor="phonenumber"><h6>Contact Number</h6></label>
    <input type="int" placeholder="" name="phonenumber" id="" required></input>

    <hr></hr>


    <button type="submit" className="registerbtn">Submit</button>
  </div>

</form>
</div>


        );

    }
}