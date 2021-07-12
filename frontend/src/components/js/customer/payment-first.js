import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../css/customer/payment.css'

export default class PaymentFirst extends Component {
    render(){
        return (
          <div className="app-container">
            <div className="row">
              <div className="col">
                <Item name="Package 1" price="50$" img="logo.jpg" />
              </div>
              <div className="col no-gutters">
              <div className="checkout">
              <div className="checkout-container">
                    <h2>Select your Payment Method</h2>
                    <br></br><br></br>
                    <li><Link to='/payment'>Credit or Debit Card</Link></li>
                    <br></br>
                    <li><Link to='/payment-first'>Payhere</Link></li>
                </div>
                </div>
              </div>
            </div>
           </div>
        );
      }
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

    