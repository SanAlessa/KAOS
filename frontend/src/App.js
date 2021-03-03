import React from 'react'
import { BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import AdminPanel from './pages/AdminPanel'
import Homepage from './components/Homepage'
import ProductsStore from './components/ProductsStore'
import Register from './components/Register'
import Productos from './components/Productos'
import './styles.css'
import './styles/styles.css'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/productsStore' component={ProductsStore}/>
        <AdminPanel/>
        <Homepage/>
        <Register/>
        <Productos/>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
