  
import React, {useState,useEffect} from "react";
import '../../css/admin/admin.css';
import { Link } from 'react-router-dom';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Axios from "axios";
//import LoggedNavbar from "./LoggedNavbar";


export default function Admin () {
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
         
            
            <div className="Extra"> 
    
     
            <div className="Impo">
        
            <img className="Profile" src='profile.jpg' alt="" width="240" height="235"></img>
                 
                    <div className="Data">
                      <br></br>
                      <h4>First Name: {firstname}</h4>
                      <h4>Last Name: {lastname}</h4>
                      <h4>Email : {email}</h4>
                      <h5>Admin</h5>
                    </div>
        
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    <Link to='/admin_editprofile'><h6>Edit Profile </h6></Link>
                    
                    <Link to='/managepackages/manage_package'><h6>Manage Packages</h6></Link>
                    <Link to='/bookings/pending_bookings'><h6>Pending Bookings</h6></Link>
                    <Link to='/bookings/current_bookings'><h6>Current Bookings</h6></Link>
                    <Link to='/bookings/rejected_bookings'><h6>Rejected Bookings</h6></Link>
                    <Link to='/bookings/booking_history'><h6>Booking History</h6></Link>
                    <Link to='/view_feedback'><h6>Feedback</h6></Link>
                    <Link to='/view_message'><h6>Messages</h6></Link>
                    <Link to='/view_ratings'><h6>View Ratings</h6></Link>
                    <Link to='/logout'><h6>Logout</h6></Link>
            </div>  
           
                <div className="Second">
        
                <ImageList sx={{ width: 350, height: 350 }} cols={3} rowHeight={350}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format 1x,
                          ${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            );
            </div> 
            
           
        
            </div>
        
        
        
        


        );
        
    }
          
         
const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
   
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    }, 
   
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
   
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];
             