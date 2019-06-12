import React from'react'
import './cart.css'
import { Table, columns, Button} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Cart extends React.Component{

  
  render(){
if(this.props.db.cart==null)
  return(<h1>cart is empty</h1>)
  else{
return(
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
    {this.props.db.cart.map(p=>
      

            <tr>
        
        <td>
          <Link to='/item1/'><img src={p.image} id="hh"></img></Link>
          </td>
        <td>{p.name}</td>
        <td style={{color:"darkred"}}>{p.Price}</td>
        <td><form>
          <select>
            
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option></select></form></td>
        <td><Button variant="warning">Remove Item</Button></td>
        
      </tr>
            
       )}
       </Table> 
    {/* <Table responsive="sm">
    <thead>
      <tr>
        <th>Shopping Cart</th>
        
        <th></th>
        <th>Price</th>
        <th>Quantity</th>
        <th></th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        
        <td>
          <Link to='/item1/'><img src="https://5.imimg.com/data5/CH/OU/MY-43025329/ladies-fancy-earring-500x500.jpg" id="hh"></img></Link>
          </td>
        <td>sample Description</td>
        <td style={{color:"darkred"}}>Rs. 799/-</td>
        <td><form>
          <select>
            
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option></select></form></td>
        <td><Button variant="warning">Remove Item</Button></td>
        
      </tr>
      <tr>
        
        <td>
        <Link to='/item1/'><img src=".././assets/earring.jpg" id="hh"></img></Link>
        </td>
        <td>sample Description</td>
        <td style={{color:"darkred"}}>Rs. 599/-</td>
        <td><form>
          <select>
            
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option></select></form></td>
        <td><Button variant="warning">Remove Item</Button></td>
        
      </tr>
     
    </tbody>
  </Table> */}
  
    <Button variant="warning"> 
    <Link to='/address/'>Proceed To Checkout</Link>
    </Button>
    <br></br>
    <br></br>
  </div>
)
}

}
}
export default Cart;