import React, { Component } from "react";
import styles from '../../css/customer/customer_edit_profile.css';

export default class CusEditprofile extends Component {
    render() {
        return (


<div className="Edit">
<form>
<div className={styles.container}>
    <center><h1>Edit Profile Details</h1></center>
    <p>You can edit your profile details.</p>
    <hr></hr>

    <label htmlFor="firstname"><h6>First Name</h6></label>
    <input type="text" placeholder="" name="firstname" id="" required></input>

    <label htmlFor="lastname"><h6>Last Name</h6></label>
    <input type="text" placeholder="" name="lastname" id="" required></input>

    <label htmlFor="email"><h6>Email</h6></label>
    <input type="email" placeholder="" name="email" id="" required></input>

    <label htmlFor="phonenumber"><h6>Contact Number</h6></label>
    <input type="int" placeholder="" name="phonenumber" id="" required></input>

    <hr></hr>


    <button type="submit" className="registerbtn">Submit</button>
  </div>

</form>
</div>


        );

    }
}

/*import {useState} from "react";
import styles from '../../css/customer/customer_edit_profile.css';
import Axios from "axios";

function CusEditprofile(){
    const [firstname,SetFirstname] = useState("");
    const [lastname,SetLastname] = useState("");
    const [email,SetEmail] = useState("");
    const [contact,SetContact] = useState(0);

    const [newfirstname,SetNewFirstname] = useState("");
    const [newlastname,SetNewLastname] = useState("");
    const [newemail,SetNewEmail] = useState("");
    const [newcontact,SetNewContact] = useState(0);

    const [userList,SetUserList] = useState([]);
    
const updateProfile = (user_id) => {
    Axios.put("http://localhost:5000/userCrud/update",
    {
     firstname: newfirstname, lastname: newlastname, email: newemail, contact: newcontact, user_id: user_id 
    }).then(
        (response)=>{
            SetUserList(
                userList.map((val)=>{
                    return val.user_id == user_id
                    ?{
                        user_id : val.user_id,
                        firstname : newfirstname,
                        lastname : newlastname,
                        email : newemail,
                        contact : newcontact,
                    }
                    :val;
                })
            );
        }
    );
}

{userList.map((val,key) => {
return (


    <div className="Edit">
    <form>
    <div className={styles.container}>
        <center><h1>Edit Profile Details</h1></center>
        <p>You can edit your profile details.</p>
        <hr></hr>
    
        <label htmlFor="firstname"><h6>First Name</h6></label>
        <input type="text" 
        placeholder={val.firstname} 
        name="firstname" 
        id="" 
        required>
        </input>
    
        <label htmlFor="lastname"><h6>Last Name</h6></label>
        <input type="text" 
        placeholder={val.lastname} 
        name="lastname" 
        id="" 
        required>
        </input>
    
        <label htmlFor="email"><h6>Email</h6></label>
        <input type="email" 
        placeholder={val.email} 
        name="email" 
        id="" 
        required>
        </input>
    
        <label htmlFor="phonenumber"><h6>Contact Number</h6></label>
        <input type="int" 
        placeholder={val.contact} 
        name="phonenumber" 
        id="" 
        required>
        </input>
    
        <hr></hr>
    
    
        <button type="submit" className="registerbtn">Submit</button>
      </div>
    
    </form>
    </div>
    
    
            );
})}

}

export default CusEditprofile;*/


