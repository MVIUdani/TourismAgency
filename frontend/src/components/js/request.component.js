import React, { useState,useEffect } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/request.css';
import Axios from "axios";

export default function Requests (){

    const [requested_places, setRequested_places] = useState("");
    const [details, setDetails] = useState("");
    const [user_id, setUser_id] = useState("");

    Axios.defaults.withCredentials = true;
  useEffect(() => {
  Axios.get("http://localhost:5000/sign-in").then((response) => {
    if (response.data.loggedIn == true) {
      setUser_id(response.data.user[0].user_id);
    }
  });
}, []); 

    const addRequest=() => {
        Axios.post("http://localhost:5000/createRequest",{
            requested_places: requested_places,
            details: details,
            user_id: {user_id},
        }).then((response) => {
            console.log(response);
          });
    };

    Axios.defaults.withCredentials = true;
    useEffect(() => {
      Axios.get("http://localhost:5000/sign-in").then((response) => {
        if (response.data.loggedIn == true) {
          setUser_id(response.data.user[0].user_id);
        }
    });
  }, []);
    
        return(
         <div className="request-wrapper">
         <div className="request-inner">
           <form>
             <h2>Request Changes Regarding Visted Places</h2> 
             <div className="form-group">
                     <label>Your Request</label>
                     <textarea className="form-control" 
                     placeholder="request your changes" 
                     onChange={(e) => {
                        setRequested_places(e.target.value);
                      }}
                     />
                 </div>
                 <br/>
                 <div className="form-group">
                     <label>Futher Details</label>
                     <textarea className="form-control" 
                     placeholder="Optionally add more details here..." 
                     onChange={(e) => {
                        setDetails(e.target.value);  
                     }}
                     />
                 </div>
                 <br/>
             <button type="submit" className="btn btn-primary btn-block" onClick={addRequest}>Submit</button>
 
           </form>
           </div>
           </div>
        );
 
 }