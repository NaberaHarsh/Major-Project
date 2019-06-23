import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Table } from 'react-bootstrap'

function Order({db}){ 
  
  return(
    <div  style={{textAlign:"center"}}>
      <Table>
          <thead>
            <tr>
              <th></th>
              <th>Order ID</th>
              <th>Name</th>
              <th>Delivered To</th>
              </tr>
              </thead>
      {db.order.map(item=>
        
  
              <tr>
          
          <td>
            <Link to='/item1/'><img src={item.image} id="hh"></img></Link>
            </td>
          <td>{item.name}</td>
          <td style={{color:"darkred"}}>{item.price}</td>
          <td>Delivered</td>
          
        </tr>
              
         )}
         </Table> 
         </div>
         )
         }
        
        export default Order;