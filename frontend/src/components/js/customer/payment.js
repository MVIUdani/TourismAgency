import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../css/customer/payment.css';

export default class Payment extends Component {
    render(){
        return (
          <div className="app-container">
            <div className="row">
              <div className="col">
                <Item name="Package 1" price="450$" img="logo.jpg" />
              </div>
              <div className="col no-gutters">
              <Checkout />
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


const Checkout = (props) => (
 <div className="checkout">
    <div className="checkout-container">
     <h3 className="heading-3">Credit or Debit Card Checkout</h3>
     <Input label="Cardholder's Name" type="text" name="name" />
     <Input label="Card Number" type="number" name="card_number" imgSrc="
     " />
      <div className="row">
        <div className="col">
          <Input label="Expiration Date" type="date" name="exp_date" />
        </div>
        <div className="col">
          <Input label="CVV" type="number" name="cvv" />
        </div>
      </div>
      <Button text="Make Payment" />
    </div>
 </div>
);

const Input = (props) => (
  <div className="input">
    <label>{props.label}</label>
    <div className="input-field">
      <input type={props.type} name={props.name} />
      <img src={props.imgSrc}/>
    </div>
  </div>
);

const Button = (props) => (
  <button className="checkout-btn" type="button">{props.text}</button>
);
