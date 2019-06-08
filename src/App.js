import React from 'react';
import './App.css';
import ControlledCarousel from './carousel/carousel'
import Navigation from './Navigation/nav'
import Cards from './cards/cards'
import InfoBox from './infobox/infobox'
import Footer from './footer/footer'
// import Drawer1 from './profile/profsile'
import Login from './profile/login'
import Signup from './profile/signup'
import Pendant from './pendant/pendant'
import Earring from './earring/earring'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class App extends React.Component{
  constructor(props){
    super(props);
    

  }

  render(){
    return(
    <Router>
       <div>
      
      <h1 id="title">Mahek Jewellery</h1>
      <Navigation />
      <Route path="/" exact component={ControlledCarousel} />
      <Route path="/" exact component={Cards} />
      <br></br>
      <Route path="/" exact component={InfoBox} />
      <br></br>
      
      {/* <Drawer1 /> */}

      <Route path="/login/" exact component={Login} />
      <Route path="/signup/" component={Signup} />
      <Route path="/pendant/" component={Pendant} />
      <Route path="/earring/" component={Earring} />
      
      <Footer />
      </div>
      </Router>
    )   
  }
}

export default App;
