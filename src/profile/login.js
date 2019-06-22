import React from 'react'
import {Form, Button,Card} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Icon} from 'antd'
import Signup from './signup'
import NavLink from 'react-bootstrap/NavLink';

class Login extends React.Component{
  

    render(){
        return (
          
            <div style={{textAlign:"center", fontSize:18}}>
              
              <center>
              <Card style={{width: "20rem"}}>
                <Card.Title>Login</Card.Title>
                <br></br>
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
  <p>Or</p>
  <p><pre>Sign in using   <Icon type="google" onClick={()=> {this.props.googleLogin()}} /></pre></p>

  
  <Button variant="warning" type="submit">
    <a href='/'>Submit</a>
  </Button>
  
  
</Form>
<br></br>
<br></br>
</Card>
</center><br></br>
            </div>
            
        )
    }
}



   
export default Login;