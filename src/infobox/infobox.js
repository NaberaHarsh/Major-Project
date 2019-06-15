import React from 'react';
import './infobox.css'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class InfoBox extends React.Component{

    render(){
        return(
          <Link to="/">
            <div>
                <div id="info_box">
        <h3 id="aa">About Us</h3>
        <div class="row" >

        <div class="col-4" id="bb">
       <p> Our Philosophy</p>
       <p id="cc">We are fascinated by the magic of precious stones which have a soul.
Metals which have touched humankind for centuries through their lustre and special properties.
The crafting as a creative process between the mind and the hand.
We are touching and feeling and are involved with all our senses.
         <br></br>
         <br></br>
       </p>
       </div>
       <div class="col-4" id="bb">
       <p> Product</p>
       <p id="cc">A collective passion for art and architecture inspires the team at Mahek Jewellery to bring a fresh perspective to the intricate, time-honoured craftsmanship of each meticulously handwoven creation.
         <br></br>
         <br></br>
       </p>
       </div>
       <div class="col-4" id="bb">
       <p> Design</p>
       <p id="cc">The Designers works continously with full dedication and inspiration to provide best designs. 
         <br></br>
         <br></br>
       </p>
       </div>

       </div>
       </div>
        </div>
        </Link>
        )
    }
}
export default InfoBox;