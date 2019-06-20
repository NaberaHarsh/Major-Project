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
function Cart({db,changeQuantity}){

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

                {db.cart.map(item=>
      

                  <tr>
              
              <td>
                <Link to='/item1/'><img src={item.image} id="hh"></img></Link>
                </td>
              <td>{item.name}</td>
              <td style={{color:"darkred"}}>{item.price}</td>
              <td><form>
                <select onChange={(e)=>{changeQuantity(item,e)}}>
                  
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option></select></form></td>
              <td><Button variant="warning">Remove Item</Button></td>
              
            </tr>
                  
             )}
             </Table> 
      
     <h2 >Total : {db.cart.reduce((sum,item)=>sum+item.price*item.quantity,0)}</h2>
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
}

export default Cart;