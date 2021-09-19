import React, { Component,useState } from "react";
import Axios from "axios";
import '../../css/authentication.css';
import { Formik, Field, Form, ErrorMessage } from "formik";
import Validation from "./UserValidation";
//import validate from './validateInfo';
//import useForm from "./useForm";
import { Link,useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export default function CustomerSignup(){
    
  const history = useHistory();

  Axios.defaults.withCredentials = true;

const onSubmit = (data) => {
  Axios.post("http://localhost:5000/cus-signup",data, {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      address: data.address,
      city_name: data.city_name,
      country: data.country,    
      username: data.username,
      password: data.password,
    }).then((response) => {
      console.log(response);
    //  history.push('/home');
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
                address: '',
                city_name: '',
                country: '',
                username: '',
                password: ''
              }}
              onSubmit={onSubmit}
              validationSchema={Validation}
              >
              
                <Form>
                    <h3>Sign Up</h3>
    
                    <div className="form-group">
                        <label>First name</label>
                        <Field 
                       // type="textfirst"
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
                        <label>Address</label>
                        <Field
                        //type="address"
                        //type="text"
                        autocomplete="off" 
                        className="form-control"
                        name="address"
                        placeholder="Enter your address"
                       
                        />
                        <ErrorMessage name="address" component="div" style={{color:'red'}} />

                      </div>

                      <div className="form-group">
                        <label>City</label>
                        <Field
                        //type="city"
                        //type="text"
                        autocomplete="off" 
                        className="form-control"
                        name="city_name"
                        placeholder="Enter your city name"
                       
                        />
                        <ErrorMessage name="city_name" component="div" style={{color:'red'}} />

                      </div>

                      <div className="form-group">
                        <label>Country</label>
                        <Field
                        //type="country"
                        //type="text"
                        autocomplete="off" 
                        className="form-control"
                        name="country"
                        placeholder="Enter your country name"
                        
                        />
                        <ErrorMessage name="country" component="div" style={{color:'red'}} />

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
                       // type="password"
                        autocomplete="off"  
                        className="form-control"
                        name="password" 
                        placeholder="Enter your password"
                      
                        />
                        <ErrorMessage name="password" component="div" style={{color:'red'}} />
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
    const [addressReg, setAddressReg] = useState("");
    const [city_nameReg, setCity_nameReg] = useState("");
    const [countryReg, setCountryReg] = useState("");

    const history = useHistory();
  
    Axios.defaults.withCredentials = true;
  
    const register = () => {
      Axios.post("http://localhost:5000/cus-signup", {
        firstname: firstnameReg,
        lastname: lastnameReg,
        email: emailReg,
        address: addressReg,
        city_name: city_nameReg,
        country: countryReg,   
        username: usernameReg,
        password: passwordReg,
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
                        <label>Address</label>
                        <input type="address"
                        //type="text"
                        className="form-control"
                        name="address"
                        placeholder="Enter your address"
                        onchange={(e) =>{
                          setAddressReg(e.target.value);
                        }}
                        required
                        />

                      </div>

                      <div className="form-group">
                        <label>City</label>
                        <input type="city"
                        //type="text"
                        className="form-control"
                        name="city"
                        placeholder="Enter your city name"
                        onchange={(e) =>{
                          setCity_nameReg(e.target.value);
                        }}
                        required
                        />

                      </div>

                      <div className="form-group">
                        <label>Country</label>
                        <input type="country"
                        //type="text"
                        className="form-control"
                        name="country"
                        placeholder="Enter your country name"
                        onchange={(e) =>{
                          setCountryReg(e.target.value);
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

/*const CustomerSignup = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate
    ); 
        return (
        <div className="auth-wrapper">
        <div className="auth-inner">
            <form onSubmit={handleSubmit} noValidate>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="firstname"
                    placeholder="Enter your first name" 
                    value={values.firstname}
                    onChange={handleChange}
                    />
                    {errors.firstname && <p>{errors.firstname}</p>}
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" 
                    className="form-control"
                    name="lastname" 
                    placeholder="Enter your last name" 
                    value={values.lastname}
                    onChange={handleChange}
                    />
                    {errors.lastname && <p>{errors.lastname}</p>}
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" 
                    className="form-control"
                    name="email" 
                    placeholder="Enter your email address"
                    value={values.email}
                    onChange={handleChange} 
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div className="form-group">
                    <label>User name</label>
                    <input type="text" 
                    className="form-control"
                    name="username" 
                    placeholder="Enter your user name" 
                    value={values.username}
                    onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                    type="password" 
                    className="form-control"
                    name="password" 
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange} 
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input 
                    type="confirmpassword" 
                    className="form-control"
                    name="confirmpassword" 
                    placeholder="Confirm your password"
                    value={values.confirmpassword}
                    onChange={handleChange} 
                    />
                    {errors.confirmpassword && <p>{errors.confirmpassword}</p>}
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

export default CustomerSignup;*/

// ***This implement according to jwtAuth***

/*const CustomerSignup = ({setAuth})=>{

    const [inputs, setInputs] = useState({
        firstname:"",
        lastname:"",
        email: "",
        username: "",
        password: ""
      });
      const { firstname,lastname,email,username,password} = inputs;

      const onChange = e =>
      setInputs({ ...inputs, [e.target.name]: e.target.value });
  
    const onSubmitForm = async (e) => {
      e.preventDefault();
      try {
        const body = { firstname,lastname,email,username,password };
        const response = await fetch(
          "http://localhost:5000/auth/cus-signup",
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

    return (

<div className="auth-wrapper">
        <div className="auth-inner">
            <form onSubmit={onSubmitForm}>
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

<br></br>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link to='/sign-in'>login?</Link>
                </p>
            </form>
            </div>
            </div>
 
    );
};

export default CustomerSignup;*/

