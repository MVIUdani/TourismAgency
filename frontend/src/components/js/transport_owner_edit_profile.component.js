import React, { Component } from "react";
import styles from '../css/transport_owner_edit_profile.css';

export default class Editprofile extends Component {
    render() {
        return (


<div className="Edit">
<form>
<div className={styles.container}>
    <center><h1>Edit Profile Details</h1></center>
    <p>You can edit your profile details.</p>
    <hr></hr>

    <label htmlFor="email"><h6>First Name</h6></label>
    <input type="text" value="Sunil" name="vehicle_type" id="" required></input>

    <label htmlFor="psw"><h6>Last Name</h6></label>
    <input type="text" value="Shantha" name="vehicle_color" id="" required></input>

    <label htmlFor="psw-repeat"><h6>Email</h6></label>
    <input type="email" value="sunil9@gmail.com" name="no_of_seats" id="" required></input>

    <label htmlFor="psw-repeat"><h6>Contact Number</h6></label>
    <input type="int" value="0712586973" name="no_of_seats" id="" required></input>

    <hr></hr>


    <button type="submit" className="registerbtn">Submit</button>
  </div>

</form>
</div>


        );

    }
}