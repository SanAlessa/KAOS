import { connect } from 'react-redux'
import CartCards from './CartCards'
import {BiPurchaseTagAlt} from 'react-icons/bi'

const CartPurchase = ({products, deleteProduct, checkout}) => {
    console.log(checkout)
    return(
        <>
            <div className='containerCart'>
                { products && products.length === 0 ? <h6>Empezá a comprar</h6> :
                <>
                <h6 className="titulo3"><BiPurchaseTagAlt/> TU COMPRA</h6>
                <div className ='containerPurchase'>
                    {products &&  products.length > 0 && products.map(product => <CartCards key={product.id} product={product} />)}
                </div>
                </>
                }
            </div>
        </>
    )
}

const mapStateToProps = state => {
  return {
    checkout: state.purchaseR.checkout,
    reload: state.purchaseR.reload

  }
}

export default connect(mapStateToProps)(CartPurchase)