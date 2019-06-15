import React from 'react'
import {Modal, Button, ButtonToolbar} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Replace_res({history}){

    alert("Replace request has been sent")
    history.push("/");
    
    return <p>hi</p>
}
  

export default Replace_res;