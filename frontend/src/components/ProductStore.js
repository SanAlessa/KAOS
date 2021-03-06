import React, { useState } from 'react'
import CartCards from './CartCards'
import CartPurchase from './CartPurchase'
import {Link} from 'react-router-dom'
// import { connect } from 'react-redux'

const ProductStore = () => {
    const products = [
        {
            "id": 1,
            "title": "Cat Tee Black T-Shirt 1",
            "description": "4 MSL",
            "availableSizes": ["S", "XS"],
            "category": "Black with custom print",
            "price": 10.91,
            "stock": 9,
            "productPic": 'https://www.guantexindustrial.com.ar/710-large_default/remera-algodon-jersey-blanco-talle-xxl.jpg'
        },
        {
            "id": 2,
            "title": "Cat Tee Black T-Shirt 2",
            "description": "4 MSL",
            "availableSizes": ["S", "XS"],
            "category": "Black with custom print",
            "price": 10.92,
            "stock": 9,
            "productPic": 'https://www.guantexindustrial.com.ar/710-large_default/remera-algodon-jersey-blanco-talle-xxl.jpg'
        },
        {
            "id": 3,
            "title": "Cat Tee Black T-Shirt 3",
            "description": "4 MSL",
            "availableSizes": ["S", "XS"],
            "category": "Black with custom print",
            "price": 10.93,
            "stock": 9,
            "productPic": 'https://www.guantexindustrial.com.ar/710-large_default/remera-algodon-jersey-blanco-talle-xxl.jpg'
        },
        {
            "id": 4,
            "title": "Cat Tee Black T-Shirt 4",
            "description": "4 MSL",
            "availableSizes": ["S", "XS"],
            "category": "Black with custom print",
            "price": 10.94,
            "stock": 9,
            "productPic": 'https://www.guantexindustrial.com.ar/710-large_default/remera-algodon-jersey-blanco-talle-xxl.jpg'
        },
        {
            "id": 5,
            "title": "Cat Tee Black T-Shirt 5",
            "description": "4 MSL",
            "availableSizes": ["S", "XS"],
            "category": "Black with custom print",
            "price": 10.95,
            "stock": 9,
            "productPic": 'https://www.guantexindustrial.com.ar/710-large_default/remera-algodon-jersey-blanco-talle-xxl.jpg'
        },
    ]
    const [cart, setCart] = useState([])
    console.log(cart)
    return(
        <>
        <div className='containerProductsStore'>
            {products.map(product => {
                return(
                        <Link to={`/product/${product.id}`}><CartCards from  key={product.id} product={product} cart={cart} setCart={setCart} products ={products}/></Link>
                )
            })}
        <CartPurchase cart={cart} setCart={setCart}/>
        </div>

        </>
    )
}


/* ----- Connect to Redux ----- */
/*mapStateToProps = state => {
    return{

    }
}

mapDispatchToProps = {

}*/
export default /*connect(mapStateToProps, mapDispatchToProps)*/(ProductStore)