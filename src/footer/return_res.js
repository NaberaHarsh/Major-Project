import React from 'react'
import {Modal, Button, ButtonToolbar} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Return_res({history}){

    alert("Return request has been sent")
    history.push("/");
    
    return <p>hi</p>
}
  

export default Return_res;