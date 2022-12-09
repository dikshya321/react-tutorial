import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';


const MyCard = (props) => {
  return (
  <>
 <div className="col-md-3 col-10 mx-auto">
                <Card >
                  <Card.Img variant="top" src={props.CardImg} alt="MyImg" />
                  <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    
                  <NavLink to ={props.visit}>
                    <Button variant="primary">{props.CardBtn}</Button>
                    </NavLink>
                  </Card.Body>
                </Card>
              </div> 
  
  </>
  )
}

export default MyCard
