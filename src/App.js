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
import * as firebase from "firebase/app";
import "firebase/auth";




import Function from './functions/functions'


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import { DatePicker } from 'antd';
import Product from './product'


var firebaseConfig = {
  apiKey: "AIzaSyDQpeO9E35la_b5xMt4aE0f2EuqcQU7UzM",
  authDomain: "mahek-jewellery.firebaseapp.com",
  databaseURL: "https://mahek-jewellery.firebaseio.com",
  projectId: "mahek-jewellery",
  storageBucket: "mahek-jewellery.appspot.com",
  messagingSenderId: "399646365092",
  appId: "1:399646365092:web:c8b30e47f5047315"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



class App extends React.Component{
  constructor(props){
    super(props);
    this.state={};
    this.state.ordered={}
        
    this.state.db={
      
      products : [],   

      cart:[],

      item:[],
            
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
      order:[],

      address:[],
        
  }
}

googleLogin(){
  var provider = new firebase.auth.GoogleAuthProvider();


  firebase.auth().signInWithPopup(provider).then(function(result,history) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    console.log(user.displayName,user.email)
    history.push("/");

    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  
}




componentDidMount(){
  axios.get('http://localhost:8080/earring')
  .then((res)=>{
    console.log(res)
  let db = this.state.db;
  db.products = res.data;
    this.setState({
       db:db
    })
  })

  axios.get('http://localhost:8080/cartItem')
  .then((res)=>{
    console.log(res)
    let db=this.state.db;
    db.cart=res.data;
    this.setState({
      db:db
    })
  })

  axios.get('http://localhost:8080/getAddress')
  .then((res)=>{
    console.log(res)
    let db=this.state.db;
    db.address=res.data;
    this.setState({
      db:db
    })
  })
}

itemDetail(item){
  let db = this.state.db;
  db.item.pop(item);
  db.item.push(item);
  this.setState(
    {db:db}
  )
}

addProductToCart(item){
console.log(item)

  let obj={id:item.id, name:item.name, price:item.price, image:item.image}
  axios.post('http://localhost:8080/showcart',obj)
  .then((res)=>{
    console.log(res)
  })
  let db = this.state.db;
  item.quantity = 1;
  db.cart.push(item);
  this.setState(
    {db:db}
  )
  this.state.ordered=db.cart;
  console.log(this.state.ordered);
  console.log(db);
 }

 addProductToOrder(item){
  console.log(item)
  
    let obj={cartinfo:this.state.db.cart, address:this.state.db.address}
    axios.post('http://localhost:8080/showorder',obj)
    .then((res)=>{
      console.log(res)
    })
    // let db = this.state.db;
    // item.quantity = 1;
    // db.cart.push(item);
    // this.setState(
    //   {db:db}
    // )
   }

 deleteFromCart(i){
  let x = this.state.db.cart;
console.log(i);
console.log(x[i]);

  axios.delete('http://localhost:8080/deleteCartItem/' + x[i]._id)
    .then((res) => {
      console.log(res.data);
    })
  x.splice(i, 1);
  let db=this.state.db;
  db.cart=x;
  this.setState({
    db:db
  })
  
 }

 
 changeQuantity(item,e){
  let db = this.state.db;
  let i = db.cart.indexOf(item)
   db.cart[i].quantity = parseInt(e.target.value); 
  this.setState(
    {db:db}
  )
  console.log(db);
}

sortAscending(){
  console.log("hello");
  axios.get("http://localhost:8080/sortAscending")
  .then((res)=>{
    console.log(res);
    let db = this.state.db;
  db.products = res.data;
    this.setState({
       db:db
    })
  })
}

sortDescending(){
  console.log("hello");
  axios.get("http://localhost:8080/sortDescending")
  .then((res)=>{
    console.log(res);
    let db = this.state.db;
  db.products = res.data;
    this.setState({
       db:db
    })
  })
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
      
      

      <Route path="/login/" exact render={()=> <Login googleLogin={this.googleLogin.bind(this)} />} />
      <Route path="/signup/" component={Signup} />
      <Route path="/pendant/" component={Pendant} />
    <Route path="/earring/" render={()=> <Earring db={this.state.db} addProduct={this.addProductToCart.bind(this)} addOrder={this.addProductToOrder.bind(this)}  sortAscending={this.sortAscending.bind(this)}  sortDescending={this.sortDescending.bind(this)} itemDetail={this.itemDetail.bind(this)}/> } />
    <Route path="/item1/" render={()=> <Item db={this.state.db} addProduct={this.addProductToCart.bind(this)} addOrder={this.addProductToOrder.bind(this)}/>}   />
      <Route path="/cart/" render={()=> <Cart db={this.state.db} changeQuantity={this.changeQuantity.bind(this)}  deleteItem={this.deleteFromCart.bind(this)} itemDetail={this.itemDetail.bind(this)} />} />
      <Route path="/review/" component={Review} />
      <Route path="/payment/" component={Payment} />
      <Route path="/placed/" component={Placed} />
      <Route path="/address/" render={()=> <Address db={this.state.db} addOrder={this.addProductToOrder.bind(this)}/>} />
      <Route path="/help/" component={Help} />  
      <Route path="/drawer/" component={Drawer1} />
      <Route path="/track/" render={()=> <Track db={this.state.db} />} /> 
      <Route path="/order/" render={()=> <Order db={this.state.db} />} />  
      <Route path="/return/" render={()=> <Return db={this.state.db} />} />  
      <Route path="/replace/" render={()=> <Replace db={this.state.db} />} />  
      <Route path="/store/" component={Store} />
      <Route path="/replace_res/" component={Replace_res} />
      <Route path="/return_res/" component={Return_res} />
      <Route path="/cancel_res/" component={Cancel_res} />


    <footer>
            <Footer />
            </footer>
            {/* <button onClick={()=> this.googleLogin()}>login</button> */}

      </div>
      </Router>
    )   
  }
}

export default App;
