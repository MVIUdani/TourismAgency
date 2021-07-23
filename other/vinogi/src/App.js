import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { customer_crud }  from './components/customer_crud';
import { add_customer } from './components/add_customer';
import { edit_customer } from './components/edit_customer';

import  CustomerTables  from './components/manageuser/view_customer';
import  TransportTables from './components/manageuser/view_transport';
import  AdminTables from './components/manageuser/view_admin';
import  HotelTables from './components/manageuser/view_hotel';
import  GuideTables from './components/manageuser/view_guide';
import ManageBookings from './components/bookings/manage_bookings';
import RejectedBookings from './components/bookings/rejected_bookings';
import  BookingRequests from './components/booking_requests';
import AdminMenu from './components/admin';
import AdminSignup from './components/admin_signup';
import Guide from './components/guide';
import AdminEditprofile from './components/admin_editprofile';
import GuideEditprofile from './components/guide_editprofile';
import GuideBookedDate from './components/guide_updateavailability';
 import GuideMessage from './components/guide_message';
import UpdateGuideinfo from './components/guide_updateuserinfo';
import 'bootstrap/dist/css/bootstrap.min.css';

import FeedbackTable from './components/view_feedback';
import MessageTable from './components/view_message';

import  AddAdmin from './components/manageuser/add_admin';
import ManageUser from './components/manageuser/manageuser';
import AdminViewPackages from './components/managepackages/manage_package';
import PendingBookings from './components/bookings/pending_bookings';
import AdminAssignGuide from './components/bookings/admin_assignguide';
import BookingHistory from './components/bookings/booking_history';

import GuideCurrentBookings from './components/guide_currentbookings';
import EditAdmin from './components/manageuser/edit_admin';
import CurrentBookings from './components/bookings/current_bookings';
import GuidePastBookings from './components/guide_pastbookings';
// import Navbar from './components/LoggedNavbar'
import ManagePackage from './components/managepackages/manage_package';
//import ViewRatings from './components/view_ratings';
//import  MultipleSelect from './components/multipleselect';
import TitlebarImageList from './components/image_list';

function App() {
  return (
    <div style = {{ maxWidth : "90%", margin : "4rem auto" }}>

    <Router>

      <switch>
        <Route exact path = "/customer_crud" component = {customer_crud} />
        <Route exact path = "/add_customer" component = {add_customer} />
        <Route exact path = "/edit_customer/:id" component = {edit_customer} />
        <Route exact path = "/manageuser/view_customer" component = {CustomerTables} />
        <Route exact path = "/manageuser/view_transport" component = {TransportTables} />
        <Route exact path = "/manageuser/view_admin" component = {AdminTables} />
        <Route exact path = "/manageuser/view_guide" component = {GuideTables} />
        <Route exact path = "/manageuser/view_hotel" component = {HotelTables} />
        <Route exact path = "/admin" component = {AdminMenu} />
        <Route exact path = "/booking_requests" component = {BookingRequests} />
        <Route exact path = "/admin_signup" component = {AdminSignup} />
        
        <Route exact path = "/view_feedback" component = {FeedbackTable} />
        <Route exact path = "/view_message" component = {MessageTable} />
        <Route exact path = "/manageuser/add_admin" component = {AddAdmin} />
        <Route exact path = "/manageuser/manageuser" component = {ManageUser} />
        <Route exact path = "/managepackages/admin_viewpackages" component = {AdminViewPackages} />
        <Route exact path = "/bookings/pending_bookings" component = {PendingBookings} />
        <Route exact path = "/bookings/admin_assignguide" component = {AdminAssignGuide} />
        

        <Route exact path = "/manageuser/edit_admin" component = {EditAdmin} />

             
        <Route exact path = "/admin_editprofile" component = {AdminEditprofile} />
        <Route exact path = "/guide" component = {Guide} />
        <Route exact path = "/guide_editprofile" component = {GuideEditprofile} />
        <Route exact path = "/guide_updateavailability" component = {GuideBookedDate} />
        <Route exact path = "/bookings/current_bookings" component = {CurrentBookings} />
        <Route exact path = "/bookings/booking_history" component = {BookingHistory} />

        <Route exact path = "/guide_currentbookings" component = {GuideCurrentBookings} />
        <Route exact path = "/guide_pastbookings" component = {GuidePastBookings} />

        <Route exact path = "/guide_message" component = {GuideMessage} />
        <Route exact path = "/guide_updateuserinfo" component = {UpdateGuideinfo} />
        <Route exact path = "/manage_bookings" component = {ManageBookings} />
        <Route exact path = "/bookings/rejected_bookings" component = {RejectedBookings} />
        <Route exact path = "/managepackages/manage_package" component = {ManagePackage} />

        <Route exact path = "/image_list" component = {TitlebarImageList} />
      
      </switch>

    </Router>
   
    </div>
   

  );
}
/*

        <Route exact path = "/guide_message" component = {GuideMessage} />
        <Route exact path = "/guide_updateuserinfo" component = {UpdateGuideinfo} />
              <Route exact path = "/multipleselect" component = {MultipleSelect} />
                <Route exact path = "/view_ratings" component = {ViewRatings} />

*/
      
export default App;
