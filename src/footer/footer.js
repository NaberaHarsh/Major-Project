import React from 'react'
import './footer.css'
import {Icon} from 'antd'
import axios from 'axios'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        this.state.mail={};
              
      }

      getValue1(e){
        this.mail=e.target.value;  }

        Submit(){
            let obj={mail:this.mail}
            axios.post('/subscribe', obj)
          .then((res)=>{
        console.log(res)
           })
          }

    render(){
        return(
            <div id="dd">
                <div class="row">
                    <div class="col-4" style={{ marginTop:20}}>
                        <h3 style={{textAlign:"center"}}>Customer service</h3>
                        <ul type="none" style={{fontSize:15, paddingLeft:145}}>
                        <li><Link to='/help/'>Help and Support</Link></li>
                        <li><Link to='/feedback/'>Feedback</Link></li>
                        <li><Link to='/store'>Find Store</Link></li>
                        </ul>
                    </div>
                    <div class="col-4"></div>
                    <div class="col-4" style={{ marginTop:25}}>
                        <h4>Subscribe to recieve exclusive Offers</h4>
                        <form>
                            <input type="email" placeholder="E-mail ID" style={{marginLeft:50}} onChange={(e)=> this.getValue1(e)} required></input>
                            <button onClick={()=> this.Submit()}>Subscribe</button>
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