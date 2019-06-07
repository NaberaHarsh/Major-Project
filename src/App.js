import React from 'react';
import './App.css';
import ControlledCarousel from './carousel/carousel'
import Navigation from './Navigation/nav'
import Cards from './cards/cards'
import InfoBox from './infobox/infobox'
import Footer from './footer/footer'


class App extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return <div>
      
      <h1 id="title">Mahek Jewellery</h1>
      <Navigation />
      <ControlledCarousel />
      <Cards />
      <br></br>

      <InfoBox />
      <br></br>
      <Footer></Footer>
      
      


      </div>
      
      
  }
}

export default App;
