import React, { Component,useState, useEffect } from "react";
//import '../css/transport_owner_all_details.css'
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Transport_owner_all_details(){

        return(


            <div></div>

        );

}

export default Transport_owner_all_details;


/*
import React, { Component,useState, useEffect } from "react";
import '../css/transport_owner_all_details.css'
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Transport_owner_all_details(){

    const [VehicleList, setVehicleList] = useState([]);

    const ShowDetails = () => {
        Axios.get('http://localhost:3001/api/show').then( (response) => {
    
           setVehicleList(response.data);
        });
    };

    return(

        <div className="Monitor">

            <button onClick={ShowDetails} className= "All_button" type="submit">My Vehicle details</button>
            <button className="All_button" type="submit">My bank account details</button>

        <div className="All_details">

           
         

        {VehicleList.map((val,key) => {

    return (
            <div className="Vehicle_data">
                <br></br>
                <h1>My vehicle details</h1>
                <hr></hr>
                <form>
                <br></br>
                

                <label><h6>Valid date for licence</h6></label>
            <input type="text" value={val.name}></input>



                <label><h6>Valid date for licence</h6></label>
            <input type="int" value={val.seats}></input>

              
                <label><h6>Vehicle Color</h6></label>
            <input type="text" value={val.color}></input>



                <label><h6>Valid date for licence</h6></label>
            <input type="text" value={val.valid_date}></input>

                <label><h6>Charging for a 1 km</h6></label>
            <input type="int" value={val.cost}></input>

                
                <label><h6>plate Number</h6></label>
            <input type="int" value={val.plate_no}></input>

        
            <label><h6>Other details</h6></label>
            <input type="text" value={val.other_details}></input>


                <button className="Use_button">Edit</button>
               
               
                </form>
            </div>
           

    );

}


)};

    <div className="Second1">

        Hi I sm Imesha.
    </div>
 


        </div>

        </div>


    );


}

export default Transport_owner_all_details;

*/