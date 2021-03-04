import CardClothing from './CardClothing'

const CartPurchase = ({cart, setCart}) => {
    console.log(cart)
    return(
        <>
            <div className='containerCart'>
                <h1>CartPurchase</h1>
                {cart.length === 0 ? <p>Empezá a comprar</p> :
                <>
                <h2>Tu compra</h2>
                {cart.map(productAdded => <CardClothing key={productAdded.id} product={productAdded} cart={cart} setCart={setCart} />)}
                </>}
            </div>
            <button>Finaliza Compra</button>
        </>
    )
}

//  Acá va el dispatch substract Opción 2


export default CartPurchase