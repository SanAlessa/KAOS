import React, { useState, useEffect } from 'react'
import CardClothing from './CardClothing'
import CartPurchase from './CartPurchase'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import clothesActions from '../redux/actions/clothesActions'
import { PromiseProvider } from 'mongoose'
import { connect } from 'react-redux'

const ProductStore = (props) => {
    
    useEffect(async()=>{
        await props.getClothes()
    }, [])
    const [cart, setCart] = useState([])
    return (
        <>
            <div className="main">
                <div className='containerProductsStore'>
                    {props.clothes.map(product => {
                        return (
                            <Link to={`/product/${product._id}`}><CardClothing from  key={product.id} product={product} cart={cart} setCart={setCart} products ={product}/></Link>
                        )
                    })}
                </div>
            </div>
            {/* <Footer/> */}

        </>
    )
}


const mapStateToProps = state => {
    return {
      clothes: state.clothesR.clothes
    }
  }
  
  const mapDispatchToProps = {
    getClothes: clothesActions.getClothes
  }
export default connect(mapStateToProps, mapDispatchToProps)(ProductStore)