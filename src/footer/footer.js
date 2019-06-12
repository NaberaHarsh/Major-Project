import React from 'react'
import './footer.css'
import {Icon} from 'antd'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Footer extends React.Component{

    render(){
        return(
            <div id="dd">
                <div class="row">
                    <div class="col-4" style={{textAlign:"center", marginTop:20}}>
                        <h3>Customer service</h3>
                        <h5><Link to='/help/'>Help and Support</Link></h5>
                        <h5><Link to='/return'>Return Product</Link></h5>
                        <h5><Link to='/replace'>Replacement</Link></h5>
                        <h5>Find Store</h5>
                    </div>
                    <div class="col-4"></div>
                    <div class="col-4" style={{ marginTop:20}}>
                        <h4>Subscribe to recieve exclusive Offers</h4>
                        <form>
                            <input type="email" placeholder="E-mail ID" style={{marginLeft:50}}></input>
                            <button>Subscribe</button>
                        </form>
                        <br></br>
                        <pre><p style={{ fontSize:20}}>    Follow us on: <Icon type="facebook" style={{fontSize:20}}/> <Icon type="twitter" style={{fontSize:20}}/> <Icon type="instagram"style={{fontSize:20}} /></p></pre>
                    </div>
                </div>

            </div>
        )
    }
}

export default Footer;