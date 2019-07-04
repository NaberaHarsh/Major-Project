import React from'react'
import './cart.css'
import { Table, columns, Button} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {List, Avatar} from 'antd'
import axios from 'axios';



class Cart extends React.Component{
   

  render(){
  return (
    <div  style={{textAlign:"center"}}>
        <Table>
            <thead>
              <tr>
                <th>Shopping cart</th>
                <th></th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
                 </tr>
                </thead>

                {this.props.db.cart.map((item,i)=>
      

                  <tr>
              
              <td>
                <Link to='/item1/'><img src={`/${item.image}`} id="hh" onClick={()=> this.props.itemDetail(item)}></img></Link>
                </td>
              <td>{item.name}</td>
              <td style={{color:"darkred"}}>{item.price}</td>
              <td><form>
                <select onChange={(e)=>{this.props.changeQuantity(item,e)}}>
                  
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option></select></form></td>
                
                <td><Link to="/cart"><Button variant="warning" onClick={()=>{this.props.deleteItem(i)}}>Remove Item</Button></Link></td>
              
            </tr>
                  
             )}
             </Table> 
      
     <h2 >Total : {this.props.db.cart.reduce((sum,item)=>sum+item.price*item.quantity,0)}</h2>
    <br></br>
     <Link to='/address/'>
     <Button variant="warning"> 
    Proceed To Checkout
     </Button>
     </Link>
     <br></br>
     <br></br>
     </div>
  )
}}

export default Cart;