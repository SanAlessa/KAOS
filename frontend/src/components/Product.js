const Product = (props)=>{
    const products = [
        {
            "_id": 1,
            "clothName": "Soy la primera card",
            "description": "4 MSL",
            "availableSizes": ["S", "XS"],
            "category": "Black with custom print",
            "price": 10.9,
            "stock": 9,
            "productPic": 'https://www.guantexindustrial.com.ar/710-large_default/remera-algodon-jersey-blanco-talle-xxl.jpg'
        },
        {
            "_id": 2,
            "clothName": "segunda card",
            "description": "4 MSL",
            "availableSizes": ["S", "XS"],
            "category": "Black with custom print",
            "price": 10.9,
            "stock": 9,
            "productPic": 'https://www.guantexindustrial.com.ar/710-large_default/remera-algodon-jersey-blanco-talle-xxl.jpg'
        },
        {
            "_id": 3,
            "clothName": "3ra card xd",
            "description": "4 MSL",
            "availableSizes": ["S", "XS"],
            "category": "Black with custom print",
            "price": 10.9,
            "stock": 9,
            "productPic": 'https://www.guantexindustrial.com.ar/710-large_default/remera-algodon-jersey-blanco-talle-xxl.jpg'
        },
        {
            "_id": 4,
            "clothName": "holiwis",
            "description": "4 MSL",
            "availableSizes": ["S", "XS"],
            "category": "Black with custom print",
            "price": 10.9,
            "stock": 9,
            "productPic": 'https://www.guantexindustrial.com.ar/710-large_default/remera-algodon-jersey-blanco-talle-xxl.jpg'
        },
        {
            "_id": 5,
            "clothName": "Cat Tee Black T-Shirt",
            "description": "4 MSL",
            "availableSizes": ["S", "XS"],
            "category": "Black with custom print",
            "price": 10.9,
            "stock": 9,
            "productPic": 'https://www.guantexindustrial.com.ar/710-large_default/remera-algodon-jersey-blanco-talle-xxl.jpg'
        },
    ]
    const url = parseInt(props.match.params.id)
    const oneProduct= products.filter(product=>product._id === url)
    console.log(oneProduct[0])
    return (
        <>
            <div>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <div>
                        <div>imagen 1</div>
                        <div>imagen 2</div>
                        <div>imagen 3</div>
                        <div>imagen 4</div>
                    </div>
                    <div>
                        <p>{oneProduct[0].clothName}</p>
                        <p>{oneProduct[0].price}</p>
                        <div>
                            <p>Colores</p>
                            <div style = {{display:"flex", justifyContent:"space-around"}}>
                                <div>color 1</div>
                                <div>color 2</div>
                            </div>
                        </div>
                        <div>
                            <p>Talles</p>
                            <div style = {{display:"flex", justifyContent:"space-around"}}>
                                <div>S</div>
                                <div>M</div>
                                <div>L</div>
                            </div>
                        </div>
                        <div style={{textAlign:"center"}}>Comprar</div>
                        <div>
                            <p>Descripcion</p>
                            <p>{oneProduct[0].description}</p>
                        </div>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </>
    ) 
}
export default Product