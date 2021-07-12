import React from 'react';
import '../css/count_pasenger.css';
import { Link } from 'react-router-dom';

function Count_pasenger(){

    return(
        <div className="Count">

            

            <form>
    <div className="First">
    

    <label htmlFor=""><h5>Number of pasengers hope to travel</h5></label>
   
    <input type="int" placeholder="Enter Counter" name="count" id="" required></input>
    <br></br><br></br>
        <Link to="/payment-first"><button className="Count_btn" type="submit">Submit</button></Link>
        </div>
        

            </form>
           
        </div>


    );

}

export default Count_pasenger;