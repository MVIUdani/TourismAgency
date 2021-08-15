import React, { Component } from "react";

import '../../css/guide/guide.css';
import { Link } from 'react-router-dom';


export default class Guide extends Component {
    render() {
        return (
          
          <body>
            <div className="Extra"> 
    
     
            <div className="Impo">
        
            <img className="Profile" src='profile.jpg' alt="" width="240" height="235"></img>
                 
                    <div className="Data">
                      <br></br>
                      <h3>First Name:</h3>
                      <h4>Last Name:</h4>
                      <h5>Guide</h5>
                    </div>
        
                    <br></br>
                    
                   

            </div>  
           
                <div className="Second">
        
        
                 
                  <img className="Size" src='/guide/imgg1.jpeg' alt="" width="300" height="252"></img>
                
                  <img className="Size" src='/guide/imgg2.jpeg' alt="" width="300" height="245"></img>
        
                 
                  <img className="Size" src='/guide/imgg3.jpeg' alt="" width="310" height="242"></img>
                
                  <img className="Size" src='/guide/imgg4.jpeg' alt="" width="300" height="242"></img>
                  <img className="Size" src='/guide/imgg5.jpeg' alt="" width="300" height="242"></img>
                  <img className="Size" src='/guide/imgg6.jpeg' alt="" width="310" height="242"></img>
                
                
                
        
                  
                
        
                  
        
                 
                  </div> 
            
           
        
            </div>
        
        
        
        
            </body>

        );
        }
    }

    /*
     <Link to='/guide_editprofile'><h6>Edit Profile </h6></Link>
                    <Link to='/booking_requests'><h6>Booking Requests</h6></Link>
                    <Link to='/guide_currentbookings'><h6>Pending Bookings</h6></Link>
                    <Link to='/guide_pastbookings'><h6>Booking History</h6></Link>
                    <Link to='/guide_updateuserinfo'><h6>Update UserInfo</h6></Link>
                    <Link to='/guide_updateavailability'><h6>Update Availability</h6></Link>
                    <Link to='/guide_message'><h6>Message</h6></Link>
                    <Link to='/logout'><h6>Logout</h6></Link>
    */