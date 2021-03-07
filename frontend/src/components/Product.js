import { useEffect, useState } from "react"
import {connect} from 'react-redux'
import purchaseAction from "../redux/actions/purchaseAction"
import CartPurchase from './CartPurchase'
import Footer from './Footer'
import '../styles/product.css'
import fotoPrueba from '../assets/style.jpg'


const Product = (props)=>{
    const [images,setImages]=useState([])
    const [color, setColor]= useState([])
    const [visible,setVisible]=useState(false)
    const [reload, setReload]=useState(false)
    const url = props.match.params.id
    const oneProduct= props.clothes.filter(product=>product._id === url)
    const [product, setProduct] = useState({id:url, name: oneProduct[0].name, image: oneProduct[0].stock[0].images[0], price: oneProduct[0].price, description: oneProduct[0].description, color: oneProduct[0].stock[0].color, size: '', quantity: 1})
    const newSeason = ["1", "2", "3", "4", "5"]

    useEffect(()=>{
        setImages(oneProduct[0].stock[0].images) 
    },[])
    
    const Click = (value)=>{
        var colorFilter= oneProduct[0].stock.filter(color=>color.color === value)
        setColor(colorFilter)
        setImages(colorFilter[0].images)
        setVisible(true)
        setProduct({...product, image: colorFilter[0].images[0], color: value})
    }

    const addToCart =()=>{
        props.checkout(product)
        setReload(!reload)
    }

    return (
        <>
            <div className="mainProduct">
                <div style={{ display: 'flex', width: '100%', height: '90%', justifyContent: 'space-evenly' }}>
                    <div className="cajaPrueba">
                        {images.length > 0 && images.length === 1?  <div className='unaFotito' style={{ backgroundImage:`url(${images[0]})`}}>{/* {color} */}</div>: images.map((color, index) => <div className='pruebaFotitos' style={{ backgroundImage:`url(${color})`}}>{/* {color} */}</div>)}
                    </div>
                    <div className="detallesProduct">
                        <div className="precioDet">
                            <p className="tituloPrenda">{oneProduct[0].name.toUpperCase()}</p>
                            <p>{oneProduct[0].price}</p>
                            <div className="colores">
                                <p>COLORES</p>
                                <div style={{ display: "flex", justifyContent: "space-around", width: '45%',}}>
                                    {oneProduct[0].stock.map(color => <div style={{border:"1px solid black", backgroundColor: `${color.color}`, width: "11%", height: "3vh" }} onClick={() => Click(color.color)}>{/* {color.color} */}</div>)}

                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Talles</p>
                            <div style = {{display:"flex", justifyContent:'flex-start'}}>
                                {visible ? color.length > 0 && color[0].size.map(size=><div style={{cursor: 'pointer'}} onClick={()=>setProduct({...product, size: size.size})}>{size.size}</div>) 
                                : oneProduct[0].stock[0].size.map(color => <div style={{cursor: 'pointer'}} onClick={()=>setProduct({...product, size: color.size})}>{color.size}</div>)}
                            </div>
                        </div>
                        <div className='botonComprar' onClick={addToCart} style={{textAlign:"center"}}>Comprar</div>
                            <p>DESCRIPCIÓN</p>
                            <p>{oneProduct[0].description}</p>
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
            <CartPurchase products={props.cart} reload={reload} />
            <Footer></Footer>
        </>
    )
}

const mapStateToProps=state=>{
    return {
        cart: state.purchaseR.checkout,
        clothes: state.clothesR.clothes
    }
}

const mapDispatchToProps = {
    checkout: purchaseAction.checkout
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)
