import React from 'react'
import {Form, Button, Card, CardDeck } from 'react-bootstrap'
import RadioGroup from 'antd/lib/radio/group';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Col, Row } from 'antd';

class Address extends React.Component{

  constructor(props){
  super(props)

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
   


    render(){
        return(
            <div style={{textAlign:"center", fontSize:18}}>
            <center>
            <Card style={{width: "45rem"}}>
                    <Card.Title>Shipping Address</Card.Title>
                    <br></br>
                    <br></br>
                    <input type="radio" onChange={(e)=> this.Change(e)} name="add" value="new" />
                    <label >Enter New Address</label>                   
                    

<Form
style={this.state.visible}
>
    
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
  </Form>
  <input type="radio" name="add" onChange={(e)=> this.Change(e)} value="saved" />
                    <Form.Label>Use Saved Address</Form.Label>
                    <Row>
                    <div style={this.state.saved_visible}>
                    {this.props.db.add.map(p=> <Col span={8}>
                    <Card style={{width:"15rem"}}>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Body>{p.house_no},{p.street}<br></br>{p.city},{p.state}<br></br>{p.pincode}</Card.Body>

                    </Card>
                    </Col>              
                      )}
                      </div>
                      </Row>
  <br></br>

<br></br>
<br></br>


<Link to='/payment'>
  <Button variant="warning" type="submit">
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