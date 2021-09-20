import React, { Component,useState } from "react";
import '../css/delete_page.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Delete_page() {

    return(

        <div className="Delete">{

            <div className="Middle">
                <br></br><br></br>
               <h4> Do you want to delete it?</h4>
            <br></br><br></br><br></br>
                <button className="Tags" type="submit">Yes</button>
                <button className="Tags" type="submit">No</button>

            </div>

        }



        </div>

    );
    
}

export default Delete_page;