import React, { Component } from "react";
import '../css/hotel_room.css'

function Hotel_room(){

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
    <input type="int" placeholder="All rooms count" name="" id="" required></input>

    <label htmlFor="email"><h6>Number of single rooms</h6></label>
    <input type="int" placeholder="Single rooms count" name="" id="" required></input>

    <label htmlFor="email"><h6>Number of double rooms</h6></label>
    <input type="int" placeholder="Double rooms count" name="" id="" required></input>

    <label htmlFor="email"><h6>Number of family rooms</h6></label>
    <input type="int" placeholder="Family rooms count" name="" id="" required></input>


    <hr></hr>

    <button type="submit" className="registerbtn2">Submit</button>
  </div>

</form>




        </div>



    );

}

export default Hotel_room;