import React, { Component } from "react";
import styles from '../css/edit_and_request_package.css';
import { Link } from 'react-router-dom';

function Edit_and_request_package(){

    return(

<div className="Basic_new" style={{height:'14cm'}}>
<form>
<div className={styles.container}>
    <center><h1>Edit Package</h1></center>
    <p>You can edit our package and request package for your choose </p>
    <hr></hr>

    <label htmlFor="email">
    <h6>Hope to visit places<br></br>(Mention place names if you want to remove in this package)</h6>
    </label>
    <input type="text" placeholder="" name="vehicle_type" id="" required></input>

    <label htmlFor="psw">
    <h6>Day Duration<br></br>(Mention Day Duration if you want)</h6>
    </label>
    <input type="text" placeholder="" name="vehicle_color" id="" required></input>

    <hr></hr>
    <button type="submit" className="registerbtn5">Submit</button>
  </div>

</form>
</div>

    );
}

export default Edit_and_request_package;