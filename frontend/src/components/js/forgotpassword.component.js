import React, { Component } from "react";
//import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../css/authentication.css';

export default class Forgot extends Component{
    render(){
        return(
        <div className="auth-wrapper">
        <div className="auth-inner">

        <form>
        <h3>Reset Password</h3>
        <br></br>
        <h6>A reset link will be sent to your inbox!</h6>
        <div className="form-group">
        <label>Email</label>
        <input type="emaila" 
        //type="email"
        className="form-control" 
        placeholder="Enter your email"/>
        </div>
        
            <br/>
            <button type="submit" className="btn btn-primary btn-block">Send Reset Link</button>

        </form>

        </div>
        </div>
        )
    }
} 