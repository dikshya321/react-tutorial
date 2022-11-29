import React from 'react'
import dikshaa from "../images/dikshaa.jpg";
import "./Home.css";

const Home = () => {
  const dikshaCss ={
    textAlign:"center"
  }
    return(
    <>
    <p style={dikshaCss}>you must watch this flim.</p>
    
 <div className="grid-container">
  
  <div className="header">
  <span class="material-symbols-outlined">menu</span>
         <div className="header-left">
            <span class="material-symbols-outlined">search</span>
          </div>
          <div className="header-right">
          <span class="material-symbols-outlined">notifications</span>
          <span class="material-symbols-outlined">contacts</span>
          <span class="material-symbols-outlined">mail</span>
          </div>
          </div>
   <aside id='sidebar'>Dashboard</aside>
   <div className="main-container"></div>
 </div> 
  
 
    
    
    
    </>
        
   
  );
};

export default Home;
