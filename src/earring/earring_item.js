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
                    {this.props.db.item.map(p=>
                        <img src={`/${p.image}`} alt="let's pretend a nice image is here" id="modify"></img>
                    )}
                        </div>
                    <div className="col-4"><br></br><br></br>
                    {this.props.db.item.map(p=>
                    <div>
                        <h3 style={{textAlign:"center"}}>{p.name}</h3>
                        
                        <p style={{textAlign:"center",  fontSize:20}}>{p.desc}</p>
                        
                        <p style={{textAlign:"center", fontSize:25}}>Rs. {p.price}/- only</p>
                        
                    <br></br>
<br></br>      
<center>
<Link to='/cart/'>
<Button variant="warning" onClick={()=>{this.props.addProduct(p); this.props.addOrder(p)}}>
    Add To Cart</Button>
    
</Link>

<br></br>
<br></br>
</center>
</div>
)}
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