import { connect } from 'react-redux'
import CartCards from './CartCards'

const CartPurchase = ({products, deleteProduct, checkout}) => {
    return(
        <>
            <div className='containerCart'>
                { products && products.length === 0 ? <h6 className='titulo5'>Empezá a comprar</h6> :
                <>
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