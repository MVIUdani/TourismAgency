import React from 'react';
import '../../../css/count_pasenger.css';
import { Link } from 'react-router-dom';

function Count_pasenger_two(){

    return(
        <div className="Count">

            

            <form>
    <div className="First">
    

    <label htmlFor=""><h5>Number of passengers hope to travel:</h5></label>
    <input type="int" placeholder="Enter count of passengers" name="count" id="count" required></input>
    
    <label><h5>Number of rooms that you want:</h5></label>
    <input type="int" placeholder="Enter count of rooms" name="room_count" id="room_count" required></input>
    <br></br><br></br>
        <Link to="/payment-first-Ptwo"><button className="Count_btn" type="submit">Submit</button></Link>
        </div>
        

            </form>
           
        </div>


    );

}

export default Count_pasenger_two;