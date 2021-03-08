import { useState } from "react"
import {connect} from 'react-redux'
import purchaseAction from '../redux/actions/purchaseAction'

const CartCards = ({product, incOne, substOne, deleteClothes, deleteTheProduct}) => {

    const {id, name, description, price, stock, image} = product

    const [cantidad, setCantidad] = useState(1)

    const deleteProduct = e => {
        deleteClothes(product)
    
    }

    const subQuantity = () => {
        setCantidad((cantidad-1) < 1 ? (alert('No se pueden quitar más productos'), cantidad ): (cantidad-1))
        substOne(product)
    }

    const incQuantity = () => {
        setCantidad((cantidad+1) > stock ? (alert('No hay más productos disponibles'), cantidad) : (cantidad+1))
        incOne(product)
    }

    return(
        <>
        <div className='containerCartCards' style={{width: '15vw', margin: '10vw'}}>
            <div className='containerPhotoClothing' style={{backgroundImage: `url(${image})`}}></div>
            <div className='containerTitle'>{name}</div>
            <div className='containerDescription'><p>{description}</p></div>
            <div className='containerPrice'>{`$ ${price}`}</div>
            <div className='containerQuantity' style={{width: '20vw'}}>
                <div className='subQuantity' onClick ={subQuantity}>-</div>
                <p>Cantidad: {cantidad}</p>
                <div className='incQuantity' onClick ={incQuantity}>+</div>
            </div>
            <button type='button' id= {id} onClick= {deleteProduct}>Eliminar del carrito</button>
        </div>
        </>
    )
}

const mapDispatchToProps = {
    checkout: purchaseAction.checkout,
    deleteClothes: purchaseAction.deleteClothes,
    incOne: purchaseAction.incOne,
    substOne: purchaseAction.substOne
}

export default connect(null, mapDispatchToProps)(CartCards)