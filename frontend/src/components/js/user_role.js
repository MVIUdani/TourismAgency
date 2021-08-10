import React, {useState,useEffect} from "react";
import Axios from "axios";

import Customer from './customer/customer_profile';
import Transportowner from './transport_owner_profile.component';
import Guide from "./guide/guide";
import Admin from './admin/image_list';

export default function RolePage(){
    const [role, setRole] = useState("");

    Axios.defaults.withCredentials = true;
    useEffect(() => {
      Axios.get("http://localhost:5000/sign-in").then((response) => {
        if (response.data.loggedIn == true) {
          setRole(response.data.user[0].role_id);
        }
      });
    }, []);

    return(
<div>
    {role == "1" && <Customer /> }
    {role == "2" && <Admin />}
    {role == "3" && <Guide />}
    {role == "4" && <Transportowner />}
</div>
    );
}