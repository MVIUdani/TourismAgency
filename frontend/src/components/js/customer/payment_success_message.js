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
<hr></hr>

<ul>
<li>We will assign your Guide and Transport Owner withing 48 hours</li>
<li>If you want to cancel booking, you have to contact us within 48 hours</li>
</ul>
            
            </Alert>
            </form>
            </div>
            </div>
        );
    }
}