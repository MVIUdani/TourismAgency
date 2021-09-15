import React,{ useState,useEffect } from 'react';
import '../../../css/count_pasenger.css';
import { Link,useHistory } from 'react-router-dom';
import Axios from "axios";

function Count_pasenger_five(){

    const [count, setCount] = useState("");
    const [room_count, setRoom_count] = useState("");

    const history = useHistory();

    const addCount=()=>{
        Axios.post("http://localhost:5000/insertCount_p5",{
            count: count,
            room_count: room_count,
        }).then((response) => {
            console.log(response);
          });
          history.push('/payment-first-Ptwo');
    };

    return(
        <div className="Count">

            

            <form>
    <div className="First">
    

    <label htmlFor=""><h5>Number of passengers hope to travel:</h5></label>
    <input type="int" 
    placeholder="Enter count of passengers" 
    name="count" 
    id="count" 
    onChange={(e) => {
        setCount(e.target.value);
      }}
    required>

    </input>
    
    <label><h5>Number of rooms that you want:</h5></label>
    <input type="int" 
    placeholder="Enter count of rooms" 
    name="room_count" 
    id="room_count"
    onChange={(e) => {
        setRoom_count(e.target.value);
      }} 
    required>

    </input>
    <br></br><br></br>
        
        <button className="Count_btn" type="submit" onClick={addCount}>Submit</button>
        </div>
        

            </form>
           
        </div>


    );

}

export default Count_pasenger_five;