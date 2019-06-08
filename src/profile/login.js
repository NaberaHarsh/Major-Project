import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Signup from './signup'
import NavLink from 'react-bootstrap/NavLink';

class Login extends React.Component{

    render(){
        return (
          
            <div>
                <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <p style={{textAlign:"center"}}>New User?
  <Link to="/signup/">Create Account</Link>
  </p>
  

  
  <Button variant="primary" type="submit">
    Submit
  </Button>
  
  
</Form>
<br></br>
<br></br>
            </div>
            
        )
    }
}



   
export default Login;