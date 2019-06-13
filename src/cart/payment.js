import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Payment(){

        return(
            <div>
                <Form>
      <input type="radio"></input>
      <Form.Label>COD</Form.Label><br></br>
      <input type="radio"></input>
      <Form.Label>Paytm</Form.Label><br></br>
      
      <Form.Label>Transiction Id</Form.Label>
      <Form.Control type="Text" placeholder="Enter Transaction Id" />
      
      <br></br>
    <h4>Add Promocode : </h4>
    <Form.Control type="Text" placeholder="Promocode" />
    <Button variant="primary" type="submit">
        Apply
      </Button>
      <br></br><br></br>
    
          
  
      <Link to='/placed'>
      <Button variant="warning" type="submit">
      Confirm Order
      </Button>
      </Link> 
      </Form>
            </div>
        )
    }

export default Payment;