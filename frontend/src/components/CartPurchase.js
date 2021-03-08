import { connect } from 'react-redux'
import CartCards from './CartCards'

const CartPurchase = ({products, reload, deleteProduct, checkout}) => {
    console.log(checkout)
    return(
        <>
            <div className='containerCart'>
                <h1>CartPurchase</h1>
                { products && products.length === 0 ? <p>Empezá a comprar</p> :
                <>
                <h2>Tu compra</h2>
                {products &&  products.length > 0 && products.map(product => <CartCards key={product.id} product={product} />)}
                </>
                }
            </div>
            <button >Finaliza Compra</button>
        </>
    )
}

const mapStateToProps=state=> {
    return {
        checkout: state.purchaseR.checkout
    }
}

export default connect(mapStateToProps)(CartPurchase)