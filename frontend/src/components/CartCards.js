import { useEffect, useState } from "react"
import { connect } from 'react-redux'
import purchaseAction from '../redux/actions/purchaseAction'
import {Alert} from 'rsuite'

const CartCards = ({product, incOne, substOne, deleteClothes, reload, forceReload}) => {
    var {id, name, price, stock, image, size, quantity} = product
    const [cantidad, setCantidad] = useState(quantity)
    useEffect(()=>{
    },[reload])

    const deleteProduct = e => {
        deleteClothes(product)
    }

    const subQuantity = () => {
        setCantidad((cantidad-1) < 1 ? (deleteProduct()) : (substOne(product), cantidad-1))
        forceReload(!reload)
    }

    const incQuantity = () => {
        setCantidad((cantidad+1) > stock ? (Alert.error("No hay mas unidades para este modelo", 3000), cantidad) : (incOne(product), cantidad+1))
        forceReload(!reload)
    }

    return(
        <div className='containerCartCards'>
            <div className='containerClothingCard'>
                <div className='containerPhotoClothing' style={{backgroundImage: `url(${image})`}}></div>
                <div className='containerDataClothing'>
                    <div className='containerTitle'>{name}</div>
                    <div className='containerSize'>Talle: {size}</div>
                    <div className='containerPrice'>{`$ ${price*quantity}`}</div>
                    <div className='containerQuantity'>
                        <div className='subQuantity' onClick ={subQuantity}>-</div>
                        <p className='quantity'>Cantidad: {quantity}</p>
                        <div className='incQuantity' onClick ={incQuantity}>+</div>
                    </div>
                </div>
            </div>
            <button type='button' className='buttonDeletePurchase' id= {id} onClick= {deleteProduct}>Eliminar del carrito</button>
        </div>
    )
}


const mapStateToProps = state => {
  return {
    reload: state.purchaseR.reload
  }
}

const mapDispatchToProps = {
  checkout: purchaseAction.checkout,
  deleteClothes: purchaseAction.deleteClothes,
  incOne: purchaseAction.incOne,
  substOne: purchaseAction.substOne,
  forceReload: purchaseAction.forceReload
}

export default connect(mapStateToProps, mapDispatchToProps)(CartCards)