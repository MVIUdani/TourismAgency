import React, { Component,useState, useEffect } from "react";
import '../css/transport_owner_all_details.css'
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Transport_owner_all_details(){

    const [VehicleList, setVehicleList] = useState([]);
    const [Account_detailsList, setAccount_detailsList] = useState([]);
    const [BookedDateList, setBookedDateList] = useState([]);

    const [bookeddate,setBookeddate] = useState("");
    const [user_id,setUser_id] = useState("");

    const ShowDetails = () => {
        Axios.get('http://localhost:5000/api/show').then( (response) => {
    
           setVehicleList(response.data);
        });
    };

    const ShowBankAccountDetails = () => {
        Axios.get('http://localhost:5000/api/showAccount_details').then( (response) => {
    
           setAccount_detailsList(response.data);
        });
    };

    const ShowBookedDateDetails = () => {
        Axios.get('http://localhost:5000/api/booked_date_details').then( (response) => {
    
            setBookedDateList(response.data);
        });
    };

   
const updateNow = () => {
        Axios.put("http://localhost:5000/api/update_date", {bookeddate:bookeddate}).then( (response) => {
    
            alert("Updated");
        });
    };

    const deleteNow = (user_id) => {
        Axios.delete('http://localhost:5000/api/delete_date/3');
    };

   
/*
    function deleteNow(user_id) {
        Axios.get("http://localhost:3001/delete_date", {
            params: {
              user_id:user_id,
              
            },
          })
          .then((response) => {
            alert("Delete sucessfull.");
          });
      }
  */

    return(

        <div className="Monitor">

            <button onClick={ShowDetails} className= "All_button" type="submit">Show My Vehicle Details</button>
            <button onClick={ShowBankAccountDetails} className="All_button" type="submit">Show My bank account details</button>
           
            <button onClick={ShowBookedDateDetails} className= "All_button" type="submit">Show My booked date</button>
        <div className="All_details">
         

        {VehicleList.map((val,key) => {

    return (
        <div className="Tt">
            <div className="Vehicle_data">
                <br></br>
                <h1>My vehicle details</h1>
                <hr></hr>
                <form>
                <br></br>
                
                <label><h6>Vehicle type: </h6><h4>{val.name}</h4></label>
            <input type="text"  placeholder="You can edit your vehicle details"></input>



                <label><h6>Number Of seats: </h6><h4>{val.seats}</h4></label>
            <input type="int" placeholder="You can edit your vehicle details"></input>

              
                <label><h6>Vehicle Color: </h6><h4>{val.color}</h4></label>
            <input type="text" placeholder="You can edit your vehicle details"></input>


                <label><h6>Valid date for licence: </h6><h4>{val.valid_date}</h4></label>
            <input type="text" placeholder="You can edit your vehicle details"></input>

                <label><h6>Charging for a 1 km : </h6><h4>Rs. {val.cost}</h4></label>
            <input type="int" placeholder="You can edit your vehicle details"></input>

                
                <label><h6>plate Number: </h6><h4>{val.plate_no}</h4></label>
            <input type="int" placeholder="You can edit your vehicle details"></input>

        
            <label><h6>Other details: </h6><h4>{val.other_details}</h4></label>
            <input type="text" placeholder="You can edit your vehicle details"></input>


                <button onClick={updateNow} className="Use_button">Update</button>
               
                <button  className="Use_button">Delete</button>
                </form>
            </div>
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
        <input type="text" placeholder="You can edit your bank account details"></input>

            <label><h6>Bank Name :</h6> <h4>{val.bank_name}</h4></label>
        <input type="int"  placeholder="You can edit your bank account details"></input>

          
            <label><h6>Branch Name:</h6><h4>{val.branch_name}</h4></label>
        <input  type="text"  placeholder="You can edit your bank account details"></input>



            <label><h6>Account Number: </h6> <h4>{val.account_no}</h4></label>
        <input type="text"  placeholder="You can edit your bank account details"></input>


            <button className="Use_button">Update</button>
            <button className="Use_button">Delete</button>
           
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
            <input type="date" onChange={(e) => {
            setBookeddate(e.target.value);
            }} ></input>

            <input value={val.user_id} type="hidden"></input>


            <button onClick={updateNow} className="Use_button">Update</button>
            <button  onClick={() => deleteNow(val.user_id)} className="Use_button">Delete</button>
           
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