import React, { useState } from "react";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../../css/footer static pages/feedback.css';
import { Formik, Field, Form, ErrorMessage } from "formik";
import Feedback_Validation from "./feedback_Validation";
import { toast } from "react-toastify";
import Axios from "axios";

export default function Feedback(){

  const onSubmit=(data) => {
    Axios.post("http://localhost:5000/createFeedback",data,{
     firstname: data.firstname,
     lastname: data.lastname,
     summary: data.summary,
     description: data.description,
    }).then((response) => {
      console.log(response);
    });
    toast.success("Your Feedback Send Successfully");
  };


  return(
    <div className="feedback-wrapper">
    <div className="feedback-inner">
      <Formik
       initialValues={{
        firstname: '',
        lastname: '',
        summary: '',
        description: ''
       }}
       onSubmit={onSubmit}
       validationSchema={Feedback_Validation}
      >
      <Form>
        <h2>Give Your Feedback</h2> 
       
        <div className="form-group">
         <label>First Name</label>
         <Field
         //type="textfeedback"
                //type="text" 
                className="form-control"
                name="firstname" 
                placeholder="Enter your first name"
               
                />
        </div>
        <ErrorMessage name="firstname" component="div" style={{color:'red'}} />
        <br/>

        <div className="form-group">
        <label>Last Name</label>
        <Field 
        //type="textfeedback"
                //type="text" 
                className="form-control" 
                name="lastname"
                placeholder="Enter your second name" 
               
                />
        </div>
        <ErrorMessage name="lastname" component="div" style={{color:'red'}} />
         <br/>

        <div className="form-group">
                <label>Your Feedback</label>
                <Field 
                //type="textfeedback"
                //type="text" 
                className="form-control" 
                name="summary"
                placeholder="Summary"
               
                
                />
            </div>
            <ErrorMessage name="summary" component="div" style={{color:'red'}} />
            <br/>
            
            <div className="form-group">
                <label>Futher Details</label>
                <Field textarea 
                className="form-control" 
                name="description"
                placeholder="Optionally add more details here..." 
                
                />
            </div>
            <ErrorMessage name="description" component="div" style={{color:'red'}} />
            <br/>

        <button type="submit" className="btn btn-primary btn-block">Submit</button>

      </Form>
      </Formik>
      </div>
      </div>
   );

}

/*export default function Feedback(){
  
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");

  const sentFeedback=() => {
    Axios.post("http://localhost:5000/createFeedback",{
     firstname: firstname,
     lastname: lastname,
     summary: summary,
     description: description,
    }).then((response) => {
      console.log(response);
    });
  };

       return(
        <div className="feedback-wrapper">
        <div className="feedback-inner">
          <form>
            <h2>Give Your Feedback</h2> 
           
            <div className="form-group">
             <label>First Name</label>
             <input type="textfeedback"
                    //type="text" 
                    className="form-control" 
                    placeholder="Enter your first name"
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                    />
            </div>
            <br/>

            <div className="form-group">
            <label>Last Name</label>
            <input type="textfeedback"
                    //type="text" 
                    className="form-control" 
                    placeholder="Enter your second name" 
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                    />
            </div>
             <br/>

            <div className="form-group">
                    <label>Your Feedback</label>
                    <input type="textfeedback"
                    //type="text" 
                    className="form-control" 
                    placeholder="Summary"
                    onChange={(e) => {
                      setSummary(e.target.value);
                    }}
                    />
                </div>
                <br/>
                
                <div className="form-group">
                    <label>Futher Details</label>
                    <textarea className="form-control" 
                    placeholder="Optionally add more details here..." 
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    />
                </div>
                <br/>

            <button type="submit" className="btn btn-primary btn-block" onClick={sentFeedback}>Submit</button>

          </form>
          </div>
          </div>
       );
   
}*/