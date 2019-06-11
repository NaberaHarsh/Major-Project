import React from 'react'
import {Card} from 'antd'
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Row, Icon, Col, Avatar } from 'antd';
import { Button } from 'react-bootstrap';
const { Meta } = Card;



class Product extends React.Component{

    render(){
        return (
            <div>
                <Link to='/item1'>
      <Row>
        {this.props.db.products.map(p=> <Col span={6}>
        <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src={p.image}
        />
      }
      actions={[<Button variant="warning">Add To Cart</Button>]}
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
      </div>)
    }
  
  
  }
  export default Product;