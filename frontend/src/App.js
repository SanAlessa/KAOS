import React from 'react'
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
import Buy from './components/Buy'
import Payment from './components/Payment'


function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/productStore" component={ProductStore}/>
        <Route exact path='/buy' component={Buy} />
        <Route exact path='/payment' component={Payment}/>
        <Route path="/adminPanel" component={AdminPanel}/> 
        <Route path="/register" component={Register}/>
        <Route path="/product/:id" component={Product}/>
        <Route path="/signIn" component={SignIn}/>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
