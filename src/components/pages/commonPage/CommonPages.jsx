import React from 'react'
import dikshaa from "../../../images/dikshaa.jpg";
import Button from 'react-bootstrap/esm/Button';
import {NavLink} from 'react-router-dom';

const commonPages = (props) => {
  return (
    <>
       <div class="container">
  <div class="row">
    <div class="col">
      <h1 style={{marginTop:"20%"}}>We started <span style={{color:"green"}}>our Business with</span></h1>
      <h1 style={{color:"red"}}>{props.title}</h1>
     <h2>{props.description}</h2>

      <NavLink to ={props.link}><Button variant="outline-primary">{props.btnHome}</Button>{' '}</NavLink>
    </div>
    <div class="col">
    <img style={{width:"100%",height:"70%"}}src={dikshaa} alt="img"/>
    </div>
  </div>
</div>
    
    </>
  )
}

export default commonPages

