import React from 'react'
import { Steps } from 'antd';
import { Card, Button} from 'react-bootstrap'

const { Step } = Steps;

function Track(){
  return (
    <div>
      <div className="row">
        <div className="col-4">
        <Card style={{ width: '18rem' , marginTop:20  }}>
  <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/817ikEuotyL._UX395_.jpg" />
  <Card.Body style={{textAlign:"center"}}>
    <Card.Title >Jhumki</Card.Title>
  </Card.Body>
</Card>
<br></br>
        </div>
      
<div className="col-4">
  <br></br><br></br>
      <Steps direction="vertical" current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>
    </div>
    <div className="col-4">
    <br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        
      <Button variant="warning">
        Request Cancellation</Button>
    </div>
    </div>
    </div>
    
  )
  
}
export default Track;