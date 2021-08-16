import React, {useState,useEffect} from "react";
import '../../css/customer/customer_profile.css';
import { Link } from 'react-router-dom';
import Axios from "axios";


export default function Customer() {
  const [user_id, setUser_id] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:5000/sign-in").then((response) => {
      if (response.data.loggedIn == true) {
        setUser_id(response.data.user[0].user_id);
        setFirstname(response.data.user[0].first_name);
        setLastname(response.data.user[0].last_name);
        setEmail(response.data.user[0].email_address);
      }
    });
  }, []);  

        return (
  
            <div className="Extra"> 
    
     
            <div className="Impo">
        
            <img className="Profile" src='profile.jpg' alt="" width="240" height="235"></img>
                 
                    <div className="Data">
                      <br></br>
                      <h4>First Name : {firstname}</h4>
                      <h4>Last Name : {lastname}</h4>
                      <h4>Email : {email}</h4>
                    </div>
        
                    <br></br>
                    <br></br>
                    
                    <Link to='/edit_profile'><h6>Edit Profile Details</h6></Link>
                    <Link to='favourites'><h6>View Favourites</h6></Link>
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