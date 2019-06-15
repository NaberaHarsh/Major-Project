import React from 'react'
import {Modal, Button, ButtonToolbar} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Cancel_res({history}){

    alert("Cancel request has been sent")
    history.push("/");
    
    return <p>hi</p>
}
  

export default Cancel_res;