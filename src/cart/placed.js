import React from 'react'
import {Modal, Button, ButtonToolbar} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Placed({history}){

    alert("your order has been placed")
    history.push("/");
    
    return <p>hi</p>
}
  

export default Placed;