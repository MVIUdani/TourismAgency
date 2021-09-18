import React, { Component,useState } from "react";
import '../css/hotel_room.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Hotel_room(){

    const [all_room,setAll_room] = useState("");
    const [single,setSingle] = useState("");
    const [double_room,setDouble_room] = useState("");
    const [family,setFamily] = useState("");
    const [user_id,setUser_id] = useState("");

    const roomDetails = () => {
        Axios.post('http://localhost:5000/api/room_insert', {
          
        all_room:all_room,
        single:single,
        double_room:double_room,
        family:family,
        user_id:user_id,
        
        }).then( () => {
  
            alert("successfull room details added");
        });
    };
  

    return(
       
        <div className="Hotel_room">  

            <div className="Room_picture">
            <img className="Pic_size" src='/room/one.jpg' alt="" width="275" height="250"></img>

            <img className="Pic_size" src='/room/two.jpg' alt="" width="285" height="250"></img>

            <img className="Pic_size" src='/room/three.jpg' alt="" width="295" height="250"></img>

            <img className="Pic_size" src='/room/four.jpg' alt="" width="275" height="250"></img>

            <img className="Pic_size" src='/room/five.jpg' alt="" width="295" height="250"></img>

            <img className="Pic_size" src='/room/six.png' alt="" width="285" height="250"></img>

            <img className="Pic_size" src='/room/seven.jpg' alt="" width="280" height="235"></img>

            <img className="Pic_size" src='/room/eig.jpg' alt="" width="280" height="235"></img>

            <img className="Pic_size" src='/room/nin.png' alt="" width="302" height="235"></img>



            </div>

       
<form>
<div className="Room_det">
    <center><h1>Hotel's Rooms Details</h1></center>
    <p>Please fill  hotel's rooms details.</p>
    <hr></hr>

    <label htmlFor="email"><h6>Number of All rooms</h6></label>
    <input type="int" placeholder="All rooms count" name="all_room" id="" required onChange={(e) => {
            setAll_room(e.target.value);
            
        }}></input>

    <label htmlFor="email"><h6>Number of single rooms</h6></label>
    <input type="int" placeholder="Single rooms count" name="single" id="" required onChange={(e) => {
            setSingle(e.target.value);
            
        }}></input>

    <label htmlFor="email"><h6>Number of double rooms</h6></label>
    <input type="int" placeholder="Double rooms count" name="double_room" id="" required onChange={(e) => {
            setDouble_room(e.target.value);
            
        }}></input>

    <label htmlFor="email"><h6>Number of family rooms</h6></label>
    <input type="int" placeholder="Family rooms count" name="family" id="" required onChange={(e) => {
            setFamily(e.target.value);
            
        }}></input>

    <input type="hidden" name="user_id" onChange={(e) => {
            setUser_id(e.target.value);
            
        }}></input>


    <hr></hr>

    <Link to='/hotel_owner_profile'><button onClick={roomDetails} type="submit" className="registerbtn2">Submit</button></Link>
  </div>

</form>




        </div>



    );

}

export default Hotel_room;