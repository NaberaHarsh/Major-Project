import React from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import axios from 'axios'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Card } from 'antd';



class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state={};
    this.state.name={};
    this.state.phone={};
    this.state.mail={};
    this.state.pass={};
    
  }

  getValue1(e){
    this.name=e.target.value;  }

  getValue2(f){
    this.phone=f.target.value;  }

    getValue3(g){
      this.mail=g.target.value;  }

      getValue4(h){
        this.pass=h.target.value;  }

        Submit(){
          let obj={name:this.name, phone:this.phone, mail:this.mail, pass:this.pass}
          axios.post('http://localhost:8080/account', obj)
        .then((res)=>{
      console.log(res)
         })
        }


  render(){
    return (
      <div style={{textAlign:"center", fontSize:18}}>
        <center>
        <Card style={{width: "25rem"}}>
                <Card.Title>Signup</Card.Title>
                <br></br>
        <Form>
        <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
  <Form.Control type="Text" placeholder="Enter Name" onChange={(e)=> this.getValue1(e)}/>
  </Form.Group>
  <Form.Group controlId="formBasicName">
  <Form.Label>Phone No.</Form.Label>
  <Form.Control type="text" placeholder="Enter Number" onChange={(f)=> this.getValue2(f)}/>
  </Form.Group>
    <Form.Label>Email address</Form.Label>
    <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" onChange={(g)=> this.getValue3(g)}/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(h)=> this.getValue4(h)}/>
  </Form.Group><br></br>
  <Button variant="warning" type="submit" onClick={()=> this.Submit()}>
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
  }

  export default Signup;