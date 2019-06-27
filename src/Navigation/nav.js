import React from 'react';
// import NavDropdown from './dropdown'
import { Navbar, Container, Nav, Form, FormControl, Button, NavDropdown, Dropdown } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css'
 import { Drawer, Icon} from 'antd';
// import Login from './profile/login
import * as firebase from "firebase/app";
import "firebase/auth";




class Navigation extends React.Component {
    state = { visible: false };

    checkLogin(){
        firebase.auth().onAuthStateChanged(function(user) {
       if (user) {
         console.log(user.displayName)
       } else {
         console.log( "No user is signed in.")
       }
     });
     }

    logout(){
        firebase.auth().signOut().then(function() {
        console.log(" Sign-out successful.")
        }).catch(function(error) {
        // An error happened.
        });
      }

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
                                    <Link to="/common" className="dropdown-item" onClick={()=>this.props.hey("American_Diamond")}>American Diamond</Link>
                                    <Link to="/victorian" className="dropdown-item" onClick={()=>this.props.hey("Victorian_Jewellery")}>Victorian Jewellery</Link>
                                    <Link to="/antique" className="dropdown-item" onClick={()=>this.props.hey("Antique_Items")}>Antique Items</Link>
                                </NavDropdown>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active"  >New Arrival</a>
                            </li>
                            <li className="nav-item dropdown" >
                                <NavDropdown name="Dropdown">
                                    <Link to="/earring" className="dropdown-item" onClick={()=>this.props.hello("Earring")}>Earrings</Link>
                                    <Link to="/necklace" className="dropdown-item" onClick={()=>this.props.hello("Necklace")}>Necklace</Link>
                                    <Link to="/ring" className="dropdown-item"onClick={()=>this.props.hello("Ring")}>Rings</Link>
                                    <Link to="/mangalsutra" className="dropdown-item" onClick={()=>this.props.hello("Mangalsutra")}>Mangalsutra</Link>
                                </NavDropdown>
                            </li>
                            <li className="nav-item">

                                <Link to='/cart/' className="nav-link active"> Cart </Link>
                            </li>

                            <li className="nav-item">
                                <Button onClick={this.showDrawer} variant="outline-light">Profile</Button>
                                <Drawer 
                                    title='Profile' 
                                    placement="right"
                                    closable={false}
                                    onClose={this.onClose}
                                    visible={this.state.visible}
                                >
                                    <p>
                                    <Link to='/login' on onClick={()=> {this.onClose(); this.checkLogin()}}>Login </Link></p>
                                    <p><a href="/order" on onClick={this.onClose}>My Order</a></p>
                                    <p><a href="/" onClick={this.logout}>Sign Out</a></p>
                                </Drawer>
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