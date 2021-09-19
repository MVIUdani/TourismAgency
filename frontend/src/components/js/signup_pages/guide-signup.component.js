import React, { Component,useState } from "react";
import Axios from "axios";
import '../../css/authentication.css';
import { Link,useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from 'yup';

export default function Guide_signup(){

  const history = useHistory();

  Axios.defaults.withCredentials = true;

  const onSubmit = (data) => {
    Axios.post("http://localhost:5000/guide-signup", data,{
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,   
      username: data.username,
      password: data.password,
      nic: data.nic,
      birthday: data.birthday,
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
                nic: '',
                birthday: ''
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
                  nic: yup.string().required("Required"),
                  birthday: yup.date().required("Required"),
                  
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

                    <div className="form-group">
                            <label>NIC number</label>
                            <Field 
                            //type="int" 
                            //type="text"
                            autocomplete="off" 
                            className="form-control"
                            name="nic" 
                            placeholder="Enter your NIC number"
                           
                            />
                            <ErrorMessage name="nic" component="div" style={{color:'red'}} />
                        </div>
        
                        <div className="form-group">
                            <label>Birthday</label>
                            <Field 
                            //type="date" 
                            //type="text"
                            autocomplete="off" 
                            className="form-control"
                            name="birthday" 
                            placeholder="Enter your birthday"
                           
                            />
                            <ErrorMessage name="birthday" component="div" style={{color:'red'}} />
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

/*export default function Guide_signup(){
  const [firstnameReg, setFirstnameReg] = useState("");
  const [lastnameReg, setLastnameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState(""); 
  const [nicReg, setNicReg] = useState("");
  const [birthdayReg, setBirthdayReg] = useState(""); 

  const history = useHistory();

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:5000/guide-signup", {
      firstname: firstnameReg,
      lastname: lastnameReg,
      email: emailReg,   
      username: usernameReg,
      password: passwordReg,
      nic: nicReg,
      birthday: birthdayReg,
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

                    <div className="form-group">
                            <label>NIC number</label>
                            <input type="int" 
                            //type="text"
                            className="form-control"
                            name="nic" 
                            placeholder="Enter your NIC number"
                           // value={nic}
                            onChange={(e) => {
                              setNicReg(e.target.value);
                            }}
                            required
                            />
                        </div>
        
                        <div className="form-group">
                            <label>Birthday</label>
                            <input type="date" 
                            //type="text"
                            className="form-control"
                            name="birthday" 
                            placeholder="Enter your birthday"
                           // value={birthday}
                            onChange={(e) => {
                              setBirthdayReg(e.target.value);
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

// ***this is implement according to jwtAuth***
/*const Guide_signup=({setAuth})=>{
   
    const [inputs, setInputs] = useState({
        firstname:"",
        lastname:"",
        email: "",
        username: "",
        password: "",
        nic: "",
        birthday: ""
      });
      const { firstname,lastname,email,username,password,nic,birthday} = inputs;

      const onChange = e =>
      setInputs({ ...inputs, [e.target.name]: e.target.value });
  
    const onSubmitForm = async (e) => {
      e.preventDefault();
      try {
        const body = { firstname,lastname,email,username,password,nic,birthday };
        const response = await fetch(
          "http://localhost:5000/auth/guide-signup",
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
        
                        <div className="form-group">
                            <label>NIC number</label>
                            <input type="int" 
                            //type="text"
                            className="form-control"
                            name="nic" 
                            placeholder="Enter your NIC number"
                            value={nic}
                            onChange={e => onChange(e)} 
                            required
                            />
                        </div>
        
                        <div className="form-group">
                            <label>Birthday</label>
                            <input type="date" 
                            //type="text"
                            className="form-control"
                            name="birthday" 
                            placeholder="Enter your birthday"
                            value={birthday}
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

export default Guide_signup;*/