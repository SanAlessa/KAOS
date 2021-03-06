import React ,{useState} from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import AdminPanel from './pages/AdminPanel'
import Homepage from './pages/Homepage'
import ProductStore from './components/ProductStore'
import Register from './components/Register'
import Product from './components/Product'
import Header from './components/Header'
import SignIn from './components/SignIn'
import './styles.css'
import './styles/styles.css'
import {connect}from 'react-redux'
import userAction from './redux/actions/userAction'

function App({loggedUser,logFromLS}) {
const [reload , setReload]=useState(false)

if(loggedUser){
  var routes = <>
        <Route exact path="/" component={Homepage}/>
        <Route path="/productStore" component={ProductStore}/>
        <Route path="/adminPanel" component={AdminPanel}/> 
        <Route path="/register" component={Register}/>
        <Route path="/product/:id" component={Product}/>
        <Route path="/signIn" component={SignIn}/>
  </>
}else if (localStorage.getItem('token')){
  logFromLS(localStorage.getItem('token'))
  .then(response => response && setReload(!reload))
}
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/productStore" component={ProductStore}/>
        <Route path="/adminPanel" component={AdminPanel}/> 
        <Route path="/register" component={Register}/>
        <Route path="/product/:id" component={Product}/>
        <Route path="/signIn" component={SignIn}/>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}
const mapStateToProps = state =>{
  return{
    loggedUser:state.userR.loggedUser
  }
}
const mapDispatchToProps = {
  logFromLS: userAction.logFromLS
}
export default connect(mapStateToProps, mapDispatchToProps)(App)