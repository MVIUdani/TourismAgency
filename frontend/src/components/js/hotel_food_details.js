import React, { Component,useState } from "react";
import '../css/hotel_food.css'
import Axios from 'axios';
import { Link } from 'react-router-dom';


function Hotel_food(){

    const [brekfast,setBrekfast] = useState("");
    const [lunch,setLunch] = useState("");
    const [dinner,setDinner] = useState("");
    const [juice,setJuice] = useState("");
    const [dessert,setDessert] = useState("");
    const [user_id,setUser_id] = useState("");

    const foodInsert = () => {
        Axios.post('http://localhost:5000/api/food_insert', {
          
        brekfast:brekfast, 
        lunch:lunch,
        dinner:dinner,
        juice:juice,
        dessert:dessert,
        user_id:user_id,
        
        }).then( () => {
  
            alert("successfull food details added");
        });
    };
  

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
    <center><h1>Hotel's Foods Details</h1></center>
    <p>Please fill  hotel's food details.</p>
    <hr></hr>

    <label htmlFor="email"><h6>Breakfast Menue</h6></label>
    <input type="text" placeholder="Enter your hotel's breaksast menus" name="brekfast" id="" required onChange={(e) => {
            setBrekfast(e.target.value);
            
        }}></input>
    
    <label htmlFor="email"><h6>Lunch Menue</h6></label>
    <input type="text" placeholder="Enter your hotel's lunch menus" name="lunch" id="" required onChange={(e) => {
            setLunch(e.target.value);
            
        }}></input>

    <label htmlFor="email"><h6>dinner menue</h6></label>
    <input type="text" placeholder="Enter your hotel's dionner menus" name="dinner" id="" required onChange={(e) => {
            setDinner(e.target.value);
            
        }}></input>

    <label htmlFor="email"><h6>juices</h6></label>
    <input type="text" placeholder="Enter your hotel's breaksast menus" name="juice" id="" required onChange={(e) => {
            setJuice(e.target.value);
            
        }}></input>

    <label htmlFor="email"><h6>Dessert Menue</h6></label>
    <input type="text" placeholder="Enter your hotel's breaksast menus" name="dessert" id="" required onChange={(e) => {
            setDessert(e.target.value);
            
        }}></input>

    <input type="hidden" name="user_id" onChange={(e) => {
            setUser_id(e.target.value);
            
        }}></input>

    <hr></hr>

    <Link to='/hotel_owner_profile'><button onClick={foodInsert} type="submit" className="registerbtn2">Submit</button></Link>
  </div>

</form>




        </div>


    );

}

export default Hotel_food;