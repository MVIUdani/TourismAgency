import React, { Component } from "react";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../../css/footer static pages/feedback.css';

export default class Feedback extends Component{
   render(){
       return(
        <div className="feedback-wrapper">
        <div className="feedback-inner">
          <form>
            <h2>Give Your Feedback</h2> 
            <div className="form-group">
                    <label>Your Feedback</label>
                    <input type="textfeedback"
                    //type="text" 
                    className="form-control" 
                    placeholder="Summary" />
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