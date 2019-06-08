import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CardDeck , Card, CardColumns, Dropdown, Nav} from 'react-bootstrap';

function Earring(){


        return (
           
            <div>
                <div className="row">
                    <div className="col-4">
                        <h3>Apply Filters</h3>
                        <br></br>
                        <ul type="none">
                            <li>Price</li>
                            <br></br>
                            <li>Jewellery Type</li>
                            <br></br>
                            <li>Ocassion</li>
                        </ul>
                    </div>
                    
                    <div className="col-8">
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
                        
                        <CardDeck>
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
</CardDeck>

                    </div>
                    </div>
                    <br></br>
            </div>
        
        )
    }


export default Earring;