import React from 'react';
// import NavDropdown from './dropdown'
import { Navbar, Container, Nav, Form, FormControl, Button, NavDropdown, Dropdown } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Login from './profile/login'



class Navigation extends React.Component {
    render() {
        return (
            <div>
                
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                    <a className="navbar-brand" href="/" >MJ</a>
                    <form className="form-inline " >
                        <input className="form-control " type="search" style={{width:400  ,marginLeft:400}} placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit"> Search</button>
                    </form>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active" style={{marginLeft:30}}>
                                <a className="nav-link" href="/">Jewellery <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item dropdown" >
                                <NavDropdown name="Dropdown">
                                    <a className="dropdown-item" href="/">American Diamond</a>
                                    <a className="dropdown-item" href="/">Victorian Jewellery</a>
                                    <a className="dropdown-item" href="/">Antique Items</a>
                                </NavDropdown>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/" >New Arrival</a>
                                </li>
                                <li className="nav-item dropdown" >
                                <NavDropdown name="Dropdown">
                                    <a className="dropdown-item" href="/">Earrings</a>
                                    <a className="dropdown-item" href="/">Necklace</a>
                                    <a className="dropdown-item" href="/">Rings</a>
                                    <a className="dropdown-item" href="/">Mangalsutra</a>
                                </NavDropdown>
                            </li>
                                <li className="nav-item">
                                <a className="nav-link active" href="/">Cart</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link active " href="/">Profile</a>
                            </li>
                            <li className="nav-item dropdown" >
                                <NavDropdown name="Dropdown">
                                         
                                            <Link to='/login' className="dropdown-item">Login</Link>

                                           
                                            
                                        
                                    <a className="dropdown-item" href="/">Track Order</a>
                                    <a className="dropdown-item" href="/">My Orders</a>
                                    <a className="dropdown-item" href="/">SignOut</a>
                                </NavDropdown>
                            </li>

                        </ul>
                    </div>
                </nav><br />
                <div>


                    
                </div>
            </div>
        )
    }
}

export default Navigation;