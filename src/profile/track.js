import React from 'react'
import { Steps,Row,Col } from 'antd';
import { Card} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Modal, Button, ButtonToolbar } from 'react-bootstrap'


const { Step } = Steps;

class MyVerticallyCenteredModal extends React.Component {
  constructor(props){
    super(props)

    this.state={visible:{display:'none'}}
  }

  Change(e){
    if(e.target.value=='other'){
      this.setState({visible:{displa:'block'}})
    }
    if(e.target.value=='list'){
      this.setState({visible:{display:'none'}})
    }
  }
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
            Cancel Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>why do you want to cancel ?</label>
            <select
            onChange={(e)=> this.Change(e)}
            >
              <option value="list">i don't like it</option>
              <option value="list">i ordered wrong product</option>
              <option value="list">i don't need it anymore</option>
              <option value="other">other</option>
            </select            ><br></br>
            <textarea name="reason" cols="70" style={this.state.visible} placeholder="type something"></textarea>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Link to='/cancel_res'>
          <Button onClick={this.props.onHide} variant="warning">Confirm Cancellation</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    );
  }
}



class Track extends React.Component{
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  render(){
    let modalClose = () => this.setState({ modalShow: false });
  
  return (
    <div>
      <Row>
        {this.props.db.track.map(p=> 
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
      <Steps direction="vertical" current={1} >
    <Step title="Ordered Accepted" description="Your order has been accepted" />
    <Step title="Delivered" description="By Sunday." />
  </Steps>
    </Col>
    <Col span={8}>
    <br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <ButtonToolbar>
        <Link to='/track'>
          <Button
            variant="warning"
            onClick={() => this.setState({ modalShow: true })}
          >
            
        Request Cancellation
          </Button>
          </Link>
  
          <MyVerticallyCenteredModal
            show={this.state.modalShow}
            onHide={modalClose}
          />
        </ButtonToolbar>
      
        </Col>
        </Row>
    </div>
    
  )
  
}}
export default Track;