import React from 'react'
import {Form, Button } from 'react-bootstrap'
import RadioGroup from 'antd/lib/radio/group';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Address extends React.Component{

    render(){
        return(
            <div>

    

<Form>
    
<input type="radio" id="add" value="new" />
<Form.Label>Enter New Address</Form.Label><br></br>
    <Form.Label>Name</Form.Label>
  <Form.Control type="Text" placeholder="Enter Name" />
  <Form.Label>House NO.</Form.Label>
  <Form.Control type="number" placeholder="Enter  House Number" />
  <Form.Label>Street</Form.Label>
  <Form.Control type="Text" placeholder="Enter Street Name" />
  <Form.Label>City</Form.Label>
  <Form.Control type="Text" placeholder="Enter City Name" />
  <Form.Label>State</Form.Label>
  <Form.Control type="Text" placeholder="Enter State Name" />
    <Form.Label>Email address</Form.Label>
    <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Label>Pincode</Form.Label>
  <Form.Control type="Text" placeholder="Enter Pincode" />
  <Form.Label>Phone NO.</Form.Label>
  <Form.Control type="Text" placeholder="Enter Phone Number" />
    
  </Form.Group>
  <br></br>

  <input type="radio" id="add" value="new" />
<Form.Label>Use Saved Address</Form.Label><br></br>
<br></br>

  
  <Button variant="dark" type="submit">
    <Link to='/payment'>Proceed To Pay</Link>
  </Button>
</Form>


    
            </div>
        )
    }
}
export default Address;