import React,{Component} from "react";
import {Alert} from 'react-bootstrap';
import '../../css/authentication.css';

export default class Payment_Success_Alert extends Component{
    render(){
        return (
            <div className="auth-wrapper">
            <div className="auth-inner" style={{background:'#23d004'}}>
                <form>
            <Alert variant="success" >
<Alert.Heading><h2>Payment Successful</h2></Alert.Heading>
<br></br>
<div style={{marginLeft:'100px'}}>
<img src='./success.jpg' width='100' height='100'></img>
</div>
<br></br>
<br></br>
<p><h6>Your payment has been completed succesfully</h6></p>

            
            </Alert>
            </form>
            </div>
            </div>
        );
    }
}