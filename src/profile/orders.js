import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Table } from 'react-bootstrap'

class Order extends React.Component{
  constructor(props){
    super(props);
    this.state={};
    this.state.x=0;
  }

// repeat(){
//   for(let i of cartinfo){
// this.setState({
//   x:i
// })
//   }
// }

 render(){ 
  
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
      {this.props.db.order.map(item=>
        
  
              <tr>
          
          <td>
            <Link to='/item1/'><img src={`http://localhost:8080/${item.cartinfo[0].image}`} id="hh"></img></Link>
            </td>
          <td><br></br><br></br> <h6>{item._id}</h6></td>
          <td style={{fontFamily:"arial", fontSize:15}}><br></br><br></br>
          {item.cartinfo[`${this.state.x}`].name}
            </td>
          <td>{item.name}<br></br>{item.house},{item.street}<br></br>{item.city},{item.state}<br></br>{item.pincode}</td>
          
        </tr>
              
         )}
         </Table> 
         </div>
         )
         }}
        
        export default Order;