import React from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Payment extends React.Component{
    constructor(props){
        super(props)
      
        this.state = { visible: {display : 'none'}
        }
    }
    Change(e){
        if(e.target.value=='paytm'){
          this.setState({visible:{display:'block'}})
        }
        if(e.target.value=='COD'){
          this.setState({visible:{display:'none'}})
        }
    }

render(){
        return(
            <div style={{textAlign:"center", fontSize:18}}>
            <center>
            <Card style={{width: "25rem"}}>
                    <Card.Title>Payment Details</Card.Title>
                    <br></br>
                <Form>
      <input type="radio" name="pay" value="COD" onChange={(e)=>{this.Change(e)}}  ></input>
      <Form.Label>COD</Form.Label><br></br>
      <input type="radio" name="pay" onChange={(e)=>{this.Change(e)}}  value="paytm"></input>
      <Form.Label>Paytm</Form.Label><br></br>
      <Form.Label style={this.state.visible}>No.  0123456789 </Form.Label>      
      <Form.Label style={this.state.visible}>Transiction Id</Form.Label>
      <Form.Control type="Text" placeholder="Enter Transaction Id" style={this.state.visible} />
      
      <br></br>
    <h4>Add Promocode</h4>
    <Form.Control type="Text" placeholder="Promocode" />
    <br></br>
    <Button variant="primary" type="submit">
        Apply Promocode
      </Button>
      <br></br><br></br>
    
          
  
      <Link to='/placed'>
      <Button variant="warning" type="submit">
      Confirm Order
      </Button>
      
      </Link> 
      
      </Form>
      <br></br>
      </Card>
      </center>
<br></br>
            </div>
        )
    }
}


export default Payment;