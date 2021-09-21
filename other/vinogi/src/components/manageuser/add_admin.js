import React, { useState,Component,useEffect } from "react";
import './authentication.css';
import useCreateUser from "../../hooks/useCreateUser";
import { useSnackbar } from 'notistack';
import {useHistory } from 'react-router-dom';
import useUpdateUser from "../../hooks/useUpdateUser";
import useUser from "../../hooks/useUser";

const AddAdmin = ({location: {
    state: {
      data,
    },
  }}) => {
    const history = useHistory();
    const { enqueueSnackbar } = useSnackbar();
    const [nic,setNic]=useState("");
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
    const [address,setAddress]=useState("");
    const {data: userData} = useUser({id:data})
    const { mutateAsync: messageCreater,isError } = useCreateUser();
    const { mutateAsync: userUpdater,isError:isUpdateError } = useUpdateUser(data)

    useEffect(()=>{
        if(userData){
          setNic(userData?.nic);
          setFname(userData?.first_name);
          setLname(userData?.last_name);
          setEmail(userData?.email_address);
          setMobile(userData?.phone_no);
          setAddress(userData?.city)
        }
      },[userData])

    const handleSubmit = async ()=>{
        const newUser={
            user_name : "admin",
            user_password : "admin",
            first_name: fname,
            last_name : lname,
            email_address : email,
            phone_no : mobile,
            nic : nic,
            user_status:"pending",
            city : address,
            role_id : 2,
        }
        try{
            if(data){
                await userUpdater(newUser);
                if(!isUpdateError){
                  enqueueSnackbar('User updated successfully', {
                    variant: 'success',
                    autoHideDuration: 3000,
                  })
                }
            }else{
                await messageCreater(newUser);
                if(!isError){
                  setNic('')
                  setFname('')
                  setLname('')
                  setEmail('')
                  setMobile('')
                  setAddress('')
                  enqueueSnackbar('User created successfully', {
                    variant: 'success',
                    autoHideDuration: 3000,
                  })
                  history.push({
                      state: {
                        
                      },
                      pathname: `/manageuser/view_admin`,
                    });
                }
            }

        }catch(e){
          console.log(e);
        }
      }

        return (
        
        <div className="auth-wrapper">
        <div className="auth-inner">
         
                <h3>ADD USER</h3>


                <div className="form-group">
                    <label>NIC</label> <br></br>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="nic"
                    placeholder="Enter your NIC Number" 
                    value={nic}
                    onChange={(e)=>{
                        setNic(e.target.value)
                    }}
                    />
                </div>


                <div className="form-group">
                    <label>First name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="firstname"
                    placeholder="Enter your first name" 
                    value={fname}
                    onChange={(e)=>{
                        setFname(e.target.value)
                    }}
                    />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" 
                    className="form-control"
                    name="lastname" 
                    placeholder="Enter your last name" 
                    value={lname}
                    onChange={(e)=>{
                        setLname(e.target.value)
                    }}
                    />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" 
                    className="form-control"
                    name="email" 
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    />
                </div>

                <div className="form-group">
                    <label>Mobile number</label>
                    <input type="text" 
                    className="form-control"
                    name="mobille" 
                    placeholder="Enter your mobile number"
                    value={mobile}
                    onChange={(e)=>{
                        setMobile(e.target.value)
                    }} 
                    />
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input type="text" 
                    className="form-control"
                    name="address" 
                    placeholder="Enter your home address"
                    value={address}
                    onChange={(e)=>{
                        setAddress(e.target.value)
                    }}
                    />
                </div>

            
               
<br></br>
                
                <button className="btn btn-primary btn-block" onClick={handleSubmit}>ADD</button>
              
            
            </div>
            </div>
        );
    
}

export default AddAdmin;