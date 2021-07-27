import React, { Component,useState } from "react";
import '../css/authentication.css';
import { Link } from "react-router-dom";

function HotelOwner_Signup(){
    return(
        <div className="auth-wrapper">
        <div className="auth-inner">
            <form >
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input 
                    type="textfirst"
                    //type="text" 
                    className="form-control" 
                    name="firstname"
                    placeholder="Enter your first name" 
                    required
                    />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="textfirst"
                    //type="text"  
                    className="form-control"
                    name="lastname" 
                    placeholder="Enter your last name" 
                    required
                    />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="emaila" 
                    //type="email"
                    className="form-control"
                    name="email" 
                    placeholder="Enter your email address"
                    required
                    />
                    
                </div>

                <div className="form-group">
                    <label>User name</label>
                    <input type="textuser" 
                    //type="text"
                    className="form-control"
                    name="username" 
                    placeholder="Enter your user name" 
                    required
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                    type="password" 
                    className="form-control"
                    name="password" 
                    placeholder="Enter your password"
                    required 
                    />
                </div>

                <div className='form-group'>
                    <label>Hotel Name</label>
                    <input
                    type="texthotel"
                    //type="text"
                    className="form-control"
                    name="hotelname"
                    placeholder="Enter your hotel name"
                    required
                    />
                </div>

                <div className='form-group'>
                    <label>Address of hotel</label>
                    <input
                    type="hoteladd"
                      //type="text"
                    className="form-control"
                    name="hoteladd"
                    placeholder="Enter your address of hotel"
                    required
                    />
                    </div>

                <br></br>
                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        <p className="forgot-password text-right">
                            Already registered <Link to='/sign-in'>login?</Link>
                        </p>
                    </form>
                    </div>
                    </div>
         

    );
}

export default HotelOwner_Signup;