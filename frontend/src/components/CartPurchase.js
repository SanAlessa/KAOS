import { connect } from 'react-redux'
import CartCards from './CartCards'
import purchaseAction from '../redux/actions/purchaseAction'

const CartPurchase = ({cart, setCart, cantidad, finalizePurchase}) => {

    const checkout = () => {
        finalizePurchase()
    }

    console.log(cart)
    return(
        <>
            <div className='containerCart'>
                <h1>CartPurchase</h1>
                {cart.length === 0 ? <p>Empezá a comprar</p> :
                <>
                <h2>Tu compra</h2>
                {cart.map(productAdded => {
                return(
                <>
                <CartCards key={productAdded.id} product={productAdded} cart={cart} setCart={setCart} />
                </>
                )})}
                </>}
            </div>
            <button onClick={checkout}>Finaliza Compra</button>
        </>
    )
}

const mapDispatchToProps = {
    finalizePurchase: purchaseAction.finalizePurchase
}


export default connect(null, mapDispatchToProps)(CartPurchase)