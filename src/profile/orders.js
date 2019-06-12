import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Table } from 'react-bootstrap'

class Order extends React.Component{

    render(){
  
  return(
    <div  style={{textAlign:"center"}}>
      <Table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Price</th>
              <th>Status</th>
              </tr>
              </thead>
      {this.props.db.order.map(p=>
        
  
              <tr>
          
          <td>
            <Link to='/item1/'><img src={p.image} id="hh"></img></Link>
            </td>
          <td>{p.name}</td>
          <td style={{color:"darkred"}}>{p.Price}</td>
          <td>Delivered</td>
          
        </tr>
              
         )}
         </Table> 
         </div>
         )
         }}
        
        export default Order;