import React from 'react'
import './earring_item.css'
import { Button } from 'react-bootstrap';
import { Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Item extends React.Component{

    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-6">
                        <img src="https://5.imimg.com/data5/CH/OU/MY-43025329/ladies-fancy-earring-500x500.jpg" alt="let's pretend a nice image is here" class="modify"></img>
                        </div>
                    <div className="col-4"><br></br>
                        <h3 style={{textAlign:"center"}}>American Diamond EarRing</h3>
                        <p style={{textAlign:"center"}}>this is a sample description of the product</p>
                        <br></br>
                        <br></br>
<h5 style={{textAlign:"center"}}>Rs. 799/- only</h5>
<br></br>
<br></br>
<center>
<Button variant="dark">
    <Link to='/cart/'>Add To Cart</Link></Button>
<br></br>
<br></br>

<Button variant="warning">
    <Link to='/review/'>Add Review</Link></Button>
</center>
                    </div>
                    <div className="col-2" >
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                        <form>
                            <label>QTY : </label>
                            <select style={{width:60 }} >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </form>
                        <br></br>
                        <pre><Icon type="share-alt" style={{fontSize:30}}/>   <Icon type="heart" style={{fontSize:30}}/>
                        </pre>

                    </div>
                </div>


            </div>
        )

    }
}
export default Item;