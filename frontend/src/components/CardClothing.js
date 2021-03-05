import { useEffect, useState } from "react"

const CardClothing = ({product, products, cart, setCart}) => {
    const {_id, title, description, availableSizes, category, price, stock, productPic} =   product

    // const products = props.products
    // const cart = props.cart
    // const setCart = props.setCart

    const addProduct = id => {
        const product = products.filter(product => product._id === id)
        setCart([...cart, ...product])
    }
    console.log(cart)
    return(
        <>
        <div className='containerCardClothing'>
            <div className='containerPhotoClothing' style={{backgroundImage: `url(${productPic})`}}></div>
            <div className='containerTitle'>{title}</div>
            <div className='containerCategoryAndStock'>
                <div className='containerCategory'>{category}</div>
                <div className='containerStock'>{`Stock: ${stock}`}</div>
            </div>
            <div className='containerDescription'><p>{description}</p></div>
            <div className='containerPrice'>{`$ ${price}`}</div>
            {products ? (
                <button type='button' onClick= {() => addProduct(_id)}>Agregar al carrito</button>
            )
            :
            <button type='button' onClick= {() => alert('Vas a eliminar un producto')}>Eliminar del carrito</button>
            }
            

        </div>
        </>
    )
}
export default /*connect(null, mapDispatchToProps)*/(CardClothing)