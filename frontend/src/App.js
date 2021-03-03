import './styles/styles.css'
import React from 'react'
import { BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import ProductsStore from './components/ProductsStore'

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path='/productsstore' component={ProductsStore}/>
      </BrowserRouter>
    </>
  );
}

export default App;
