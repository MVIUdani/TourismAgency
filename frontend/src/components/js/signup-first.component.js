import React, { Component } from "react";
import '../css/signup.css';

export default class SignUp extends Component {

    render() {
        return (
            <div className="Z">
                <br></br><br></br><br></br>
            <div className="container">
            <div className="hero-box">
                <label htmlFor=""><h2>Select Account Type</h2></label>
                <div className="btn-container">
                    
                    <button onclick="">Customer Account </button>
                    <button onclick="">Hotel Owner Account</button>
                    <button onclick="">Guide Account</button>
                    <button onclick="">Transport Owner Account</button>
                  
        
                </div>
            </div>
        </div>
        </div>

        );
    }
   
}