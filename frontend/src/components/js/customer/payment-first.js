import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import '../../css/customer/payment.css';
import Axios from "axios";

export default function PaymentFirst() {

  const [user_id, setUser_id] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:5000/sign-in").then((response) => {
      if (response.data.loggedIn == true) {
        setUser_id(response.data.user[0].user_id);
        setFirstname(response.data.user[0].first_name);
        setLastname(response.data.user[0].last_name);
        setEmail(response.data.user[0].email_address);
        setContact(response.data.user[0].phone_no);
        setAddress(response.data.user[0].address);
        setCity(response.data.user[0].city);
        setCountry(response.data.user[0].country);
      }
    });
  }, []); 

  const history = useHistory();

  function Credit(){
    history.push('/payment');
  }

  // Put the payment variables here
  var payment = {
    sandbox: true, // if the account is sandbox or real
    merchant_id: '1218429', // Replace your Merchant ID
    return_url: 'http://sample.com/return',
    cancel_url: 'http://sample.com/cancel',
    notify_url: 'http://sample.com/notify',
    order_id: "45896588",
    items: "Package 1",
    amount: "4500",  // 20000*10
    currency: 'LKR',
    first_name: 'Saman',
    last_name: 'Perera',
    email: 'samanp@gmail.com',
    phone: '0771234567',
    address: 'No.1, Galle Road',
    city: 'Colombo',
    country: 'Sri Lanka',
    //delivery_address: 'No. 46, Galle road, Kalutara South', // optional field
    //delivery_city: 'Kalutara', // optional field
    //delivery_country: 'Sri Lanka', // optional field
    custom_1: '', // optional field
    custom_2: '', // optional field
  };
    
  // Called when user completed the payment. It can be a successful payment or failure
  window.payhere.onCompleted = function onCompleted(orderId) {
    console.log("Payment completed. OrderID:" + orderId);
    //Note: validate the payment and show success or failure page to the customer
  };

  // Called when user closes the payment without completing
  window.payhere.onDismissed = function onDismissed() {
    //Note: Prompt user to pay again or show an error page
    console.log("Payment dismissed");
  };

  // Called when error happens when initializing payment such as invalid parameters
  window.payhere.onError = function onError(error) {
    // Note: show an error page
    console.log("Error:"  + error);
  };

  function pay(){
    window.payhere.startPayment(payment);
  }
        return (
          <div className="app-container">
            <div className="row">
              <div className="col">
                <Item name="Package 1" price="" img="logo.jpg" />
              </div>
              <div className="col no-gutters">
              <div className="checkout">
              <div className="checkout-container">
                   
                    <h5>Full Payment: Rs.200,000</h5>
                    <br></br>
                    <h5>Advance: Rs.</h5>
                    <hr></hr>
                    <h4>Select your Payment Method</h4>
                    <br></br>
                    <li><button onClick={Credit}>Credit or Debit Card</button></li>
                    <br></br>
                    <li><button onClick={pay}>Payhere</button></li>
                </div>
                </div>
              </div>
            </div>
           </div>
        );
      
    }

    const Item = (props) => (
        <div className="item-container">
          <div className="item-image">
            <img src={props.img}/>
            <div className="item-details">
              <h2 className="item-name"> {props.name} </h2>
              <h2 className="item-price"> {props.price} </h2>
            </div>
          </div>
        </div>
      );

    