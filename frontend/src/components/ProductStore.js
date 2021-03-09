import React, { useState, useEffect } from 'react'
import CardClothing from './CardClothing'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import clothesActions from '../redux/actions/clothesActions'
import { connect } from 'react-redux'
import Loader from './Loader'

const ProductStore = (props) => {
  const [cart, setCart] = useState([])
  
  useEffect(() => {
    fetch()
  }, [])
  
  const fetch = async () => {
    await props.getClothes()
  }
  
  if (props.clothes.length === 0) {
    return <Loader />
  }
    return (
        <>
            <div className="main">
                <div className='containerProductsStore'>
                    {props.clothes.map(product => {
                        return (
                            
                            <div className='containerCardMapping'>
                            <Link to={`/product/${product._id}`}>
                                <CardClothing from  key={product.id} product={product} cart={cart} setCart={setCart} products ={product}/>
                            </Link>
                            </div>
                            
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