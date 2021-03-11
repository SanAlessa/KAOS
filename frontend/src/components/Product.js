import { useEffect, useState } from "react"
import { connect } from 'react-redux'
import purchaseAction from "../redux/actions/purchaseAction"
import clothesActions from '../redux/actions/clothesActions'
import CartPurchase from './CartPurchase'
import Footer from './Footer'
import '../styles/product.css'
import fotoPrueba from '../assets/style.jpg'
import remeras from '../assets/remeras.png'
import camisas from '../assets/camisas.png'
import buzos from '../assets/buzos.png'
import Loader from "./Loader"
import { Link } from "react-router-dom"
import uuid from 'react-uuid'
import { Alert } from 'rsuite'
import 'rsuite/dist/styles/rsuite-default.css'


const Product = (props) => {
    const [images, setImages] = useState([])
    const [color, setColor] = useState([])
    const [visible, setVisible] = useState(false)
    const [id, setId] = useState('')
    const url = props.match.params.id
    const oneProduct = props.clothes.filter(product => product._id === url)
    const [product, setProduct] = useState({
        id: '', name: oneProduct[0].name, image: oneProduct[0].stock[0].images[0],
        price: oneProduct[0].price, description: oneProduct[0].description, color: oneProduct[0].stock[0].color, size: '', quantity: 1
    })
    const otros = [{
        "foto": '../assets/camisas.png',
        "descripcion": "CAMISAS"
    }, {
        "foto": "../assets/remeras.png",
        "descripcion": "REMERAS"
    }, {
        "foto": '../assets/buzos.png',
        "descripcion": "BUZOS"
    }]

    useEffect(() => {
        window.scrollTo(0, 0)
        setImages(oneProduct[0].stock[0].images)
    }, [url])

    const Click = (value) => {
        var colorFilter = oneProduct[0].stock.filter(color => color.color === value)
        setColor(colorFilter)
        setImages(colorFilter[0].images)
        setVisible(true)
        setProduct({ ...product, image: colorFilter[0].images[0], color: value })
    }
    const addToCart = () => {
        props.checkout(product)
        props.forceReload(!props.reload)
    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="mainProduct" style={{ height: '100vh' }}>
                    <div style={{ display: 'flex', width: '100%', height: '90%', justifyContent: 'space-evenly' }}>
                        <div className="cajaPrueba">
                            {images.length > 0 && images.length === 1 ? <div className='unaFotito' style={{ backgroundImage: `url(${images[0]})` }}>{/* {color} */}</div> : images.map((color, index) => <div className='pruebaFotitos' style={{ backgroundImage: `url(${color})` }}>{/* {color} */}</div>)}
                        </div>
                        <div className="detallesProduct">
                            <div className="precioDet">
                                <p className="tituloPrenda">{oneProduct[0].name.toUpperCase()}</p>
                                <p className="precio">${oneProduct[0].price}</p>
                                <div className="colores">
                                    <p>COLORES</p>
                                    <div style={{ display: "flex", justifyContent: "flex-start", width: '25vw', height: '5vh' }}>
                                        {oneProduct[0].stock.map(color => <div className="color" style={{ backgroundColor: color.color}} onClick={() => Click(color.color)}>{/* {color.color} */}</div>)}

                                    </div>
                                </div>
                                <div style={{height:'30%'}}>
                                    <p>TALLES</p>
                                    <div style={{ display: "flex", justifyContent: 'flex-start', height:'100%'}}>
                                        {visible ? color.length > 0 && color[0].size.map(size => <div  className="talles" id={size.size} style={{backgroundColor: id=== size.size&& "#6048a3"}} onClick={(e) => {
                                            setId(e.target.id)
                                            setProduct({ ...product, id: uuid(), size: size.size })
                                        }}>{size.size}</div>)
                                            : oneProduct[0].stock[0].size.map(color => <div className="talles" id={color.size} style={{backgroundColor: id=== color.size&& "#6048a3"}} onClick={(e) =>{
                                                setId(e.target.id)
                                                setProduct({ ...product, id: uuid(), size: color.size })
                                            } }>{color.size}</div>)}
                                    </div>

                                </div>
                            </div>
                            <button className='botonComprar' onClick={addToCart} style={{ textAlign: "center" }}>Comprar</button>
                            <div>
                                <p>DESCRIPCIÓN:</p>
                                <p>{oneProduct[0].description}</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="mainProduct" style={{ height: '100vh' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p>NEW SEASON IS HERE!</p>
                    </div>
                    <div className="cardsProducts">
                        {props.lastClothes.map(card => {
                            return (
                                <Link className="clothCardLink" to={`/product/${card._id}`}>
                                    <div className="clothCard" style={{ backgroundImage: `url(${card.stock[0].images[0]})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                    <div className="otros" style={{ height: '30%', width: '100%' }}>
                        <Link to={{ pathname: '/productStore', state: 'Camisas' }}>
                            <div style={{ width: '35vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={camisas} style={{ width: '40%', height: '90%' }}></img>
                                <p style={{ width: '100%', textAlign: 'center' }}>CAMISAS</p>
                            </div>
                        </Link>
                        <Link to={{ pathname: '/productStore', state: 'Remeras' }}>

                            <div style={{ width: '35vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={remeras} style={{ width: '40%', height: '90%' }}></img>
                                <p style={{ width: '100%', textAlign: 'center' }}>REMERAS</p>
                            </div >
                        </Link>

                        <Link to={{ pathname: '/productStore', state: 'Buzos' }}>
                            <div style={{ width: '35vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={buzos} style={{ width: '40%', height: '90%' }}></img>
                                <p style={{ width: '100%', textAlign: 'center' }}>BUZOS</p>
                            </div>
                        </Link>

                        {/* {otros.map(categoría => {
                        return (
                            <div style={{width:'33%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                <img src={categoría.foto} style={{width:'70%', height:'90%'}}></img>
                                <p style={{width:'100%', textAlign:'center'}}>{categoría.descripcion}</p>
                            </div>
                        )
                    })} */}
                    </div>


                </div>
            </div>
            {/* <CartPurchase products={props.cart} reload={reload} /> */}
            <Footer></Footer>
        </>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.purchaseR.checkout,
        clothes: state.clothesR.clothes,
        reload: state.purchaseR.reload,
        lastClothes: state.clothesR.lastClothes
    }
}

const mapDispatchToProps = {
    checkout: purchaseAction.checkout,
    forceReload: purchaseAction.forceReload,
    getClothes: clothesActions.getClothes
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)