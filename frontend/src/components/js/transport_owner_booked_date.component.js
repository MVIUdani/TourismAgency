/*import React, { Component } from "react";
import styles from '../css/transport_owner_booked_date.css';

function Bookeddate() {
    
        return (

<div className="Date_update">
<form>
<div className={styles.container}>
    <center><h1>Booked Date Details</h1></center>
    <p>Please update your hayer booked date details.</p>
    <hr></hr>

    <label htmlFor="email"><h6>Booked Date</h6></label>
    <input type="date" placeholder="Enter the booked date" name="vehicle_type" id="" required></input>

    
    <hr></hr>

    <button type="submit" className="registerbtn">Submit</button>
  </div>

</form>
</div>


        );
        
}

export default Bookeddate;

*/

import React, { Component,useState, useEffect } from "react";
import styles from '../css/transport_owner_booked_date.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Bookeddate() {
  
  const [bookeddate, setBookeddate] = useState("");
  const [user_id, setUser_id] = useState("");
  const [dateList, setDateList] = useState([]);


  const submitDate = () => {
    Axios.post('http://localhost:5000/api/transport_owner_date_insert', {
      
   
   bookeddate: bookeddate,
    user_id:user_id,
    
    }).then( () => {

        alert("successfull bokking date insert");
    });
};

const ShowDate = () => {
  Axios.get('http://localhost:5000/api/date').then( (response) => {

     setDateList(response.data);
  });
};

        return (

<div className="Date_update">
<form>
<div className={styles.container}>
    <center><h1>Booked Date Details</h1></center>
    <p>Please update your hayer booked date details.</p>
    <hr></hr>

    <label htmlFor=""><h6>Booked Date</h6></label>
    <input type="date" placeholder="Enter the booked date" name="bookeddate" id="" required onChange={(e) => {
            setBookeddate(e.target.value);

        }}></input>

  
    <input type="hidden" value="1"  placeholder="" name="user_id" id="" onChange={(e) => {
            setUser_id(e.target.value);

        }}></input>
    
    <hr></hr>

    <Link to="/transport_owner_profile"><button onClick={submitDate} type="submit" className="registerbtn">Submit</button></Link>
  </div>

</form>


</div>


        );
        }

export default Bookeddate;


/*
<button  onClick={ShowDate} type="submit" className="register">Show booked date</button>

{dateList.map((val,key) => {

return (
        <div className="Dataget">
            <br></br>
            
            <h6> Booked Dates: {val.bookeddate}</h6>
            <br></br>

            <button className="Uses_button">Edit</button>
            <button className="Uses_button">Delete</button>
            

        </div>
         
       

);

}


)};

*/




