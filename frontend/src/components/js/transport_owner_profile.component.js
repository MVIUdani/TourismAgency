import React, { Component } from "react";
import '../css/transport_owner_profile.css'
import { Link } from 'react-router-dom';


export default class Transportowner extends Component {
    render() {
        return (
  
            <div className="Extra"> 
    
     
            <div className="Impo">
        
                
                 
                    <div className="Data">
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        <br></br><br></br>
                      <h3>First Name:</h3>
                      <h4>Last Name:</h4>
                      <h4>Transport Owner</h4>
                    </div>
        
                    <br></br>
                    <Link to='/manage_vehicle_details'><h5>Vehicle details setting</h5></Link>
                    <h5><a href="#">Edit Profile</a></h5>
                    <h5><a href="#">Vehicle details setting</a></h5>
                    <h5><a href="#">Booked date update</a></h5>
                 
                 
        
            </div>  
           
                <div className="Second">
        
        
                 <div className="Dot">
        
                  <div className='Pic'>
                  <img src='sigiriya.jpg' alt="" width="250" height="242"></img>
                
                  </div>
        
                  <div className='Lot'>
                  <img src='temple.jpg' alt="" width="350" height="242"></img>
                  </div>
         
        
                  
                  </div>
        
                  
        
                 
                  </div> 
            
           
        
            </div>
        
        
        
        


        );
        }
    }