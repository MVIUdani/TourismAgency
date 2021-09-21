import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import  MultipleSelect from './components/multipleselect';

import Guide from './components/guide';

import GuideEditprofile from './components/guide_editprofile';
import GuideBookedDate from './components/guide_updateavailability';
import GuideMessage from './components/guide_message';
import UpdateGuideinfo from './components/guide_updateuserinfo';

import  BookingRequests from './components/booking_requests';
import GuideCurrentBookings from './components/guide_currentbookings';
import GuidePastBookings from './components/guide_pastbookings';
import GuideSignup from './components/guide_signup';

function App() {
  return (
    <div style = {{ maxWidth : "90%", margin : "4rem auto" }}>

    <Router>

      <switch>

        <Route exact path = "/guide" component = {Guide} />
        
        <Route exact path = "/guide_signup" component = {GuideSignup} />
        <Route exact path = "/guide_editprofile" component = {GuideEditprofile} />
        <Route exact path = "/guide_updateavailability" component = {GuideBookedDate} />
        <Route exact path = "/guide_message" component = {GuideMessage} />
        <Route exact path = "/guide_updateuserinfo" component = {UpdateGuideinfo} />

        <Route exact path = "/guide_currentbookings" component = {GuideCurrentBookings} />
        <Route exact path = "/guide_pastbookings" component = {GuidePastBookings} />
        <Route exact path = "/booking_requests" component = {BookingRequests} />

        
      </switch>

    </Router>
   
    </div>
   

  );
}
/*
              <Route exact path = "/multipleselect" component = {MultipleSelect} />
*/
      
export default App;