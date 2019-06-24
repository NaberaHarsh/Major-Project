import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CardDeck , CardColumns, Dropdown, Nav} from 'react-bootstrap';
import {Card} from 'antd'
import 'antd/dist/antd.css';
import {Row, Icon, Col, Avatar } from 'antd';
import { Button } from 'react-bootstrap';
import { configConsumerProps } from 'antd/lib/config-provider';
const { Meta } = Card;


class Earring extends React.Component{
  constructor(props){
    super(props)
  
    this.state = { price_visible: {display : 'none'}, type_visible: {display : 'none'}, ocassion_visible: {display : 'none'}};
    }

do(e){
  
  if(e.target.value=='price'){
    this.setState({price_visible:{display:'block'}})
    this.setState({type_visible:{display:'none'}})
    this.setState({ocassion_visible:{display:'none'}})
  }
  if(e.target.value=='type'){
    this.setState({price_visible:{display:'none'}})
  this.setState({type_visible:{display:'block'}})
  this.setState({ocassion_visible:{display:'none'}})
  }
  if(e.target.value=='ocassion'){
    this.setState({price_visible:{display:'none'}})
  this.setState({type_visible:{display:'none'}})
  this.setState({ocassion_visible:{display:'block'}})
  }
}



 

  render(){


        return (
           
            <div>
                <Row>
                    <Col span={6}>
                        <h3 style={{textAlign:"center"}}>Apply Filters</h3>
                        <br></br>
                        <ul type="none">
                            <li><Button onClick={(e)=>this.do(e)} value='price' variant="outline-dark" style={{width:250}}>Price</Button>
                            <form
                            style={this.state.price_visible}>
                              <br></br>
      <input type="radio" name="price" /><label>below 500</label><br></br>
      <input type="radio" name="price" /><label>500 - 1500</label><br></br>
      <input type="radio" name="price" /><label>1500 - 2500</label><br></br>
      <input type="radio" name="price" /><label>2500 - 5000</label><br></br>
      <input type="radio" name="price" /><label>above 5000</label><br></br>
      </form>
                              </li>
                            <br></br>
                            <li>  <Button onClick={(e)=>this.do(e)} value='type' variant="outline-dark" style={{width:250}}>Jewellery type</Button>
                            <form
                             style={this.state.type_visible}
                            >
                             <br></br>
      <input type="checkbox" name="type" /><label>American Diamond</label><br></br>
      <input type="checkbox" name="type" /><label>Victorian Jewellery</label><br></br>
      <input type="checkbox" name="type" /><label>Antique metal</label><br></br>
      </form>
  </li>
                            <br></br>
                            <li> <Button onClick={(e)=>this.do(e)} value='ocassion' variant="outline-dark" style={{width:250}}>Ocassion</Button>
                            <form
                             style={this.state.ocassion_visible}
                          >
                            <br></br>
      <input type="checkbox" name="ocassion" /><label>Wedding Jewellery</label><br></br>
      <input type="checkbox" name="ocassion" /><label>Diwali Special</label><br></br>
      <input type="checkbox" name="ocassion" /><label>Navratra Special</label><br></br>
      </form>
    
                            </li>
                        </ul>
                        </Col>
                    
                    <Col span={18}>
                    <h3 style={{textAlign:"right", paddingRight:100}}>Sort</h3>
                        <Nav className="justify-content-end" activeKey="/home" >
    <Nav.Item>
      <Nav.Link>Best Seller</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>New Arrivals</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Dropdown>
  <Dropdown.Toggle variant="outline-info" id="dropdown-basic" >
    Price
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1" onClick={()=> this.props.sortAscending()}>Low to High</Dropdown.Item>
    <Dropdown.Item href="#/action-2" onClick={()=> this.props.sortDescending()}>High to Low</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
    </Nav.Item>
  </Nav>

  <Link to='/item1'>
      <Row> 
        {this.props.db.products.map(p=> <Col span={8}>
        <Card
        onClick={()=> this.props.itemDetail(p)}
      style={{ width: 250 }}
      cover={
        <img
          alt="example"
          src={`http://localhost:8080/${p.image}`}
        />
      }
      actions={[<Link to='/cart'><Button variant="warning" onClick={()=>{this.props.addProduct(p); this.props.addOrder(p)}}>Add To Cart</Button></Link>]}
      
      >
      <center>
          <Meta
        title={p.name}
        description={p.price}
      />
      
      </center>
    </Card>
    </Col>)}
      </Row>
        </Link>
                                           
                    </Col>
                    <br></br>
                    </Row>
            </div>
        
        )
    }
  }


export default Earring;