import React, { Component } from "react";
import '../css/hotel_food.css'


function Hotel_food(){

    return(

        <div className="Hotel_food">  

            <div className="Food_picture">
            <img className="Pic_size" src='/food/polon_food1.jpg' alt="" width="275" height="250"></img>

            <img className="Pic_size" src='/food/five.jpg' alt="" width="285" height="250"></img>

            <img className="Pic_size" src='/food/anu_food2.jpg' alt="" width="295" height="250"></img>

            <img className="Pic_size" src='/food/six.jpg' alt="" width="275" height="250"></img>

            <img className="Pic_size" src='/food/seven.jpg' alt="" width="295" height="250"></img>

            <img className="Pic_size" src='/food/four.jpg' alt="" width="285" height="250"></img>

            <img className="Pic_size" src='/food/juice1.jpg' alt="" width="280" height="235"></img>

            <img className="Pic_size" src='/food/appa.jpg' alt="" width="280" height="235"></img>

            <img className="Pic_size" src='/food/koththu.jpg' alt="" width="302" height="235"></img>



            </div>

       
<form>
<div className="Food_de">
    <center><h1>Hotel's Food Details</h1></center>
    <p>Please fill  hotel's food details.</p>
    <hr></hr>

    <label htmlFor="email"><h6>Breakfast Menue</h6></label>
    <input type="text" placeholder="Enter your hotel's breaksast menus" name="" id="" required></input>
    
    <label htmlFor="email"><h6>Lunch Menue</h6></label>
    <input type="text" placeholder="Enter your hotel's lunch menus" name="" id="" required></input>

    <label htmlFor="email"><h6>dinner menue</h6></label>
    <input type="text" placeholder="Enter your hotel's dionner menus" name="" id="" required></input>

    <label htmlFor="email"><h6>juices</h6></label>
    <input type="text" placeholder="Enter your hotel's breaksast menus" name="" id="" required></input>

    <label htmlFor="email"><h6>Dessert Menue</h6></label>
    <input type="text" placeholder="Enter your hotel's breaksast menus" name="" id="" required></input>


    <hr></hr>

    <button type="submit" className="registerbtn2">Submit</button>
  </div>

</form>




        </div>


    );

}

export default Hotel_food;