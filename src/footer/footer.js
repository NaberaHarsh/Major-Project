import React from 'react'
import './footer.css'
import {Icon} from 'antd'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Footer extends React.Component{

    render(){
        return(
            <div id="dd">
                <div class="row">
                    <div class="col-4" style={{ marginTop:20}}>
                        <h3 style={{textAlign:"center"}}>Customer service</h3>
                        <ul type="none" style={{fontSize:15, paddingLeft:145}}>
                        <li><Link to='/help/'>Help and Support</Link></li>
                        <li><Link to='/return'>Return Product</Link></li>
                        <li><Link to='/replace'>Replacement</Link></li>
                        <li><Link to='/store'>Find Store</Link></li>
                        </ul>
                    </div>
                    <div class="col-4"></div>
                    <div class="col-4" style={{ marginTop:25}}>
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