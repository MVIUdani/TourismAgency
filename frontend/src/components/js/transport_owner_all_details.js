import React, { Component,useState, useEffect } from "react";
import '../css/transport_owner_all_details.css'
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Transport_owner_all_details(){

    const [VehicleList, setVehicleList] = useState([]);
    const [Account_detailsList, setAccount_detailsList] = useState([]);
    const [BookedDateList, setBookedDateList] = useState([]);

    const ShowDetails = () => {
        Axios.get('http://localhost:3001/api/show').then( (response) => {
    
           setVehicleList(response.data);
        });
    };

    const ShowBankAccountDetails = () => {
        Axios.get('http://localhost:3001/api/showAccount_details').then( (response) => {
    
           setAccount_detailsList(response.data);
        });
    };

    const ShowBookedDateDetails = () => {
        Axios.get('http://localhost:3001/api/booked_date_details').then( (response) => {
    
            setBookedDateList(response.data);
        });
    };

    return(

        <div className="Monitor">

            <button onClick={ShowDetails} className= "All_button" type="submit">Show My Vehicle Details</button>
            <button onClick={ShowBankAccountDetails} className="All_button" type="submit">Show My bank account details</button>
           
            <button onClick={ShowBookedDateDetails} className= "All_button" type="submit">Show My booked date</button>
        <div className="All_details">
         

        {VehicleList.map((val,key) => {

    return (
            <div className="Vehicle_data">
                <br></br>
                <h1>My vehicle details</h1>
                <hr></hr>
                <form>
                <br></br>
                

                <label><h6>Vehicle type: {val.name}</h6></label>
            <input type="text" ></input>



                <label><h6>Number Of seats: {val.seats}</h6></label>
            <input type="int" ></input>

              
                <label><h6>Vehicle Color: {val.color}</h6></label>
            <input type="text" ></input>



                <label><h6>Valid date for licence: {val.valid_date}</h6></label>
            <input type="text" ></input>

                <label><h6>Charging for a 1 km : {val.cost}</h6></label>
            <input type="int" ></input>

                
                <label><h6>plate Number: {val.plate_no}</h6></label>
            <input type="int" ></input>

        
            <label><h6>Other details: {val.other_details}</h6></label>
            <input type="text" ></input>


                <button className="Use_button">Update</button>
               
               
                </form>
            </div>
           

    );

}


)};

    <div className="Tt">

      
    {Account_detailsList.map((val,key) => {

return (
        <div className="Bank_data">
            <br></br>
            <h1>My Bank Account Details</h1>
            <hr></hr>
            <form>
            <br></br>

            <label><h6>Accounter Name:</h6> <h4>{val.user_name}</h4></label>
        <input type="text" ></input>

            <label><h6>Bank Name :</h6> <h4>{val.bank_name}</h4></label>
        <input type="int" ></input>

          
            <label><h6>Branch Name:</h6><h4>{val.branch_name}</h4></label>
        <input  type="text" ></input>



            <label><h6>Account Number: </h6> <h4>{val.account_no}</h4></label>
        <input type="text" ></input>


            <button className="Use_button">Update</button>
           
           
            </form>
        </div>
       

);

}


)};


    </div>




    <div className="Tt">

      
    {BookedDateList.map((val,key) => {

return (
        <div className="Booked_date">
            <br></br>
            <h1>My Booked Date Details</h1>
            <hr></hr>
            <form>
            <br></br>

            <label><h6>Booked Date:</h6> <h4>{val.bookeddate}</h4></label>
            <input type="date" ></input>



            <button className="Use_button">Update</button>
           
           
            </form>
        </div>
       

);

}


)};


    </div>
 

        </div>

        </div>


    );


}

export default Transport_owner_all_details;