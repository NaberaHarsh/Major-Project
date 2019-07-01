import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Table } from 'react-bootstrap'

class Order extends React.Component{
  constructor(props){
    super(props);
    this.state={};
    this.state.x=0;
  }

  componentDidMount(){

    this.props.history.push("/order")
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
            {item.cartinfo.map(p=>
            <Link to='/item1/'><p><img src={`/${p.image}`} id="hh"></img></p></Link>
            )}
            </td>
          <td><br></br><br></br> <h6>{item._id}</h6></td>
          <td style={{fontFamily:"arial", fontSize:15}}><br></br><br></br>
          {item.cartinfo.map(k=>
          <p>{k.name}</p>
          )}
            </td>
          <td>{item.name}<br></br>{item.house},{item.street}<br></br>{item.city},{item.state}<br></br>{item.pincode}</td>
          
        </tr>
              
         )}
         </Table> 
         </div>
         )
         }}
        
        export default Order;