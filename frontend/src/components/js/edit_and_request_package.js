import React, { Component } from "react";
import styles from '../css/edit_and_request_package.css';
import { Link } from 'react-router-dom';

function Edit_and_request_package(){

    return(

<div className="Basic_new">
<form>
<div className={styles.container}>
    <center><h1>Edit package and request package</h1></center>
    <p>You can edit our package and request package for your choose </p>
    <hr></hr>

    <label htmlFor="email"><h6>Hope to visit places</h6></label>
    <input type="text" placeholder="" name="vehicle_type" id="" required></input>

    <label htmlFor="psw"><h6>Day Duration</h6></label>
    <input type="text" placeholder="" name="vehicle_color" id="" required></input>

    <label htmlFor="psw"><h6>Vehicle type</h6></label>
    <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
   Travelling Bus
  </label>
  </div>

  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
   Travelling Van
  </label>
  </div>

    <hr></hr>

    <button type="submit" className="registerbtn5">Submit</button>
  </div>

</form>
</div>

    );
}

export default Edit_and_request_package;