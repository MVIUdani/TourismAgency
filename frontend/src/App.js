//import logo from './logo.svg';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from './components/js/home/Navbar';

import Login from "./components/js/login.component";
import SignUp from "./components/js/signup-first.component";
import Home from "./components/js/home.component";
import Aboutus from "./components/js/aboutus.component";
import Packages from "./components/js/packages.component";

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
          </Switch>
      
   </Router>
  );
}

export default App;
