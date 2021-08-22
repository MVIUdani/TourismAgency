import React, {useState,useEffect} from "react";
import '../../css/hotel_owner_profile.css'
import { Link } from 'react-router-dom';
import Axios from "axios";

export default function Hotel_owner(){
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:5000/sign-in").then((response) => {
      if (response.data.loggedIn == true) {
        setFirstname(response.data.user[0].first_name);
        setLastname(response.data.user[0].last_name);
        setEmail(response.data.user[0].email_address);
      }
    });
  }, []); 

        return (
  
            <div className="Extranew"> 
    
     
            <div className="Imponew">
        
            <img className="Profilenew" src='profile.jpg' alt="" width="240" height="235"></img>
                 
                    <div className="Datanew">
                      <br></br>
                      <h4>First Name : {firstname}</h4>
                      <h4>Last Name : {lastname}</h4>
                      <h4>Email : {email}</h4>
                      <h5>Transport Owner</h5>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    <Link to='/hotel_food_details'><h6>Hotel Foods</h6></Link>
                    <Link to='/hotel_room_details'><h6>Hotel Rooms</h6></Link>
                     <Link to='/hotel_owner_add_account_details'><h6>Bank Account</h6></Link>
        
            </div>  
           
                <div className="Secondnew">
        
        
                 
                  <img className="Size4" src='tra1.jpg' alt="" width="280" height="252"></img>
                  <img className="Size4" src='tra5.jpeg' alt="" width="300" height="245"></img> 
                  <img className="Size4" src='tra3.jpg' alt="" width="310" height="242"></img>
                  <img className="Size4" src='tra6.jpg' alt="" width="290" height="242"></img>
                  <img className="Size4" src='tra4.jpg' alt="" width="300" height="242"></img>
                  <img className="Size4" src='tra2.jpg' alt="" width="310" height="242"></img>
                
            
                 
                  </div> 
            
        
            </div>
        
        
      


        );
        
    }


