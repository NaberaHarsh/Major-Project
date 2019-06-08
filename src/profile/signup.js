import React from 'react'
import {Form, Button} from 'react-bootstrap'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function Signup(){
    return (
      <div>
        <Form>
    <Form.Label>Name</Form.Label>
  <Form.Control type="Text" placeholder="Enter Name" />
  <Form.Label>Phone No.</Form.Label>
  <Form.Control type="number" placeholder="Enter Number" />
    <Form.Label>Email address</Form.Label>
    <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Create New Account
  </Button>
</Form>
<br></br>
<br></br>
      </div>
    )
  }

  export default Signup;