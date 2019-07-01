import React from 'react'
import {Form, Button, Card, CardDeck } from 'react-bootstrap'
import RadioGroup from 'antd/lib/radio/group';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Col, Row } from 'antd';
import axios from 'axios'

class Address extends React.Component{

  constructor(props){
  super(props)
    this.state={};
    this.state.name={};
    this.state.house={};
    this.state.street={};
    this.state.city={};
    this.state.state={};
    this.state.pincode={};
    this.state.mail={};
    this.state.pno={}

  this.state = { visible: {display : 'none'}, saved_visible: {display : 'none'}};
  }
  
Change(e){
if(e.target.value=='new'){
  this.setState({visible:{display:'block'}})
  this.setState({saved_visible:{display:'none'}})
}
if(e.target.value=='saved'){
  this.setState({saved_visible:{display:'block'}})
  this.setState({visible:{display:'none'}})
}

}
   
getValue1(e){
  this.name=e.target.value;
}
getValue2(f){
  this.house=f.target.value;  }

  getValue3(g){
    this.street=g.target.value;  }

    getValue4(h){
      this.city=h.target.value;  }

      getValue5(i){
        this.state=i.target.value;  }

        getValue6(j){
          this.pincode=j.target.value;  }

          getValue7(k){
            this.mail=k.target.value;  }
            
            getValue8(l){
          this.pno=l.target.value;  }

          sendData(p){
            let order={cartinfo:this.props.db.cart , name:p.name, house:p.house, street:p.street, city:p.city, state:p.state, pincode:p.pincode, mail:p.mail, pno:p.pno }
    axios.post(' /showorder',order)
    .then((res)=>{
      console.log(res)
    })

          }

setValue(){
  let obj={name:this.name, house:this.house, street:this.street, city:this.city, state:this.state, pincode:this.pincode, mail:this.mail, pno:this.pno}
  axios.post(' /userAddress', obj)
.then((res)=>{
console.log(res)
 })

 let order={cartinfo:this.props.db.cart , name:this.name, house:this.house, street:this.street, city:this.city, state:this.state, pincode:this.pincode, mail:this.mail, pno:this.pno }
    axios.post(' /showorder',order)
    .then((res)=>{
      console.log(res)
    })
}

    render(){
        return(
            <div style={{textAlign:"center", fontSize:18}}>
            <center>
            <Card style={{width: "45rem"}}>
                    <Card.Title>Shipping Address</Card.Title>
                    <br></br>
                    <br></br>
                    <input type="radio" onChange={(e)=> this.Change(e)} name="add" value="new" /><label required>Enter New Address</label> 
                                      
                    

<Form
style={this.state.visible}
>
    
    <Form.Label>Name</Form.Label>
  <Form.Control type="Text" placeholder="Enter Name" onChange={(e)=> this.getValue1(e)} required/>
  <Form.Label>House NO.</Form.Label>
  <Form.Control type="number" placeholder="Enter  House Number" onChange={(f)=> this.getValue2(f)} required />
  <Form.Label>Street</Form.Label>
  <Form.Control type="Text" placeholder="Enter Street Name" onChange={(g)=> this.getValue3(g)}  required/>
  <Form.Label>City</Form.Label>
  <Form.Control type="Text" placeholder="Enter City Name" onChange={(h)=> this.getValue4(h)} required/>
  <Form.Label>State</Form.Label>
  <Form.Control type="Text" placeholder="Enter State Name"onChange={(i)=> this.getValue5(i)} required/>
    <Form.Label>Email address</Form.Label>
    <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" onChange={(k)=> this.getValue7(k)} required/>
    <Form.Label>Pincode</Form.Label>
  <Form.Control type="Text" placeholder="Enter Pincode" onChange={(j)=> this.getValue6(j)} required/>
  <Form.Label>Phone NO.</Form.Label>
  <Form.Control type="Text" placeholder="Enter Phone Number" maxlength="10" onChange={(l)=> this.getValue8(l)} required />
    
  </Form.Group>
  </Form>
  <input type="radio" name="add" onChange={(e)=> this.Change(e)} value="saved" /><label required>Use Saved Address</label>
                    
                    <Row>
                    <div style={this.state.saved_visible}>
                    {this.props.db.address.map(p=> <Col span={8}>
                    <Card style={{width:"15rem"}} onClick={()=> this.sendData(p)} >
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Body>{p.house},{p.street}<br></br>{p.city},{p.state}<br></br>{p.pincode}</Card.Body>

                    </Card>
                    </Col>              
                      )}
                      </div>
                      </Row>
  <br></br>

<br></br>
<br></br>


 <Link to='/payment'>
  <Button variant="warning" type="submit" onClick={()=> this.setValue()}>
    Proceed To Pay
  </Button>
  </Link>


<br></br>
</Card>
</center>   
<br></br>

            </div>
        )
    }
}
export default Address;