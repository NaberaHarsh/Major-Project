import React from'react'
import { Table, columns, Button} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Cart(){
return(
  <div  style={{textAlign:"center"}}>
    <Button variant="warning"> 
    <Link to='/address/'>Proceed To Checkout</Link>
    </Button>
    <br></br>
    <br></br>
  </div>
)
}
export default Cart;