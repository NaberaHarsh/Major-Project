import React from 'react';
import './App.css';
// import ReactDOM from 'react-dom';
// import mountNode from 'antd'
import ControlledCarousel from './carousel/carousel'
import Navigation from './Navigation/nav'
import Cards from './cards/cards'
import InfoBox from './infobox/infobox'
import Footer from './footer/footer'
import Drawer1 from './profile/profile'
import Login from './profile/login'
import Signup from './profile/signup'
import Pendant from './pendant/pendant'
import Earring from './earring/earring'
import Item from './earring/earring_item'
import Cart from './cart/cart'
import Review from './earring/review'
import Address from './cart/address'
import Payment from './cart/payment'
import Placed from './cart/placed'
import Help from './footer/help'
import Track from './profile/track'
import Order from './profile/orders'
import Return from './footer/return'
import Replace from './footer/replace'
import Store from './footer/store'
import Replace_res from './footer/replace_res'
import Return_res from './footer/return_res'
import Cancel_res from './profile/cancel_res'
import axios from 'axios';



import Function from './functions/functions'


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import { DatePicker } from 'antd';
import Product from './product'




class App extends React.Component{
  constructor(props){
    super(props);
    this.state={};
    this.state.item=[];

    
    this.db={
      
      products:[
        {
          name:"AD earring",
          Price:"Rs. 799",
          image:".././assets/earring.jpg"
        },
        {
          name:"AD earring",
          Price:"Rs. 899",
          image:".././assets/earring.jpg"
        },
        {
          name:"AD Earring",
          Price:"200",
          image:".././assets/earring.jpg"
        },
        {
          name:"AD Earring",
          Price:"600",
          image:".././assets/necklace.jpg"
        }
      ],

      cart:[
        {
          name:"Necklace",
          Price:"999/-",
          image:".././assets/necklace.jpg",
          quantity:"1"
        },
        {
          name:"AD Earring",
          Price:"799/-",
          image:".././assets/earring.jpg",
          quantity:"2"
        }
      ],
      track:[
        {
          name:"AD Earring",
          image:".././assets/earring.jpg"
        }
      ],
      return:[
        {
          name:"AD Earring",
          image:".././assets/earring.jpg"
        }
      ],
      replace:[
        {
          name:"AD Earring",
          image:".././assets/earring.jpg"
        }
      ],
      order:[
        {
          name:"Necklace",
          Price:"999/-",
          image:".././assets/necklace.jpg"
        },
        {
          name:"AD Earring",
          Price:"799/-",
          image:".././assets/earring.jpg"
        }
      ],
      add:[
        {
          name:"Harsh Nabera",
          house_no:"68/145",
          street:"pratap nagar",
          city:"jaipur",
          state:"Raj",
          pincode:"302033"
        },
        {
          name:"Mojo Jojo",
          house_no:"40/33",
          street:"villan street",
          city:"Townsville",
          state:"xyz",
          pincode:"505050"
        },
        {
          name:"Ruby",
          house_no:"77/33",
          street:"malviya nagar",
          city:"jaipur",
          state:"Raj",
          pincode:"302030"
        }
      ]
  }
}

componentDidMount() {
  axios.get('http://localhost:8080/read')
    .then((res) => {
      let db = this.state.db;
    db.products = res.data;
      this.setState({
         db:db
      })
    })}


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
      
      

      <Route path="/login/" exact component={Login} />
      <Route path="/signup/" component={Signup} />
      <Route path="/pendant/" component={Pendant} />
    <Route path="/earring/" render={()=> <Earring db={this.db} /> } />
      <Route path="/item1/" component={Item} />
      <Route path="/cart/" render={()=> <Cart db={this.db} />} />
      <Route path="/review/" component={Review} />
      <Route path="/payment/" component={Payment} />
      <Route path="/placed/" component={Placed} />
      <Route path="/address/" render={()=> <Address db={this.db} />} />
      <Route path="/help/" component={Help} />  
      <Route path="/drawer/" component={Drawer1} />
      <Route path="/track/" render={()=> <Track db={this.db} />} /> 
      <Route path="/order/" render={()=> <Order db={this.db} />} />  
      <Route path="/return/" render={()=> <Return db={this.db} />} />  
      <Route path="/replace/" render={()=> <Replace db={this.db} />} />  
      <Route path="/store/" component={Store} />
      <Route path="/replace_res/" component={Replace_res} />
      <Route path="/return_res/" component={Return_res} />
      <Route path="/cancel_res/" component={Cancel_res} />


    <footer>
            <Footer />
            </footer>
      </div>
      </Router>
    )   
  }
}

export default App;
