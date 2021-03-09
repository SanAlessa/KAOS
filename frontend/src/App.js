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
import Payment from './components/Payment'
import userAction from './redux/actions/userAction'
import './styles.css'
import './styles/styles.css'

function App({loggedUser,logFromLS}) {
const [reload , setReload]=useState(false)

if(loggedUser){
  var routes = 
  <>
    <Switch>
    <Route exact path="/" component={Homepage}/>
    <Route path="/productStore" component={ProductStore}/>
    <Route path="/adminPanel" component={AdminPanel}/> 
    <Route path="/product/:id" component={Product}/>
    <Route path="/signIn" component={SignIn}/>
    <Route exact path='/buy' component={Buy} />
    <Route exact path='/payment' component={Payment}/>
    <Redirect to="/"/>
    </Switch>
  </>
}else if (localStorage.getItem('token')){
  logFromLS(localStorage.getItem('token'))
  .then(respuesta => {
    console.log(respuesta)
    if (respuesta === '/') setReload(!reload)
})
}else {
  routes = 
  <>
    <Switch>
    <Route exact path="/" component={Homepage}/>
    <Route path="/productStore" component={ProductStore}/>
    <Route path="/adminPanel" component={AdminPanel}/> 
    <Route path="/product/:id" component={Product}/>
    <Route path="/signIn" component={SignIn}/>
    <Route path ='/buy' component={Buy} />
    <Route path ='/payment' component={Payment}/>
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
  logFromLS: userAction.logFromLS
}
export default connect(mapStateToProps, mapDispatchToProps)(App)