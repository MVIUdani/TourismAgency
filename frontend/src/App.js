//import logo from './logo.svg';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from './components/js/home/Navbar';

//import nav bar pages
import Login from "./components/js/login.component";
import SignUp from "./components/js/signup-first.component";
import Home from "./components/js/home.component";
import Aboutus from "./components/js/aboutus.component";
import Packages from "./components/js/packages.component";

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

import Payment from './components/js/customer/payment';
import Vehicle from './components/js/manage_vehicle_details.component';
import Transport from './components/js/transport_owner_profile.component';


function App() {
  return (<Router>
    <Navbar />
    
      
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route path="/aboutus" component={Aboutus} />
            <Route path="/packages" component={Packages} /> 
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />

            <Route path="/cus-signup" component={CustomerSignup}/>

            <Route path="/contactus" component={Contacts} />
            <Route path="/feedback" component={Feedback} />

            <Route path="/festival" component={Festival} />
            <Route path="/heritage" component={Heritage} />
            <Route path="/pristine" component={Pristine} />
            <Route path="/scenic" component={Scenic} />
            <Route path="/thrills" component={Thrills} />
            <Route path="/wild" component={Wild} />

            <Route path="/payment" component={Payment} />
            <Route path="/manage_vehicle_details" component={Vehicle} />
            <Route path="/transport_owner_profile" component={Transport} />
          </Switch>
      
   </Router>
  );
}

export default App;
