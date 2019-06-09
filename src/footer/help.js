import React from 'react'
import {Icon} from 'antd'
import './help.css'

function Help(){
    return(
        <div>
            <h1 id="ee">Help and Support</h1>
            <br></br><br></br>
            <h3 id="ee">Have a Question ?</h3>
            <div className="row">
                <div className="col-6" style={{textAlign:"center"}}>
                <Icon type="mail" style={{fontSize:50}}/>
                <br></br>
                <h5>Email us at:</h5>
                <h6>mahekjewellery@gmail.com</h6>

                </div>
                <div className="col-6" style={{textAlign:"center"}}>
                <Icon type="phone" style={{fontSize:50}}/>
                <h5>Contact us at:</h5>
                <h6>0123456789</h6>
                </div>
            </div>
            <br></br>
            <br></br>
        </div>
    )
}
export default Help;