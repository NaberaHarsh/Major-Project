import React from 'react'
import './footer.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Footer extends React.Component{

    render(){
        return(
            <div id="dd">
                <div class="row">
                    <div class="col-4" style={{textAlign:"center", marginTop:20}}>
                        <h3>Customer service</h3>
                        <h5><Link to='/help/'>Help and Support</Link></h5>
                        <h5>Return Product</h5>
                        <h5>Replacement</h5>
                        <h5>Find Store</h5>
                    </div>
                    <div class="col-4"></div>
                    <div class="col-4" style={{ marginTop:20}}>
                        <h4>Subscribe to recieve exclusive Offers</h4>
                        <form>
                            <input type="email" placeholder="E-mail ID" style={{marginLeft:50}}></input>
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default Footer;