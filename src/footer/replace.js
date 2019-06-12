import React from 'react'
import { Steps,Row,Col } from 'antd';
import { Card} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Modal, Button, ButtonToolbar } from 'react-bootstrap'


const { Step } = Steps;

class ReplaceModal extends React.Component {
  render() {
    
    return (
      
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Replace Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>why do you want to replace ?</label>
            <select>
              <option>different color then i ordered</option>
              <option>this us not what i ordered</option>
              
              <option>product is damaged</option>

              <option value="other">other</option>
            </select><br></br>
            <textarea name="reason" cols="70"></textarea>
            </form>
        </Modal.Body>
        <Modal.Footer>
          
          <Button onClick={this.props.onHide} variant="warning">Replace Product</Button>
          
        </Modal.Footer>
      </Modal>
    );
  }
}



class Replace extends React.Component{
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  render(){
    let modalClose = () => this.setState({ modalShow: false });
  
  return (
    <div>
      <Row>
        {this.props.db.replace.map(p=> 
      <Col span={8}>
        <Card style={{ width: '18rem' , marginTop:20, marginLeft:20  }}>
  <Card.Img variant="top" src={p.image} />
  <Card.Body style={{textAlign:"center"}}>
    <Card.Title >{p.name}</Card.Title>
  </Card.Body>
</Card>
<br></br>
</Col>)}
      
<Col span={8}>
  <br></br><br></br>
      <h5>delivered On:</h5><br></br>
      <p>{Date() }</p>
    </Col>
    <Col span={8}>
    <br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <ButtonToolbar>
          <Button
            variant="warning"
            onClick={() => this.setState({ modalShow: true })}
          >
            <Link to='/replace'>
        Request Replacement</Link>
          </Button>
  
          <ReplaceModal
            show={this.state.modalShow}
            onHide={modalClose}
          />
        </ButtonToolbar>
      
        </Col>
        </Row>
    </div>
    
  )
  
}}
export default Replace;