import React from 'react'
import { Rate, Rater } from 'antd';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

function Review(){
    return(
        <div style={{textAlign:"center"}}>
<form>
    <label>Name of person   </label>
    <input type="text" placeholder="add review here"></input>
    <br></br>
    <label>Add Image</label>
    <input type="file" name="Add Image"></input>
</form>
<br></br>
<Link to='/item1/'>
<Button variant="warning">
    Submit Review</Button>
    </Link>
<br></br>
<br></br>
        </div>
    )
}

ReactDOM.render(<Rate />, document.getElementById('root'));
export default Review;