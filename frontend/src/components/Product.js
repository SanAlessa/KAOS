import { useEffect, useState } from "react"
import Footer from './Footer'
import '../styles/product.css'
import fotoPrueba from '../assets/style.jpg'

const Product = (props) => {
    const [images, setImages] = useState([])
    const [color, setColor] = useState([])
    const [visible, setVisible] = useState(false)
    const products = [
        {
            stock: [
                {
                    color: "blue",
                    images: ["imagenAzul1", "imagenAzul2", "imagenAzul3", "imagenAzul4"],
                    size: [{ quantity: 2, size: "Ll" }, { quantity: 3, size: "S" }, { quantity: 4, size: "M" }]
                },
                {
                    color: "green",
                    images: ["imagenVerde1", "imagenVerde2", "imagenVerde3", "imagenVerde4"],
                    size: [{ quantity: 4, size: "L" }, { quantity: 2, size: "S" }, { quantity: 1, size: "M" }]
                },
                {
                    color: "red",
                    images: ["imagenRojo1", "imagenRojo2", "imagenRojo3", "imagenRojo4"],
                    size: [{ quantity: 4, size: "XL" }, { quantity: 2, size: "S" }, { quantity: 1, size: "M" }]
                }
            ],
            clothName: "Remera 1",
            type: "remera",
            price: "$5000",
            description: "Esta es la primera remera xd",
            _id: 1
        }
    ]
    const newSeason = ["1", "2", "3", "4", "5"]
    const url = parseInt(props.match.params.id)
    const oneProduct = products.filter(product => product._id === url)

    useEffect(() => {
        setImages(oneProduct[0].stock[0].images)
    }, [])
    const Click = (value) => {
        var colorFilter = oneProduct[0].stock.filter(color => color.color === value)
        setColor(colorFilter)
        setImages(colorFilter[0].images)
        setVisible(true)
        alert(`hiciste click en ${value}`)
    }

    return (
        <>
            <div className="mainProduct">
                <div style={{ display: 'flex', width: '100%', height: '90%', justifyContent: 'space-evenly' }}>
                    <div className="cajaPrueba">
                        {images.length > 0 && images.map((color, index) => <div className='pruebaFotitos' style={{ backgroundColor: `${index === 0 ? "blue" : index === 1 ? "red" : index === 2 ? "green" : index === 3 && "black"}` }}>{color}</div>)}
                    </div>
                    <div className="detallesProduct">
                        <div className="precioDet">
                            <p className="tituloPrenda">{oneProduct[0].clothName.toUpperCase()}</p>
                            <p>{oneProduct[0].price}</p>
                            <div className="colores">
                                <p>COLORES</p>
                                <div style={{ display: "flex", justifyContent: "space-around", width: '45%'}}>
                                    {oneProduct[0].stock.map(color => <div style={{ backgroundColor: `${color.color}`, width: "11%", height: "3vh" }} onClick={() => Click(color.color)}>{/* {color.color} */}</div>)}

                                </div>
                            </div>
                            <p>TALLES</p>
                            <div style={{ display: "flex", justifyContent: "space-around" , justifyContent:'flex-start'}}>
                                {visible ? color.length > 0 && color[0].size.map(size => <div>{size.size}</div>) : oneProduct[0].stock[0].size.map(color => <div style={{width:'10%', marginLeft:'5%'}}>{color.size}</div>)}
                            </div>
                        </div>
                        <button className='botonComprar' style={{textAlign:"center"}}>Comprar</button>
                        <div>
                            <p>DESCRIPCIÓN</p>
                            <p>{oneProduct[0].description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainProduct">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p>NEW SEASON IS HERE!</p>
                </div>
                <div className="cardsProducts">
                    {newSeason.map(card => {
                        return (
                            <div className="clothCard" style={{ backgroundImage: `url(${fotoPrueba})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            </div>
                        )
                    })}
                </div>
                <div style={{ height: '50%' }}>
                    
                </div>

            </div>
            <Footer></Footer>
        </>
    )
}
export default Product