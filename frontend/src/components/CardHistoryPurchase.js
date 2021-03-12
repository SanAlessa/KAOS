const CardHistoryPurchase = ({product}) => {

    var { name, price, image, size, quantity } = product
    
    return(
        <div className='containerCartCards cardPurchased'>
            <div className='containerClothingCard'>
                <div className='containerPhotoPurchased'>
                <div className='photoPurchased' style={{ backgroundImage: `url(${image})` }}></div>
                </div>
                <div className='containerDataClothing clothPurchased'>
                    <div className='containerTitle'>{name}</div>
                    <div className='containerSize'>Talle: {size}</div>
                    <div className='containerPrice'>{`$ ${price*quantity}`}</div>
                    <div className='containerQuantity '>
                        <p className='quantityPurchased'>Seleccionaste {quantity} unidades de este producto</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default (CardHistoryPurchase)