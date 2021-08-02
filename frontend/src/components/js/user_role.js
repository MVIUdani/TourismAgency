import React, {useState} from "react";

import Customer from './customer/customer_profile';
import Transportowner from './transport_owner_profile.component';

export default function(){
    const [role, setRole] = useState("");

    return(
<div>
    {role == "1" && <Customer /> }
    {role == "4" && <Transportowner />}
</div>
    );
}