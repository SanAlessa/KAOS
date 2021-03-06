import { useEffect, useState } from "react"

const CartCards = ({product, products, cart, setCart}) => {
    const {id, title, description, availableSizes, category, price, stock, productPic} =   product

    const [cantidad, setCantidad] = useState(1)

    const addProduct = id => {
        const product = products.filter(product => product._id === id)
        setCart([...cart, ...product])
    }
    const deleteProduct = e => {
        const newCart = cart.filter(product => product.id !== parseInt(e.target.id))
        setCart(newCart)
    }
    const subQuantity = () => {
        setCantidad((cantidad-1) < 1 ? (alert('No se pueden quitar más productos'), cantidad ): (cantidad-1))
    }
    const incQuantity = () => {
        setCantidad((cantidad+1) > stock ? (alert('No hay más productos disponibles'), cantidad) : (cantidad+1))
    }

    return(
        <>
        <div className='containerCartCards'>
            <div className='containerPhotoClothing' style={{backgroundImage: `url(${productPic})`}}></div>
            <div className='containerTitle'>{title}</div>
            <div className='containerCategoryAndStock'>
                <div className='containerCategory'>{category}</div>
                <div className='containerStock'>{`Stock: ${stock}`}</div>
            </div>
            <div className='containerDescription'><p>{description}</p></div>
            <div className='containerPrice'>{`$ ${price}`}</div>
            <div className='containerQuantity'>
                <div className='subQuantity' onClick ={subQuantity}>-</div>
                <p>Cantidad: {cantidad}</p>
                <div className='incQuantity' onClick ={incQuantity}>+</div>
            </div>
            {products ? (
                <button type='button' onClick= {() => addProduct(id)}>Agregar al carrito</button>
            )
            :
            <button type='button' id= {id} onClick= {deleteProduct}>Eliminar del carrito</button>
            }
            

        </div>
        </>
    )
}
export default /*connect(null, mapDispatchToProps)*/(CartCards)