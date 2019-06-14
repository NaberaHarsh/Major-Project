import React from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Card } from 'antd';



function Signup(){
    return (
      <div style={{textAlign:"center", fontSize:18}}>
        <center>
        <Card style={{width: "25rem"}}>
                <Card.Title>Signup</Card.Title>
                <br></br>
        <Form>
        <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
  <Form.Control type="Text" placeholder="Enter Name" />
  </Form.Group>
  <Form.Group controlId="formBasicName">
  <Form.Label>Phone No.</Form.Label>
  <Form.Control type="text" placeholder="Enter Number" />
  </Form.Group>
    <Form.Label>Email address</Form.Label>
    <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group><br></br>
  <Button variant="warning" type="submit">
  <a href="/" >Create New Account</a>
  </Button>
</Form>
<br></br>
<br></br>
</Card>
</center>
<br></br>
      </div>
    )
  }

  export default Signup;