import React from 'react';
import './infobox.css'


class InfoBox extends React.Component{

    render(){
        return(
            <div>
                <div id="info_box">
        <h3 id="aa">About Us</h3>
        <div class="row" >

        <div class="col-4" id="bb">
       <p> Our Philosophy</p>
       <p id="cc">this is sample Text
         this is sample text
         this is sample text
         this is sample text
         this is sample text
         <br></br>
         <br></br>
       </p>
       </div>
       <div class="col-4" id="bb">
       <p> Product</p>
       <p id="cc">this is sample Text
       this is sample text
       this is sample text
         this is sample text
         this is sample text
         <br></br>
         <br></br>
       </p>
       </div>
       <div class="col-4" id="bb">
       <p> Design</p>
       <p id="cc">this is sample Text
         this is sample text
         this is sample text
         this is sample text
         this is sample text
         <br></br>
         <br></br>
       </p>
       </div>

       </div>
       </div>
        </div>
        )
    }
}
export default InfoBox;