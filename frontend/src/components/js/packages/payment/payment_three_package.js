import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import '../../../css/customer/payment.css';

export default function PaymentFirst_P3() {

    const history = useHistory();

    function Credit(){
      history.push('/payment');
    }

    return (
        <div className="app-container">
          <div className="row">
            <div className="col">
              <Item name="Package 3" price="" img="logo.jpg" />
            </div>
            <div className="col no-gutters">
            <div className="checkout">
            <div className="checkout-container">
                  <h2>Select your Payment Method</h2>
                  <br></br><br></br>
                  <li><button onClick={Credit}>Credit or Debit Card</button></li>
                  <br></br>
                  <li><button onClick="">Payhere</button></li>
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