import { useEffect, useState } from "react"

const CardClothing = (props) => {
    console.log(props)
    const {id, title, description, availableSizes, category, price, stock, productPic} = props.product

    const addProduct = id => {
        // const product = products.filter(product => product.id === id)
    }
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
            <button type='button' onClick= {() => addProduct(id)}>Agregar al carrito</button>
        </div>
        </>
    )
}

export default CardClothing