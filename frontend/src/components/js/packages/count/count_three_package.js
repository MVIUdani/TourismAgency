import React,{ useState,useEffect } from 'react';
import '../../../css/count_pasenger.css';
import { Link,useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import Count_Validation from './count_validation';
import Axios from "axios";

function Count_pasenger_three(){

    const history = useHistory();

    const onSubmit=(data)=>{
        Axios.post("http://localhost:5000/insertCount_p3",data,{
            count: data.count, //3
            room_count: data.room_count, //1
        }).then((response) => {
            console.log(response);
          });
          history.push('/payment-first-Pthree');
    };

    return(
        <div className="Count">
<Formik
initialValues={{
    count:'',
    room_count:''
}}
onSubmit={onSubmit}
validationSchema={Count_Validation}
>
            

            <Form>
    <div className="First">
    

    <label htmlFor=""><h5>Number of passengers hope to travel:</h5></label>
    <Field style={{width:'90%',padding:'12px',margin:' 5px 0 22px 0',display:'inline-block',border:' none',background:'#66606069',marginLeft:'0.2cm'}}
    //type="int"
    autocomplete="off" 
    placeholder="Enter count of passengers" 
    name="count" 
    id="count" 
    />
    <ErrorMessage name="count" component="div" style={{color:'red',marginLeft:'0.2cm'}} />
    
    <label><h5>Number of rooms that you want:</h5></label>
    <Field style={{width:'90%',padding:'12px',margin:' 5px 0 22px 0',display:'inline-block',border:' none',background:'#66606069',marginLeft:'0.2cm'}}
    //type="int"
    autocomplete="off" 
    placeholder="Enter count of rooms" 
    name="room_count" 
    id="room_count" 
    />
    <ErrorMessage name="room_count" component="div" style={{color:'red',marginLeft:'0.2cm'}} />
    <br></br>
        
        <button className="Count_btn" type="submit">Submit</button>
        </div>
        

            </Form>
           </Formik>
        </div>


    );

}

export default Count_pasenger_three;

/*function Count_pasenger_three(){

    const [count, setCount] = useState("");
    const [room_count, setRoom_count] = useState("");

    const history = useHistory();

    const addCount=()=>{
        Axios.post("http://localhost:5000/insertCount_p3",{
            count: count, //3
            room_count: room_count, //1
        }).then((response) => {
            console.log(response);
          });
          history.push('/payment-first-Pthree');
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

export default Count_pasenger_three;*/