import React from'react'
import './cart.css'
import { Table, columns, Button} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {List, Avatar} from 'antd'



// class Cart extends React.Component{

  
//   render(){

// return(
//   <div  style={{textAlign:"center"}}>
//     <Table>
//         <thead>
//           <tr>
//             <th>Shopping cart</th>
//             <th></th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th></th>
//             </tr>
//             </thead>
//     {this.props.db.cart.map(p=>
      

//             <tr>
        
//         <td>
//           <Link to='/item1/'><img src={p.image} id="hh"></img></Link>
//           </td>
//         <td>{p.name}</td>
//         <td style={{color:"darkred"}}>{p.Price}</td>
//         <td><form>
//           <select>
            
//           <option>1</option>
//           <option>2</option>
//           <option>3</option>
//           <option>4</option>
//           <option>5</option></select></form></td>
//         <td><Button variant="warning">Remove Item</Button></td>
        
//       </tr>
            
//        )}
//        </Table> 
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
                <Link to='/item1/'><img src={`http://localhost:8080/${item.image}`} id="hh" onClick={()=> this.props.itemDetail(item)}></img></Link>
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
     <Button variant="warning" onClick={(item)=> this.props.addOrder(item)}> 
    Proceed To Checkout
     </Button>
     </Link>
     <br></br>
     <br></br>
     </div>
  )
}}

export default Cart;