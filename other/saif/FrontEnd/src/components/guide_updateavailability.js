import React, { Component } from "react";
import styles from './booked_date.css';

export default class GuideBookedDate extends Component {
    render() {
        return (
<body>
<div className="Date_update">
<form>
<div className={styles.container}>
    <center><h1>Booked Date Details</h1></center>
    <p>Please update your hayer booked date details.</p>
    <hr></hr>

    <label htmlFor="email"><h6>Booked Date</h6></label>
    <input type="date" placeholder="Enter the booked date" name="bookedDate" id="" required></input>

    
    <hr></hr>

    <button type="submit" className="registerbtn">Submit</button>
  </div>

</form>
</div>
</body>

        );
        }
}