import React ,{useState} from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import {connect}from 'react-redux'
import AdminPanel from './pages/AdminPanel'
import Homepage from './pages/Homepage'
import ProductStore from './components/ProductStore'
import Product from './components/Product'
import Header from './components/Header'
import SignIn from './components/SignIn'
import Buy from './components/Buy'
import userAction from './redux/actions/userAction'
import purchaseAction from './redux/actions/purchaseAction'
import './styles/styles.css'
import UserProfile from './components/UserProfile'
import SendEmail from './components/SendEmail'
import Success from './components/Success'
import ForgotPassword from './components/ForgotPassword'

function App({loggedUser,logFromLS, getCart}) {
const [reload , setReload]=useState(false)

if(loggedUser){
  var routes = 
  <>
    <Switch>
    <Route exact path="/" component={Homepage}/>
    <Route path="/productStore" component={ProductStore}/>
    {loggedUser.rol === 'admin' && <Route path="/adminPanel" component={AdminPanel}/>}
    <Route path="/product/:id" component={Product}/>
    <Route exact path='/buy' component={Buy} />
    <Route exact path ='/userprofile' component={UserProfile} />
    <Route path='/reset-password/:email' component={ForgotPassword}/>
    <Route path='/success' component={Success}/>
    <Redirect to="/"/>
    </Switch>
  </>
}else if (localStorage.getItem('token')){
  logFromLS(localStorage.getItem('token'))
  .then(response=> response && setReload(!reload))
  if(localStorage.getItem('cart')) getCart(localStorage.getItem('cart'))
}else {
  routes = 
  <>
    <Switch>
    <Route exact path="/" component={Homepage}/>
    <Route path='/send-email' component={SendEmail}/>
    <Route path='/reset-password/:email' component={ForgotPassword}/>
    <Route path="/productStore" component={ProductStore}/>
    <Route path="/product/:id" component={Product}/>
    <Route path="/signIn" component={SignIn}/>
    <Redirect to="/"/>
    </Switch>
  </>

}
  return (
    <BrowserRouter>
      <Header></Header>
        {routes}
    </BrowserRouter>
  )
}
const mapStateToProps = state =>{
  return{
    loggedUser:state.userR.loggedUser
  }
}
const mapDispatchToProps = {
  logFromLS: userAction.logFromLS,
  getCart: purchaseAction.getCart
}
export default connect(mapStateToProps, mapDispatchToProps)(App)