import React, { Component } from "react";
import '../../css/customer/customer_profile.css';
import { Link } from 'react-router-dom';


export default class Customer extends Component {
    render() {
        return (
  
            <div className="Extra"> 
    
     
            <div className="Impo">
        
            <img className="Profile" src='profile.jpg' alt="" width="240" height="235"></img>
                 
                    <div className="Data">
                      <br></br>
                      <h3>First Name:</h3>
                      <h4>Last Name:</h4>
                      <h4>Email:</h4>
                    </div>
        
                    <br></br>
                    
                    <Link to='/edit_profile'><h6>Edit Profile Details</h6></Link>
                    <Link to='/packages'><h6>View Packages</h6></Link>
                    
                 
                 
        
            </div>  
           
                <div className="Second">
        
        
                 
                  <img className="Size" src='/CustomerImages/cus8.jpg' alt="" width="280" height="252"></img>
                
                  <img className="Size" src='/CustomerImages/cus11.jpg' alt="" width="300" height="245"></img>
        
                 
                  <img className="Size" src='/CustomerImages/cus13.jpg' alt="" width="310" height="242"></img>
                
                  <img className="Size" src='/CustomerImages/cus9.jpg' alt="" width="290" height="242"></img>
                  <img className="Size" src='/CustomerImages/cus6.jpg' alt="" width="300" height="242"></img>
                  <img className="Size" src='/CustomerImages/cus10.jpg' alt="" width="310" height="242"></img>
                
                
                
        
                  
                
        
                  
        
                 
                  </div> 
            
           
        
            </div>
        
        
        
        


        );
        }
    }