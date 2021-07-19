//import logo from './logo.svg';
import React,{useEffect,useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import "react-toastify/dist/ReactToastify.css";
import './App.css';
//import { toast } from "react-toastify";
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from "react-router-dom";

import Navbar from './components/js/home/Navbar';

//import nav bar pages
import Login from "./components/js/login.component";
import Forgot from "./components/js/forgotpassword.component";
import SignUp from "./components/js/signup-first.component";
import Home from "./components/js/home.component";
import Aboutus from "./components/js/aboutus.component";
import Packages from "./components/js/packages.component";

//extra navbar
import LoggedNavbar from './components/js/home/LoggedNavbar';

//import signup pages
import CustomerSignup from './components/js/customer-signup.component';

//import footer static pages
import Contacts from './components/js/home/footer static pages/contactus';
import Feedback from './components/js/home/footer static pages/feedback';

//import card item pages
import Festival from './components/js/home/card item pages/festival';
import Heritage from './components/js/home/card item pages/heritage';
import Pristine from './components/js/home/card item pages/pristine';
import Scenic from './components/js/home/card item pages/scenic';
import Thrills from './components/js/home/card item pages/thrills';
import Wild from './components/js/home/card item pages/wild';

import PaymentFirst from './components/js/customer/payment-first';
import Payment from './components/js/customer/payment';

import Packagedetails from './components/js/package_details';
import Vehicle from './components/js/manage_vehicle_details.component';
import Transportowner from './components/js/transport_owner_profile.component';

import Bookeddate from './components/js/transport_owner_booked_date.component';
import Editprofile from './components/js/transport_owner_edit_profile.component'

import Packagelocation from './components/js/location-of-package.component';
import Package_one_hotel_details from './components/js/hotel-details-of-packageone.component';

import Requests from './components/js/request.component';
import Count_pasenger from './components/js/count_pasenger';

//customer subpages
import Customer from './components/js/customer/customer_profile';
import CusEditprofile from './components/js/customer/customer_edit_profile';

import Transportowner_account_details from './components/js/transport_owner_add_account details';

//toast.configure();

function App() {

  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/auth/verify", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };


  return (<Router>
    <Navbar />
    
      
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route path="/aboutus" component={Aboutus} />
            <Route path="/packages" component={Packages} /> 
            <Route exact path="/sign-in"  render={props =>
                !isAuthenticated ? (
                  <Login {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/cus-profile" />
                )
              } />
            <Route path="/sign-up" component={SignUp} />

            <Route exact path="/cus-signup"  render={props =>
                !isAuthenticated ? (
                  <CustomerSignup {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/sign-in" />
                )
              }/>

            <Route path="/forgot" component={Forgot} />

            <Route path="/cus-signup" component={CustomerSignup}/>

            <Route path="/contactus" component={Contacts} />
            <Route path="/feedback" component={Feedback} />

            <Route path="/festival" component={Festival} />
            <Route path="/heritage" component={Heritage} />
            <Route path="/pristine" component={Pristine} />
            <Route path="/scenic" component={Scenic} />
            <Route path="/thrills" component={Thrills} />
            <Route path="/wild" component={Wild} />

            <Route path="/payment-first" component={PaymentFirst} />
            <Route path="/payment" component={Payment} />
            <Route path="/package-details" component={Packagedetails} />

            
            <Route path="/manage_vehicle_details" component={Vehicle} />
            <Route path="/transport_owner_profile" component={Transportowner} /> 
            <Route path="/transport_owner_booked_date" component={Bookeddate} />
            <Route path="/transport_owner_edit_profile" component={Editprofile} />

            <Route path="/location-of-package" component={Packagelocation} />
            <Route path="/hotel-details-of-packageone" component={Package_one_hotel_details} />
            
            <Route path='/request' component={Requests} />
           <Route path='/count_pasenger' component={Count_pasenger} />

           <Route path='/cus-profile' component={Customer} />
           <Route path='/edit_profile' component={CusEditprofile} />
           <Route path='/transport_owner_add_account details' component={Transportowner_account_details} />

          </Switch>
      
   </Router>
  );
}

export default App;
