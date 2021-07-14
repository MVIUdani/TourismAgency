import React, { Component } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/request.css';

export default class Requests extends Component{
    render(){
        return(
         <div className="request-wrapper">
         <div className="request-inner">
           <form>
             <h2>Request Changes Regarding Visted Places</h2> 
             <div className="form-group">
                     <label>Your Request</label>
                     <textarea className="form-control" placeholder="request your changes" />
                 </div>
                 <br/>
                 <div className="form-group">
                     <label>Futher Details</label>
                     <textarea className="form-control" placeholder="Optionally add more details here..." />
                 </div>
                 <br/>
             <button type="submit" className="btn btn-primary btn-block">Submit</button>
 
           </form>
           </div>
           </div>
        );
    } 
 }