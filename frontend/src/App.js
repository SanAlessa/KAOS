import React from 'react'
import { BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import AdminPanel from './pages/AdminPanel'
import Homepage from './pages/Homepage'
import ProductStore from './components/ProductStore'
import Register from './components/Register'
import Productos from './components/Productos'
import SignIn from './components/SignIn'
import './styles.css'
import './styles/styles.css'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/productStore" component={ProductStore}/>
        <Route path="/adminPanel" component={AdminPanel}/> 
        <Route path="/register" component={Register}/>
        <Route path="/products" component={Productos}/>
        <Route path="/signIn" component={SignIn}/>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
