const CardHistoryPurchase = ({ product }) => {

    var { name, price, image, size, quantity } = product

    return (
        <div className='containerCartCards1 cardPurchased'>
            <div className='containerClothingCards'>
                <div className='containerPhotoPurchased' style={{ backgroundImage: `url(${image})` }}>
                </div>
                <div className='containerDataClothing clothPurchased'>
                    <div className='containerTitle'>{name}</div>
                    <div className='containerSize'>Talle: {size}</div>
                    <div className='containerPrice'>{`$ ${price * quantity}`}</div>
                    <div className='containerQuantity '>
                        {quantity > 1 ?
                            <div className='quantityPurchased'>
                                Seleccionaste {quantity} unidades
                        </div> :
                            <div style={{paddingLeft: '0.5vw'}} className='quantityPurchased'>Cantidad seleccionada: {quantity} </div> 
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default (CardHistoryPurchase)