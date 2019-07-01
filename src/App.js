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
// import Login from './profile/login'
// import Signup from './profile/signup'
import Earring from './earring/earring'
import Item from './earring/earring_item'
import Cart from './cart/cart'
import Review from './earring/review'
import Address from './cart/address'
import Payment from './cart/payment'
import Placed from './cart/placed'
import Help from './footer/help'
// import Track from './profile/track'
import Order from './profile/orders'
import Return from './footer/return'
import Replace from './footer/replace'
import Store from './footer/store'
// import Replace_res from './footer/replace_res'
import Feedback from './footer/feedback'
// import Return_res from './footer/return_res'
// import Cancel_res from './profile/cancel_res'
import axios from 'axios';
import * as firebase from "firebase/app";
import "firebase/auth";
import Pendant from './earring/pendant'
import Necklace from './earring/necklace'
import Jhumki from './earring/jhumki'
import Mangalsutra from './earring/mangalsutra'
import Bangle from './earring/bangles'
import Chain from './earring/chain'
import Nosepin from './earring/nosepin'
import Ring from './earring/ring'
import Watch from './earring/watch'
import American from './earring/american'
import Victorian from './earring/victorian'
import Antique from './earring/antique'

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
    this.state.user={};
    this.state.value="";
this.state.type="";

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


  firebase.auth().signInWithPopup(provider).then((result) =>{
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    this.setState(
      {user:user}
    )
    console.log(user.displayName);

    console.log(user.displayName,user.email);
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


hello=(item)=>{
  console.log(item);
this.setState({
  value:item
})
  
}

hey=(item)=>{
  console.log(item);
this.setState({
  type:item
})
  
}



componentDidMount(){
   
  axios.get('/cartItem?uid='+this.state.user.uid)
  .then((res)=>{
    console.log(res)
    let db=this.state.db;
    db.cart=res.data;
    this.setState({
      db:db
    })
  })

  

  axios.get('/getorder')
  .then((res)=>{
    console.log(res)
    let db=this.state.db;
    db.order=res.data;
    this.setState({
      db:db
    })
  })

  axios.get('/getAddress')
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

  let obj={id:item.id, name:item.name, price:item.price, image:item.image, uid:this.state.user.uid}
  axios.post('/showcart',obj)
  .then((res)=>{
    console.log(res)
  })
  let db = this.state.db;
  item.quantity = 1;
  db.cart.push(item);
  this.setState(
    {db:db}
  )
   }

 addProductToOrder(item){
  console.log(item)
  let db = this.state.db;
  item.quantity = 1;
  db.order.push(item);
  this.setState(
    {db:db}
  )
    
   }

 deleteFromCart(i){
  let x = this.state.db.cart;
console.log(i);
console.log(x[i]);

  axios.delete('/deleteCartItem/' + x[i]._id)
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
  axios.get(`/sortAscending/${this.state.value}`)
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
  
  axios.get(`/sortDescending/${this.state.value}`)
  .then((res)=>{
    console.log(res);
    let db = this.state.db;
  db.products = res.data;
    this.setState({
       db:db
    })
  })
}



filter500(){
  console.log(this.state.value);
  axios.get(`/filter500/${this.state.value}`)
  .then((res)=>{
    console.log(res);
    let db=this.state.db;
    db.products=res.data;
    this.setState({
      db:db
    })
  })
}

filter0(){
  axios.get(`/filter0/${this.state.value}`)
  .then((res)=>{
    console.log(res);
    let db=this.state.db;
    db.products=res.data;
    this.setState({
      db:db
    })
  })
}

filter1500(){
  axios.get(`/filter1500/${this.state.value}`)
  .then((res)=>{
    console.log(res);
    let db=this.state.db;
    db.products=res.data;
    this.setState({
      db:db
    })
  })
}

filter2500(){
  axios.get(`/filter2500/${this.state.value}`)
  .then((res)=>{
    console.log(res);
    let db=this.state.db;
    db.products=res.data;
    this.setState({
      db:db
    })
  })
}

filter5000(){
  axios.get(`/filter5000/${this.state.value}`)
  .then((res)=>{
    console.log(res);
    let db=this.state.db;
    db.products=res.data;
    this.setState({
      db:db
    })
  })
}

AD(){
  axios.get(`/AD/${this.state.value}`)
  .then((res)=>{
    console.log(res);
    let db=this.state.db;
    db.products=res.data;
    this.setState({
      db:db
    })
  })
}
AM(){
axios.get(`/AM/${this.state.value}`)
  .then((res)=>{
    console.log(res);
    let db=this.state.db;
    db.products=res.data;
    this.setState({
      db:db
    })
  })
}
VJ(){
  axios.get(`/VJ/${this.state.value}`)
  .then((res)=>{
    console.log(res);
    let db=this.state.db;
    db.products=res.data;
    this.setState({
      db:db
    })
  })
}
wedding(){
  axios.get(`/wedding/${this.state.value}`)
  .then((res)=>{
    console.log(res);
    let db=this.state.db;
    db.products=res.data;
    this.setState({
      db:db
    })
  })
}
diwali(){
  axios.get(`/diwali/${this.state.value}`)
  .then((res)=>{
    console.log(res);
    let db=this.state.db;
    db.products=res.data;
    this.setState({
      db:db
    })
  })
}
navratra(){
  axios.get(`/navratra/${this.state.value}`)
  .then((res)=>{
    console.log(res);
    let db=this.state.db;
    db.products=res.data;
    this.setState({
      db:db
    })
  })
}
best(){
  axios.get(`/best/${this.state.value}`)
  .then((res)=>{
    console.log(res);
    let db=this.state.db;
    db.products=res.data;
    this.setState({
      db:db
    })
  })
}



newArrival(){
  axios.get(`/newArrival/${this.state.value}`)
  .then((res)=>{
    console.log(res);
    let db=this.state.db;
    db.products=res.data;
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
      <Navigation  hey={this.hey.bind(this)}  hello={this.hello.bind(this)} googleLogin={this.googleLogin.bind(this)}/>
      <Route path="/" exact component={ControlledCarousel} />
      <Route path="/" exact  render={(props)=><Cards {...props} hello={this.hello}></Cards>} />
      <br></br>
      <Route path="/" exact component={InfoBox} />
      <br></br>
      
      

      {/* <Route path="/login/" exact render={()=> <Login googleLogin={this.googleLogin.bind(this)} />} /> */}
      {/* <Route path="/signup/" component={Signup} /> */}
      <Route path='/pendant/' render={()=> <Pendant db={this.state.db} hello={this.hello.bind(this)} addProduct={this.addProductToCart.bind(this)} addOrder={this.addProductToOrder.bind(this)}  sortAscending={this.sortAscending.bind(this)}  sortDescending={this.sortDescending.bind(this)} itemDetail={this.itemDetail.bind(this)} filter0={this.filter0.bind(this)} filter500={this.filter500.bind(this)} filter1500={this.filter1500.bind(this)} filter2500={this.filter2500.bind(this)} filter5000={this.filter5000.bind(this)} AD={this.AD.bind(this)} VJ={this.VJ.bind(this)} AM={this.AM.bind(this)} wedding={this.wedding.bind(this)} diwali={this.diwali.bind(this)} navratra={this.navratra.bind(this)} best={this.best.bind(this)} newArrival={this.newArrival.bind(this)} /> } />
    < Route path='/earring/' render={()=> <Earring db={this.state.db} hello={this.hello.bind(this)} addProduct={this.addProductToCart.bind(this)} addOrder={this.addProductToOrder.bind(this)}  sortAscending={this.sortAscending.bind(this)}  sortDescending={this.sortDescending.bind(this)} itemDetail={this.itemDetail.bind(this)} filter0={this.filter0.bind(this)} filter500={this.filter500.bind(this)} filter1500={this.filter1500.bind(this)} filter2500={this.filter2500.bind(this)} filter5000={this.filter5000.bind(this)} AD={this.AD.bind(this)} VJ={this.VJ.bind(this)} AM={this.AM.bind(this)} wedding={this.wedding.bind(this)} diwali={this.diwali.bind(this)} navratra={this.navratra.bind(this)} best={this.best.bind(this)} newArrival={this.newArrival.bind(this)} /> } />
    < Route path='/necklace/' render={()=> <Necklace db={this.state.db} hello={this.hello.bind(this)} addProduct={this.addProductToCart.bind(this)} addOrder={this.addProductToOrder.bind(this)}  sortAscending={this.sortAscending.bind(this)}  sortDescending={this.sortDescending.bind(this)} itemDetail={this.itemDetail.bind(this)} filter0={this.filter0.bind(this)} filter500={this.filter500.bind(this)} filter1500={this.filter1500.bind(this)} filter2500={this.filter2500.bind(this)} filter5000={this.filter5000.bind(this)} AD={this.AD.bind(this)} VJ={this.VJ.bind(this)} AM={this.AM.bind(this)} wedding={this.wedding.bind(this)} diwali={this.diwali.bind(this)} navratra={this.navratra.bind(this)} best={this.best.bind(this)} newArrival={this.newArrival.bind(this)} /> } />
    < Route path='/jhumki/' render={()=> <Jhumki db={this.state.db} hello={this.hello.bind(this)} addProduct={this.addProductToCart.bind(this)} addOrder={this.addProductToOrder.bind(this)}  sortAscending={this.sortAscending.bind(this)}  sortDescending={this.sortDescending.bind(this)} itemDetail={this.itemDetail.bind(this)} filter0={this.filter0.bind(this)} filter500={this.filter500.bind(this)} filter1500={this.filter1500.bind(this)} filter2500={this.filter2500.bind(this)} filter5000={this.filter5000.bind(this)} AD={this.AD.bind(this)} VJ={this.VJ.bind(this)} AM={this.AM.bind(this)} wedding={this.wedding.bind(this)} diwali={this.diwali.bind(this)} navratra={this.navratra.bind(this)} best={this.best.bind(this)} newArrival={this.newArrival.bind(this)} /> } />
    < Route path='/mangalsutra/' render={()=> <Mangalsutra db={this.state.db} hello={this.hello.bind(this)} addProduct={this.addProductToCart.bind(this)} addOrder={this.addProductToOrder.bind(this)}  sortAscending={this.sortAscending.bind(this)}  sortDescending={this.sortDescending.bind(this)} itemDetail={this.itemDetail.bind(this)} filter0={this.filter0.bind(this)} filter500={this.filter500.bind(this)} filter1500={this.filter1500.bind(this)} filter2500={this.filter2500.bind(this)} filter5000={this.filter5000.bind(this)} AD={this.AD.bind(this)} VJ={this.VJ.bind(this)} AM={this.AM.bind(this)} wedding={this.wedding.bind(this)} diwali={this.diwali.bind(this)} navratra={this.navratra.bind(this)} best={this.best.bind(this)} newArrival={this.newArrival.bind(this)} /> } />
    < Route path='/bangle/' render={()=> <Bangle db={this.state.db} hello={this.hello.bind(this)} addProduct={this.addProductToCart.bind(this)} addOrder={this.addProductToOrder.bind(this)}  sortAscending={this.sortAscending.bind(this)}  sortDescending={this.sortDescending.bind(this)} itemDetail={this.itemDetail.bind(this)} filter0={this.filter0.bind(this)} filter500={this.filter500.bind(this)} filter1500={this.filter1500.bind(this)} filter2500={this.filter2500.bind(this)} filter5000={this.filter5000.bind(this)} AD={this.AD.bind(this)} VJ={this.VJ.bind(this)} AM={this.AM.bind(this)} wedding={this.wedding.bind(this)} diwali={this.diwali.bind(this)} navratra={this.navratra.bind(this)} best={this.best.bind(this)} newArrival={this.newArrival.bind(this)} /> } />
    < Route path='/chain/' render={()=> <Chain db={this.state.db} hello={this.hello.bind(this)} addProduct={this.addProductToCart.bind(this)} addOrder={this.addProductToOrder.bind(this)}  sortAscending={this.sortAscending.bind(this)}  sortDescending={this.sortDescending.bind(this)} itemDetail={this.itemDetail.bind(this)} filter0={this.filter0.bind(this)} filter500={this.filter500.bind(this)} filter1500={this.filter1500.bind(this)} filter2500={this.filter2500.bind(this)} filter5000={this.filter5000.bind(this)} AD={this.AD.bind(this)} VJ={this.VJ.bind(this)} AM={this.AM.bind(this)} wedding={this.wedding.bind(this)} diwali={this.diwali.bind(this)} navratra={this.navratra.bind(this)} best={this.best.bind(this)} newArrival={this.newArrival.bind(this)} /> } />
    < Route path='/nosepin/' render={()=> <Nosepin db={this.state.db} hello={this.hello.bind(this)} addProduct={this.addProductToCart.bind(this)} addOrder={this.addProductToOrder.bind(this)}  sortAscending={this.sortAscending.bind(this)}  sortDescending={this.sortDescending.bind(this)} itemDetail={this.itemDetail.bind(this)} filter0={this.filter0.bind(this)} filter500={this.filter500.bind(this)} filter1500={this.filter1500.bind(this)} filter2500={this.filter2500.bind(this)} filter5000={this.filter5000.bind(this)} AD={this.AD.bind(this)} VJ={this.VJ.bind(this)} AM={this.AM.bind(this)} wedding={this.wedding.bind(this)} diwali={this.diwali.bind(this)} navratra={this.navratra.bind(this)} best={this.best.bind(this)} newArrival={this.newArrival.bind(this)} /> } />
    < Route path='/ring/' render={()=> <Ring db={this.state.db} hello={this.hello.bind(this)} addProduct={this.addProductToCart.bind(this)} addOrder={this.addProductToOrder.bind(this)}  sortAscending={this.sortAscending.bind(this)}  sortDescending={this.sortDescending.bind(this)} itemDetail={this.itemDetail.bind(this)} filter0={this.filter0.bind(this)} filter500={this.filter500.bind(this)} filter1500={this.filter1500.bind(this)} filter2500={this.filter2500.bind(this)} filter5000={this.filter5000.bind(this)} AD={this.AD.bind(this)} VJ={this.VJ.bind(this)} AM={this.AM.bind(this)} wedding={this.wedding.bind(this)} diwali={this.diwali.bind(this)} navratra={this.navratra.bind(this)} best={this.best.bind(this)} newArrival={this.newArrival.bind(this)} /> } />
    < Route path='/watch/' render={()=> <Watch db={this.state.db} hello={this.hello.bind(this)} addProduct={this.addProductToCart.bind(this)} addOrder={this.addProductToOrder.bind(this)}  sortAscending={this.sortAscending.bind(this)}  sortDescending={this.sortDescending.bind(this)} itemDetail={this.itemDetail.bind(this)} filter0={this.filter0.bind(this)} filter500={this.filter500.bind(this)} filter1500={this.filter1500.bind(this)} filter2500={this.filter2500.bind(this)} filter5000={this.filter5000.bind(this)} AD={this.AD.bind(this)} VJ={this.VJ.bind(this)} AM={this.AM.bind(this)} wedding={this.wedding.bind(this)} diwali={this.diwali.bind(this)} navratra={this.navratra.bind(this)} best={this.best.bind(this)} newArrival={this.newArrival.bind(this)} /> } />
    < Route path='/american/' render={()=> <American db={this.state.db} hey={this.hey.bind(this)} addProduct={this.addProductToCart.bind(this)} addOrder={this.addProductToOrder.bind(this)}  sortAscending={this.sortAscending.bind(this)}  sortDescending={this.sortDescending.bind(this)} itemDetail={this.itemDetail.bind(this)} filter0={this.filter0.bind(this)} filter500={this.filter500.bind(this)} filter1500={this.filter1500.bind(this)} filter2500={this.filter2500.bind(this)} filter5000={this.filter5000.bind(this)} AD={this.AD.bind(this)} VJ={this.VJ.bind(this)} AM={this.AM.bind(this)} wedding={this.wedding.bind(this)} diwali={this.diwali.bind(this)} navratra={this.navratra.bind(this)} best={this.best.bind(this)} newArrival={this.newArrival.bind(this)} /> } />
    < Route path='/victorian/' render={()=> <Victorian db={this.state.db} hey={this.hey.bind(this)} addProduct={this.addProductToCart.bind(this)} addOrder={this.addProductToOrder.bind(this)}  sortAscending={this.sortAscending.bind(this)}  sortDescending={this.sortDescending.bind(this)} itemDetail={this.itemDetail.bind(this)} filter0={this.filter0.bind(this)} filter500={this.filter500.bind(this)} filter1500={this.filter1500.bind(this)} filter2500={this.filter2500.bind(this)} filter5000={this.filter5000.bind(this)} AD={this.AD.bind(this)} VJ={this.VJ.bind(this)} AM={this.AM.bind(this)} wedding={this.wedding.bind(this)} diwali={this.diwali.bind(this)} navratra={this.navratra.bind(this)} best={this.best.bind(this)} newArrival={this.newArrival.bind(this)} /> } />
    < Route path='/antique/' render={()=> <Antique db={this.state.db} hey={this.hey.bind(this)} addProduct={this.addProductToCart.bind(this)} addOrder={this.addProductToOrder.bind(this)}  sortAscending={this.sortAscending.bind(this)}  sortDescending={this.sortDescending.bind(this)} itemDetail={this.itemDetail.bind(this)} filter0={this.filter0.bind(this)} filter500={this.filter500.bind(this)} filter1500={this.filter1500.bind(this)} filter2500={this.filter2500.bind(this)} filter5000={this.filter5000.bind(this)} AD={this.AD.bind(this)} VJ={this.VJ.bind(this)} AM={this.AM.bind(this)} wedding={this.wedding.bind(this)} diwali={this.diwali.bind(this)} navratra={this.navratra.bind(this)} best={this.best.bind(this)} newArrival={this.newArrival.bind(this)} /> } />
    <Route path="/item1/" render={()=> <Item db={this.state.db} addProduct={this.addProductToCart.bind(this)} addOrder={this.addProductToOrder.bind(this)}/>}   />
      <Route path="/cart/" render={()=> <Cart db={this.state.db} changeQuantity={this.changeQuantity.bind(this)} addOrder={this.addProductToOrder.bind(this)} deleteItem={this.deleteFromCart.bind(this)} itemDetail={this.itemDetail.bind(this)} />} />
      <Route path="/review/" component={Review} />
      <Route path="/payment/" component={Payment} />
      <Route path="/placed/" component={Placed} />
      <Route path="/address/" render={()=> <Address db={this.state.db} addOrder={this.addProductToOrder.bind(this)}/>} />
      <Route path="/help/" component={Help} />  
      <Route path="/drawer/" component={Drawer1} />
      {/* <Route path="/track/" render={()=> <Track db={this.state.db} />} />  */}
      <Route path="/order/" render={(props)=> <Order {...props}  db={this.state.db}  />} />  
      <Route path="/return/" render={()=> <Return db={this.state.db} />} />  
      <Route path="/replace/" render={()=> <Replace db={this.state.db} />} />  
      <Route path="/store/" component={Store} />
      <Route path="/feedback/" component={Feedback} />
      {/* <Route path="/return_res/" component={Return_res} /> */}
      {/* <Route path="/cancel_res/" component={Cancel_res} /> */}
            


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
