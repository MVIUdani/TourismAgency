import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import '../css/package-first.css';


/*export default class Packages extends Component {
    render() {
        return (
    

          <div className="A"> 
     
          <div className="B">
  
          
            <div className='C'>
             <img className="Photo" src='temple.jpg' alt="" width="245" height="210"></img>
              <div className="C-part">
  
              <img className="Photo" src='two.jpg' alt="" width="235" height="220"></img>
              </div>
            </div>
  
            <div className='E'>
            <img className="Photo" src='beach.jpg' alt="" width="240" height="230"></img>
  
              <div className="E-part">
              <img className="Photo" src='Heritage.jpg' alt="" width="230" height="210"></img>
  
              </div>
            </div>
            
            <div className="F">
            <img  className="Photo" src='three.jpg' alt="" width="270" height="230"></img>
  
              <div className="F-part">
              <img className="Photo" src='six.jpg' alt="" width="240" height="210"></img>
  
              </div>
  
  
            </div>
            
          
  
  
           <div className="D">
          
           
      <div className="container">
      <div className="hero-box">
          <label htmlFor=""><h2>Select Packages</h2></label>
          <div className="btn-container">
              
              <button onclick="">Package 01 </button>
              <button onclick="">Package 02</button>
              <button onclick="">Package 03</button>
              <button onclick="">Package 04</button>
              <button onclick="">Package 05</button>
            
  
          </div>
      </div>
  </div>
  
            
            </div>
  
            
  <br></br>
  
      </div>
    
  
      </div>
  
  
  
);
} 
}*/

function Package(){
const history = useHistory();

  function PackageFirst(){
    history.push('/package-details');
  }

  function PackageSecond(){
    history.push('/package_details_two');
  }

  function PackageThird(){
    history.push('/package_details_three');
  }

  function PackageFourth(){
    history.push('/package_details_four');
  }

  function PackageFifth(){
    history.push('/package_details_five');
  }
  
  return(
    

          <div className="A"> 
     
          <div className="B">
  
          
            <div className='C'>
             <img className="Photo" src='temple.jpg' alt="" width="245" height="210"></img>
              <div className="C-part">
  
              <img className="Photo" src='two.jpg' alt="" width="235" height="220"></img>
              </div>
            </div>
  
            <div className='E'>
            <img className="Photo" src='beach.jpg' alt="" width="240" height="230"></img>
  
              <div className="E-part">
              <img className="Photo" src='Heritage.jpg' alt="" width="230" height="210"></img>
  
              </div>
            </div>
            
            <div className="F">
            <img  className="Photo" src='three.jpg' alt="" width="270" height="230"></img>
  
              <div className="F-part">
              <img className="Photo" src='six.jpg' alt="" width="240" height="210"></img>
  
              </div>
  
  
            </div>
            
          
  
  
           <div className="D">
          
           
      <div className="container">
      <div className="hero-box">
          <label htmlFor=""><h2>Select Packages</h2></label>
          <div className="btn-container">
              
              <button onClick={PackageFirst}>Package 01 </button>
              <button onClick={PackageSecond}>Package 02</button>
              <button onClick={PackageThird}>Package 03</button>
              <button onClick={PackageFourth}>Package 04</button>
              <button onClick={PackageFifth}>Package 05</button>
            
  
          </div>
      </div>
  </div>
  
            
            </div>
  
            
  <br></br>
  
      </div>
    
  
      </div>
  
  
  
);

}

export default Package;