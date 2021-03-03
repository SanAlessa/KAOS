import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CardClothing from './CardClothing'
import CartPurchase from './CartPurchase'
// import { connect } from 'react-redux'

const ProductStore = () => {
    const products = [
        {
            "id": 1,
            "title": "Cat Tee Black T-Shirt",
            "description": "4 MSL",
            "availableSizes": ["S", "XS"],
            "category": "Black with custom print",
            "price": 10.9,
            "stock": 9,
            "productPic": 'https://www.guantexindustrial.com.ar/710-large_default/remera-algodon-jersey-blanco-talle-xxl.jpg'
        },
        {
            "id": 2,
            "title": "Cat Tee Black T-Shirt",
            "description": "4 MSL",
            "availableSizes": ["S", "XS"],
            "category": "Black with custom print",
            "price": 10.9,
            "stock": 9,
            "productPic": 'https://www.guantexindustrial.com.ar/710-large_default/remera-algodon-jersey-blanco-talle-xxl.jpg'
        },
        {
            "id": 3,
            "title": "Cat Tee Black T-Shirt",
            "description": "4 MSL",
            "availableSizes": ["S", "XS"],
            "category": "Black with custom print",
            "price": 10.9,
            "stock": 9,
            "productPic": 'https://www.guantexindustrial.com.ar/710-large_default/remera-algodon-jersey-blanco-talle-xxl.jpg'
        },
        {
            "id": 4,
            "title": "Cat Tee Black T-Shirt",
            "description": "4 MSL",
            "availableSizes": ["S", "XS"],
            "category": "Black with custom print",
            "price": 10.9,
            "stock": 9,
            "productPic": 'https://www.guantexindustrial.com.ar/710-large_default/remera-algodon-jersey-blanco-talle-xxl.jpg'
        },
        {
            "id": 5,
            "title": "Cat Tee Black T-Shirt",
            "description": "4 MSL",
            "availableSizes": ["S", "XS"],
            "category": "Black with custom print",
            "price": 10.9,
            "stock": 9,
            "productPic": 'https://www.guantexindustrial.com.ar/710-large_default/remera-algodon-jersey-blanco-talle-xxl.jpg'
        },
    ]
    const [cart, setCart] = useState([])
    return(
        <>
        <div className='containerCartPurchase'>
            {products.map(product => {
                return(
                    <>
                        <CardClothing key={product.id} product={product} cart={cart} setCart={setCart} products ={products} />
                        <CartPurchase cart={cart} setCart={setCart}/>
                    </>
                )
            })}
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