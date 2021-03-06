import React, { Component,useState,useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Axios from "axios";
import { toast } from "react-toastify";
//import Form from "react-validation/build/form";
//import Input from "react-validation/build/input";
import '../css/authentication.css';
import Login_Validation from './login_validation';

export default function Login(){

  const [loginStatus, setLoginStatus] = useState("");
  const history = useHistory();

  const onSubmit = (data) => {
    Axios.post("http://localhost:5000/sign-in", data,{
      email: data.email,
      password: data.password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].email_address);
      }
    });
    toast.success("Logged in Successfully");
    history.push('/rolepage');
  //history.push('/cus-profile');
  };

  return (
    <div className="auth-wrapper">
        <div className="auth-inner">
          <Formik
          initialValues={{

          }}
          onSubmit={onSubmit}
          validationSchema={Login_Validation}
          >
            <Form>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Email Address</label>
                    <Field
                    //type="emaila" 
                    //type="email"
                    autocomplete="off"
                    className="form-control" 
                    placeholder="Enter your email address"
                    name="email"
                   
                    />
                    <ErrorMessage name="email" component="div" style={{color:'red'}} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <Field
                    //type="password" 
                    autocomplete="off"
                    className="form-control" 
                    placeholder="Enter your password"
                    name="password"
                   
                    />
                    <ErrorMessage name="password" component="div" style={{color:'red'}} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
<br></br>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                Forgot <Link to='/forgot'>password?</Link>
                </p>
            </Form>
            </Formik>
            </div>
            </div>
  ); 


}


/*const required = value => {
    if (!value) {
      return (
        <div>
          This field is required
        </div>
      );
    }
  };

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    
        this.state = {
          username: "",
          password: "",
          loading: false,
          message: ""
        };
      }
    
      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });
      }
    
      onChangePassword(e) {
        this.setState({
          password: e.target.value
        });
      }
    
      handleLogin(e) {
        e.preventDefault();
    
        this.setState({
          message: "",
          loading: true
        });
    
        this.form.validateAll();*/
    
       /* if (this.checkBtn.context._errors.length === 0) {
          AuthService.login(this.state.username, this.state.password).then(
            () => {
              this.props.history.push("/");
              window.location.reload();
            },
            error => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              this.setState({
                loading: false,
                message: resMessage
              });
            }
          );
        } else {
          this.setState({
            loading: false
          });
        }*/
   /*   }


    render() {
        return (
        <div className="auth-wrapper">
        <div className="auth-inner">
            <Form onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}>
                <h3>Login</h3>

                <div className="form-group">
                    <label>User name</label>
                    <Input type="username" 
                    className="form-control" 
                    placeholder="Enter your user name"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required]} 
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <Input type="password" 
                    className="form-control" 
                    placeholder="Enter your password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required]} 
                    />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
<br></br>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <Link to='/forgot'>password?</Link>
                </p>
            </Form>
            </div>
            </div>
        );
    }
}*/

/*
export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [loginStatus, setLoginStatus] = useState("");
  const history = useHistory();

  const login = () => {
    Axios.post("http://localhost:5000/sign-in", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].email_address);
      }
    });
    history.push('/rolepage');
  };

  useEffect(() => {
    Axios.get("http://localhost:5000/sign-in").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].email_address);
      }
    });
  }, []);

  return (
    <div className="auth-wrapper">
        <div className="auth-inner">
            <form>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Email Address</label>
                    <input type="emaila" 
                    //type="email"
                    className="form-control" 
                    placeholder="Enter your email address"
                    name="email"
                   // value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                   // validations={[required]} 
                    required
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" 
                    className="form-control" 
                    placeholder="Enter your password"
                    name="password"
                   // value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  //  validations={[required]} 
                    required
                    />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
<br></br>
                <button type="submit" className="btn btn-primary btn-block" onClick={login}>Submit</button>
                <p className="forgot-password text-right">
                Forgot <Link to='/forgot'>password?</Link>
                </p>
            </form>
            </div>
            </div>
  ); 

}*/

/*const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:5000/auth/sign-in",
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
       // toast.success("Logged in Successfully");
      } else {
        setAuth(false);
       // toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="auth-wrapper">
        <div className="auth-inner">
            <form onSubmit={onSubmitForm}>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Email Address</label>
                    <input type="emaila" 
                    //type="email"
                    className="form-control" 
                    placeholder="Enter your email address"
                    name="email"
                    value={email}
                    onChange={e => onChange(e)}
                   // validations={[required]} 
                    required
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" 
                    className="form-control" 
                    placeholder="Enter your password"
                    name="password"
                    value={password}
                    onChange={e => onChange(e)}
                  //  validations={[required]} 
                    required
                    />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
<br></br>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                Forgot <Link to='/forgot'>password?</Link>
                </p>
            </form>
            </div>
            </div>
  ); 

};

export default Login;*/