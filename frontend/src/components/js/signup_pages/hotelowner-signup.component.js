import React, { Component,useState } from "react";
import Axios from "axios";
import '../../css/authentication.css';
import { Link,useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from 'yup';

export default function HotelOwner_Signup(){
  const history = useHistory();

  Axios.defaults.withCredentials = true;

  const onSubmit = (data) => {
    Axios.post("http://localhost:5000/hotelowner-signup", data,{
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,   
      username: data.username,
      password: data.password,
      hotel: data.hotel,
      hotelcontact: data.hotelcontact,
      address: data.address,
    }).then((response) => {
      console.log(response);
    });
    toast.success("Register Successfully");
    history.push('/sign-in');
  };

  return (

    <div className="auth-wrapper">
            <div className="auth-inner">
              <Formik
               initialValues={{
                firstname: '',
                lastname: '',
                email: '',
                username: '',
                password: '',
                hotel: '',
                hotelcontact: '',
                address:''
              }}
              onSubmit={onSubmit}
              validationSchema={
                yup.object().shape({
                  firstname: yup.string().required("Firstname Required"),
                  lastname: yup.string().required("Lastname Required"),
                  email: yup.string().email("Invalid email").required("Email Required"),
                  username:yup.string().required("Username Required"),
                  password: yup
                    .string()
                    .min(2, "Too Short!")
                    .max(50, "Too Long!")
                    .required("Password Required"),
                  hotel:yup.string().required("Required"),
                  hotelcontact:yup.number().required("Required"),
                  address:yup.string(),
                    
                })
              }
              >
                <Form>
                    <h3>Sign Up</h3>
    
                    <div className="form-group">
                        <label>First name</label>
                        <Field
                        //type="textfirst"
                        //type="text"
                        autocomplete="off"  
                        className="form-control" 
                        name="firstname"
                        placeholder="Enter your first name" 
                       
                        />
                        <ErrorMessage name="firstname" component="div" style={{color:'red'}} />
                    </div>
    
                    <div className="form-group">
                        <label>Last name</label>
                        <Field
                        //type="textfirst"
                        //type="text"
                        autocomplete="off"   
                        className="form-control"
                        name="lastname" 
                        placeholder="Enter your last name" 
                       
                        />
                        <ErrorMessage name="lastname" component="div" style={{color:'red'}} />
                    </div>
    
                    <div className="form-group">
                        <label>Email address</label>
                        <Field 
                        //type="emaila" 
                        //type="email"
                        autocomplete="off" 
                        className="form-control"
                        name="email" 
                        placeholder="Enter your email address"
                       
                        />
                        <ErrorMessage name="email" component="div" style={{color:'red'}} />
                    </div>
    
                    <div className="form-group">
                        <label>User name</label>
                        <Field
                        //type="textuser" 
                        //type="text"
                        autocomplete="off" 
                        className="form-control"
                        name="username" 
                        placeholder="Enter your user name" 
                     
                        />
                        <ErrorMessage name="username" component="div" style={{color:'red'}} />
                    </div>
    
                    <div className="form-group">
                        <label>Password</label>
                        <Field
                        //type="password"
                        autocomplete="off"  
                        className="form-control"
                        name="password" 
                        placeholder="Enter your password"
                     
                        />
                        <ErrorMessage name="password" component="div" style={{color:'red'}} />
                    </div>

                    <div className='form-group'>
                    <label>Hotel Name</label>
                    <Field
                    //type="texthotel"
                    //type="text"
                    autocomplete="off" 
                    className="form-control"
                    name="hotel"
                    placeholder="Enter your hotel name"
                   
                    />
                    <ErrorMessage name="hotel" component="div" style={{color:'red'}} />
                </div>

                <div className='form-group'>
                 <label>Hotel Contact No</label>
                 <Field
                 //type="bigint"
                 //type="int"
                 autocomplete="off" 
                 className="form-control"
                 name="hotelcontact"
                 placeholder="Enter your hotel contact number"
                
                 /> 
                 <ErrorMessage name="hotelcontact" component="div" style={{color:'red'}} />  
                </div>

                <div className='form-group'>
                    <label>City of hotel</label>
                    <Field
                    //type="hotelcity"
                    //type="text"
                    autocomplete="off" 
                    className="form-control"
                    name="address"
                    placeholder="Enter city of your hotel"
                  
                    />
                    <ErrorMessage name="address" component="div" style={{color:'red'}} />
                    </div>
    
    <br></br>
                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <Link to='/sign-in'>login?</Link>
                    </p>
                </Form>
                </Formik>
                </div>
                </div>
     
        );
}

/*export default function CustomerSignup(){
  const [firstnameReg, setFirstnameReg] = useState("");
  const [lastnameReg, setLastnameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState(""); 
  const [hotelReg, setHotelReg] = useState("");
  const [hotelcontactReg, setHotelcontactReg] = useState("");
  const [addressReg, setAddressReg] = useState("");

  const history = useHistory();

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:5000/hotelowner-signup", {
      firstname: firstnameReg,
      lastname: lastnameReg,
      email: emailReg,   
      username: usernameReg,
      password: passwordReg,
      hotel: hotelReg,
      hotelcontact: hotelcontactReg,
      address: addressReg,
    }).then((response) => {
      console.log(response);
    });
    history.push('/home');
  };

  return (

    <div className="auth-wrapper">
            <div className="auth-inner">
                <form>
                    <h3>Sign Up</h3>
    
                    <div className="form-group">
                        <label>First name</label>
                        <input 
                        type="textfirst"
                        //type="text" 
                        className="form-control" 
                        name="firstname"
                        placeholder="Enter your first name" 
                       // value={firstname}
                       onChange={(e) => {
                        setFirstnameReg(e.target.value);
                      }}
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
                       // value={lastname}
                        onChange={(e) => {
                            setLastnameReg(e.target.value);
                          }}
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
                       // value={email}
                        onChange={(e) => {
                            setEmailReg(e.target.value);
                          }}
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
                      //  value={username}
                        onChange={(e) => {
                            setUsernameReg(e.target.value);
                          }}
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
                      //  value={password}
                        onChange={(e) => {
                            setPasswordReg(e.target.value);
                          }}
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
                   // value={hotel}
                    onChange={(e) => {
                      setHotelReg(e.target.value);
                    }}
                    required
                    />
                </div>

                <div className='form-group'>
                 <label>Hotel Contact No</label>
                 <input
                 type="bigint"
                 //type="int"
                 className="form-control"
                 name="contact"
                 placeholder="Enter your hotel contact number"
                // value={hotelcontact}
                 onChange={(e) => {
                  setHotelcontactReg(e.target.value);
                }}
                 required
                 />   
                </div>

                <div className='form-group'>
                    <label>City of hotel</label>
                    <input
                    type="hotelcity"
                      //type="text"
                    className="form-control"
                    name="hotelcity"
                    placeholder="Enter city of your hotel"
                  //  value={address}
                    onChange={(e) => {
                      setAddressReg(e.target.value);
                    }}
                    required
                    />
                    </div>
    
    <br></br>
                    <button type="submit" className="btn btn-primary btn-block" onClick={register}>Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <Link to='/sign-in'>login?</Link>
                    </p>
                </form>
                </div>
                </div>
     
        );

}*/

/*const HotelOwner_Signup=({setAuth})=>{

    const [inputs, setInputs] = useState({
        firstname:"",
        lastname:"",
        email: "",
        username: "",
        password: "",
        hotel: "",
        hotelcontact: "",
        address: "",
      });
      const { firstname,lastname,email,username,password,hotel,hotelcontact,address} = inputs;

      const onChange = e =>
      setInputs({ ...inputs, [e.target.name]: e.target.value });
  
    const onSubmitForm = async (e) => {
      e.preventDefault();
      try {
        const body = { firstname,lastname,email,username,password,hotel,hotelcontact,address };
        const response = await fetch(
          "http://localhost:5000/auth/hotelowner-signup",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(body)
          }
        );
        const parseRes = await response.json();
      
        if (parseRes.token) {
          localStorage.setItem("token", parseRes.token);
          setAuth(true);
       //  toast.success("Register Successfully");
        } else {
          setAuth(false);
       //  toast.error(parseRes);
        }
      } catch (err) {
        console.error(err.message);
      }
    };
    
    return(
        <div className="auth-wrapper">
        <div className="auth-inner">
            <form onSubmit={onSubmitForm} >
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input 
                    type="textfirst"
                    //type="text" 
                    className="form-control" 
                    name="firstname"
                    placeholder="Enter your first name"
                    value={firstname}
                    onChange={e => onChange(e)} 
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
                    value={lastname}
                    onChange={e => onChange(e)} 
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
                    value={email}
                    onChange={e => onChange(e)}
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
                    value={username}
                    onChange={e => onChange(e)} 
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
                    value={password}
                    onChange={e => onChange(e)}
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
                    value={hotel}
                    onChange={e => onChange(e)}
                    required
                    />
                </div>

                <div className='form-group'>
                 <label>Hotel Contact No</label>
                 <input
                 type="bigint"
                 //type="int"
                 className="form-control"
                 name="contact"
                 placeholder="Enter your hotel contact number"
                 value={hotelcontact}
                 onChange={e => onChange(e)}
                 required
                 />   
                </div>

                <div className='form-group'>
                    <label>City of hotel</label>
                    <input
                    type="hotelcity"
                      //type="text"
                    className="form-control"
                    name="hotelcity"
                    placeholder="Enter city of your hotel"
                    value={address}
                    onChange={e => onChange(e)}
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

export default HotelOwner_Signup;*/