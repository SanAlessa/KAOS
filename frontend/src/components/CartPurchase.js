import CartCards from './CartCards'
import { FaShoppingBag } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../styles/compra.css'

const CartPurchase = ({ products }) => {
    return (
        <>
            <div className='containerCart'>
                {products && products.length === 0 ?
                    <div style={{ width: '80%', margin: 'auto' }}>
                        <h4 className='titulo5'>Aún no hay productos seleccionados! Empieza a comprar ahora! →<Link to="/productStore"><FaShoppingBag style={{ marginLeft: '1vw', color: '#6048a3' }} /></Link></h4>
                    </div>
                    :
                    <>
                        <div className='containerPurchase'>
                            {products && products.length > 0 && products.map(product => <CartCards key={product.id} product={product} />)}
                        </div>
                    </>
                }
            </div>

        </>
    )
}

export default (CartPurchase)