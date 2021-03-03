import './styles/styles.css'
import React from 'react'
import AdminPanel from './pages/AdminPanel'
import Homepage from './components/Homepage'
import './styles.css'
import '../src/styles.css'

import { BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import ProductsStore from './components/ProductsStore'

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path='/productsStore' component={ProductsStore}/>
        <AdminPanel/>
        <Homepage/>
      </BrowserRouter>
    </>
  );
}

export default App;
