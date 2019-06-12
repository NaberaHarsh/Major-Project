import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CardDeck , CardColumns, Dropdown, Nav} from 'react-bootstrap';
import {Card} from 'antd'
import 'antd/dist/antd.css';
import {Row, Icon, Col, Avatar } from 'antd';
import { Button } from 'react-bootstrap';
const { Meta } = Card;

class Earring extends React.Component{

  render(){


        return (
           
            <div>
                <Row>
                    <Col span={6}>
                        <h3>Apply Filters</h3>
                        <br></br>
                        <ul type="none">
                            <li>Price</li>
                            <br></br>
                            <li>Jewellery Type</li>
                            <br></br>
                            <li>Ocassion</li>
                        </ul>
                        </Col>
                    
                    <Col span={18}>
                    <h3 style={{textAlign:"right", paddingRight:100}}>Sort</h3>
                        <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link>Best Seller</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>New Arrivals</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Dropdown>
  <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
    Price
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Low to High</Dropdown.Item>
    <Dropdown.Item href="#/action-2">High to Low</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
    </Nav.Item>
  </Nav>

  <Link to='/item1'>
      <Row> 
        {this.props.db.products.map(p=> <Col span={8}>
        <Card
      style={{ width: 250 }}
      cover={
        <img
          alt="example"
          src={p.image}
        />
      }
      actions={[<Button variant="warning"><Link to='/cart'>Add To Cart</Link></Button>]}
    >
      <center>
          <Meta
        title={p.name}
        description={p.Price}
      />
      
      </center>
    </Card>
    </Col>)}
      </Row>
        </Link>
                        
                        {/* <CardDeck>
                        <Card style={{ width: '18rem',  marginTop:20 , marginLeft:20} }>
                <Card.Img variant="top" src="https://5.imimg.com/data5/CH/OU/MY-43025329/ladies-fancy-earring-500x500.jpg" />
  <Card.Body style={{textAlign:"center"}}>
    <Card.Title>
    <Link to='/item1'>AD Earring</Link> </Card.Title>
    <Card.Text>
      Rs 799/- only
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem',  marginTop:20 , marginLeft:20} }>
                <Card.Img variant="top" src="https://5.imimg.com/data5/CH/OU/MY-43025329/ladies-fancy-earring-500x500.jpg" />
  <Card.Body style={{textAlign:"center"}}>
    <Card.Title>
    AD Earring </Card.Title>
    <Card.Text>
      Rs 799/- only
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem',  marginTop:20 , marginLeft:20} }>
                <Card.Img variant="top" src="https://5.imimg.com/data5/CH/OU/MY-43025329/ladies-fancy-earring-500x500.jpg" />
  <Card.Body style={{textAlign:"center"}}>
    <Card.Title>
    AD Earring </Card.Title>
    <Card.Text>
      Rs 799/- only
    </Card.Text>
  </Card.Body>
</Card>
</CardDeck>
<CardDeck>
                        <Card style={{ width: '18rem',  marginTop:20 , marginLeft:20} }>
                <Card.Img variant="top" src="https://5.imimg.com/data5/CH/OU/MY-43025329/ladies-fancy-earring-500x500.jpg" />
  <Card.Body style={{textAlign:"center"}}>
    <Card.Title>
    AD Earring </Card.Title>
    <Card.Text>
      Rs 799/- only
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem',  marginTop:20 , marginLeft:20} }>
                <Card.Img variant="top" src="https://5.imimg.com/data5/CH/OU/MY-43025329/ladies-fancy-earring-500x500.jpg" />
  <Card.Body style={{textAlign:"center"}}>
    <Card.Title>
    AD Earring </Card.Title>
    <Card.Text>
      Rs 799/- only
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem',  marginTop:20 , marginLeft:20} }>
                <Card.Img variant="top" src="https://5.imimg.com/data5/CH/OU/MY-43025329/ladies-fancy-earring-500x500.jpg" />
  <Card.Body style={{textAlign:"center"}}>
    <Card.Title>
    AD Earring </Card.Title>
    <Card.Text>
      Rs 799/- only
    </Card.Text>
  </Card.Body>
</Card>
</CardDeck>
<CardDeck>
                        <Card style={{ width: '18rem',  marginTop:20 , marginLeft:20} }>
                <Card.Img variant="top" src="https://5.imimg.com/data5/CH/OU/MY-43025329/ladies-fancy-earring-500x500.jpg" />
  <Card.Body style={{textAlign:"center"}}>
    <Card.Title>
    AD Earring </Card.Title>
    <Card.Text>
      Rs 799/- only
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem',  marginTop:20 , marginLeft:20} }>
                <Card.Img variant="top" src="https://5.imimg.com/data5/CH/OU/MY-43025329/ladies-fancy-earring-500x500.jpg" />
  <Card.Body style={{textAlign:"center"}}>
    <Card.Title>
    AD Earring </Card.Title>
    <Card.Text>
      Rs 799/- only
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem',  marginTop:20 , marginLeft:20} }>
                <Card.Img variant="top" src="https://5.imimg.com/data5/CH/OU/MY-43025329/ladies-fancy-earring-500x500.jpg" />
  <Card.Body style={{textAlign:"center"}}>
    <Card.Title>
    AD Earring </Card.Title>
    <Card.Text>
      Rs 799/- only
    </Card.Text>
  </Card.Body>
</Card>
</CardDeck> */}

                    
                    </Col>
                    <br></br>
                    </Row>
            </div>
        
        )
    }
  }


export default Earring;