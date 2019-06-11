import React from 'react';
// import NavDropdown from './dropdown'
import { Navbar, Container, Nav, Form, FormControl, Button, NavDropdown, Dropdown } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css'
 import { Drawer} from 'antd';
// import Login from './profile/login




class Navigation extends React.Component {
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                    <a className="navbar-brand" href="/" >MJ</a>
                    <form className="form-inline " >
                        <input className="form-control " type="search" style={{ width: 400, marginLeft: 400 }} placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit"> Search</button>
                    </form>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active" style={{ marginLeft: 70 }}>
                                <a className="nav-link">Jewellery <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item dropdown" >
                                <NavDropdown name="Dropdown">
                                    <a className="dropdown-item">American Diamond</a>
                                    <a className="dropdown-item">Victorian Jewellery</a>
                                    <a className="dropdown-item" >Antique Items</a>
                                </NavDropdown>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active"  >New Arrival</a>
                            </li>
                            <li className="nav-item dropdown" >
                                <NavDropdown name="Dropdown">
                                    <a className="dropdown-item">Earrings</a>
                                    <a className="dropdown-item">Necklace</a>
                                    <a className="dropdown-item">Rings</a>
                                    <a className="dropdown-item">Mangalsutra</a>
                                </NavDropdown>
                            </li>
                            <li className="nav-item">

                                <Link to='/cart/' className="nav-link active"> Cart </Link>
                            </li>

                            <li className="nav-item">
                                <Button onClick={this.showDrawer} variant="outline-light">Profile</Button>
                                <Drawer
                                    title="Profile"
                                    placement="right"
                                    closable={false}
                                    onClose={this.onClose}
                                    visible={this.state.visible}
                                >
                                    <p>
                                    <Link to='/login' on onClick={this.onClose}>Login </Link></p>
                                    <p>My Order</p>
                                    <p><Link to='/track/' on onClick={this.onClose} >Track Order</Link></p>
                                    <p>Sign Out</p>
                                </Drawer>
                            </li>
                            {/* <li className="nav-item dropdown" >
                                <NavDropdown name="Dropdown">

                                    <Link to='/login' className="dropdown-item">Login</Link>




                                    <a className="dropdown-item" >Track Order</a>
                                    <a className="dropdown-item" >My Orders</a>
                                    <a className="dropdown-item" >SignOut</a>
                                </NavDropdown>
                            </li> */}

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