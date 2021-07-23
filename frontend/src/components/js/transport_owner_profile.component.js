import React, { Component } from "react";
import '../css/transport_owner_profile.css'
import { Link } from 'react-router-dom';


export default class Transportowner extends Component {
    render() {
        return (
  
            <div className="Extra"> 
    
     
            <div className="Impo">
        
            <img className="Profile" src='profile.jpg' alt="" width="240" height="235"></img>
                 
                    <div className="Data">
                      <br></br>
                      <h3>First Name:</h3>
                      <h4>Last Name:</h4>
                      <h5>Transport Owner</h5>
                    </div>
        
                    <br></br>
                    
                    <Link to='/transport_owner_edit_profile'><h6>Edit Profile Details</h6></Link>
                    <Link to='/manage_vehicle_details'><h6>Vehicle details setting</h6></Link>
                    <Link to='/transport_owner_booked_date'><h6>Booked Date Update</h6></Link>
                    <Link to='/transport_owner_add_account details'><h6>Add account details</h6></Link>
                    <Link to='/hotel_food_details'><h6>Hotel Foods</h6></Link>
                    <Link to='/hotel_room_details'><h6>Hotel Rooms</h6></Link>
                    <Link to='/hotel_owner_add_account_details'><h6>Account</h6></Link>
                 
        
            </div>  
           
                <div className="Second">
        
        
                 
                  <img className="Size" src='tra1.jpg' alt="" width="280" height="252"></img>
                
                  <img className="Size" src='tra5.jpeg' alt="" width="300" height="245"></img>
        
                 
                  <img className="Size" src='tra3.jpg' alt="" width="310" height="242"></img>
                
                  <img className="Size" src='tra6.jpg' alt="" width="290" height="242"></img>
                  <img className="Size" src='tra4.jpg' alt="" width="300" height="242"></img>
                  <img className="Size" src='tra2.jpg' alt="" width="310" height="242"></img>
                
                
                
        
                  
                
        
                  
        
                 
                  </div> 
            
           
        
            </div>
        
        
        
        


        );
        }
    }