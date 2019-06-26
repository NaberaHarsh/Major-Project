import React from 'react'
import './feedback.css'
import axios from 'axios'

import { Card , Button} from 'react-bootstrap'

class Feedback extends React.Component {
    constructor(props){
        super(props);
        this.state={};
        this.state.category={};
        this.state.ontime={};
        this.state.satisfy={};
        this.state.area={};
        
    
      }

    getValue1(e){
        this.category=e.target.value;  }
    
      getValue2(f){
        this.ontime=f.target.value;  }
    
        getValue3(g){
          this.satisfy=g.target.value;  }
    
          getValue4(h){
            this.area=h.target.value;  }

            Submit(){
                let obj={category:this.category, ontime:this.ontime, satisfy:this.satisfy, area:this.area}
                axios.post('http://localhost:8080/feedback', obj)
              .then((res)=>{
            console.log(res)
               })
              }

    render(){
    return(
        <div><center>
            <Card style={{ width: '30rem'}}>
    <Card.Title ><h2 id="heading">Feedback form</h2><br></br> </Card.Title>
    <form>
<label id="label">Which feedback did you bought?</label>
<select id="options"
 onChange={(e)=> this.getValue1(e)}>
            <option value="Pendant">Pendant</option>
            <option value="Earring">Earring</option>
            <option value="Necklace">Necklace</option>
            <option value="Jhumki">Jhumki</option>
            <option value="Mangalsutra">Mangalsutra</option>
            <option value="Bangles">Bangles</option>
            <option value="Chain">Chain</option>
            <option value="Nosepin">Nosepin</option>
            <option value="Ring">Ring</option>
            <option value="Watch">Watch</option>
          </select><br></br>

          <label id="label">Was your product delivered on time?</label>
          <input type="radio" value="yes" satisfy="ontime" id="first" onClick={(f)=> this.getValue2(f)}></input>
          <label id="label">Yes</label>
          <input type="radio" value="no" satisfy="ontime" id="second" onClick={(f)=> this.getValue2(f)}></input>
          <label id="label">No</label>
<br></br>
          <label id="label">Are you satisfied with our service?</label>
          <input type="radio" value="yes" satisfy="satisfaction" style={{marginLeft:45}} onClick={(g)=> this.getValue3(g)}></input>
          <label id="label">Yes</label>
          <input type="radio" value="no" satisfy="satisfaction"  id="second" onClick={(g)=> this.getValue3(g)}></input>
          <label id="label">No</label>
<br></br>
          <label id="label">Any other comment :  </label>
          <textarea style={{ width:270}} placeholder="add comment" onChange={(h)=> this.getValue4(h)}></textarea>

<a href="/"><Button onClick={()=> this.Submit()}>Submit</Button></a>
          


            </form>
            <br></br>
</Card>
            
            
</center>
<br></br>
<br></br>
<br></br>
        </div>
    )
}
}
export default Feedback;