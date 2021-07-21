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
           
                <div className="Second1">
        
        
                 
                  <img className="Size" src='/CarouselImages/ca7.jpg' alt="" width="300" height="280"></img>
                
                  <img className="Size" src='/CarouselImages/ca9.jpg' alt="" width="300" height="280"></img>
        
                 
                  <img className="Size" src='/CarouselImages/ca11.jpg' alt="" width="300" height="280"></img>
                
                  <img className="Size" src='/CarouselImages/ca12.jpg' alt="" width="300" height="280"></img>
                  <img className="Size" src='/CarouselImages/ca8.jpg' alt="" width="300" height="280"></img>
                  <img className="Size" src='/CarouselImages/ca10.jpg' alt="" width="300" height="280"></img>
                
                
                
        
                  
                
        
                  
        
                 
                  </div> 
            
           
        
            </div>
        
        
        
        


        );
        }
    }