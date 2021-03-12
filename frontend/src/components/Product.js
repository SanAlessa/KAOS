import { useEffect, useState } from "react"
import { connect } from 'react-redux'
import purchaseAction from "../redux/actions/purchaseAction"
import clothesActions from '../redux/actions/clothesActions'
import Footer from './Footer'
import '../styles/product.css'
// import fotoPrueba from '../assets/style.jpg'
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
    const [prueba,setPrueba]=useState([])
    const [selected, setSelected]= useState ()
    const [color, setColor] = useState([])
    const [visible, setVisible] = useState(false)
    const [id, setId] = useState('')
    const url = props.match.params.id
    const oneProduct = props.oneCloth.filter(product => product._id === url)
    const [product, setProduct] = useState({})

    if(selected) var realStock = selected.quantity

    const fetch = async () => {
        await props.getOne(url)
        await props.getClothes()
      }

    useEffect(() => {
        setProduct({...product, stock:realStock})
    }, [realStock])

    useEffect(() => {
        fetch()
        if(props.oneCloth.length>0){
            setProduct({
                id: '', name: props.oneCloth[0].name, image: props.oneCloth[0].stock[0].images[0],
                price: props.oneCloth[0].price, description: props.oneCloth[0].description, 
                color: props.oneCloth[0].stock[0].color, size: '', quantity: 1, stock: 0
            })
        }
        window.scrollTo(0,0) 
    }, [url])

    useEffect(()=>{
        if(product.name){
            setPrueba(props.oneCloth[0].stock.filter(stock=> stock.color === product.color))
        }
        if (prueba.length > 0){
            setSelected(prueba[0].size.find(size=> size.size === product.size && size))
        }
    },[product])
    
    useEffect(()=>{
        if(props.oneCloth.length >0){
            setProduct({
                id: '', name: props.oneCloth[0].name, image: props.oneCloth[0].stock[0].images[0],
                price: props.oneCloth[0].price, description: props.oneCloth[0].description,
                color: props.oneCloth[0].stock[0].color, size: '', quantity: 1, stock: 0 
            })
            setImages(props.oneCloth[0].stock[0].images)
            
        }
    },[props.oneCloth])

    const Click = (value) => {
        var colorFilter = props.oneCloth[0].stock.filter(color => color.color === value)
        setColor(colorFilter)
        setImages(colorFilter[0].images)
        setVisible(true)
        setProduct({ ...product, image: colorFilter[0].images[0], color: value })
    }
    console.log(product)
    const addToCart = () => {
        if (props.loggedUser){
            if(product.size!==""){
                var productFiltered = props.cart.find(cloth=> cloth.name+cloth.color+cloth.size === product.name+product.color+product.size )
                 if(productFiltered){
                var condition = (productFiltered.name+productFiltered.color+productFiltered.size) 
                props.cart.map(cart=>(condition === (cart.name+cart.color+cart.size)) && cart.quantity++)
                props.forceReload(!props.reload)
                }else
                props.checkout(product)
                props.forceReload(!props.reload)
                Alert.success("Producto agregado al carrito", 4000)
        }else{
            Alert.error("Selecciona un talle por favor", 3000)
        }
        
        } else {
            Alert.error("Necesitas ingresar a tu cuenta para empezar a comprar", 3000)
        }
        
    }

    return (
        <>
            {oneProduct.length === 0 ? <Loader/> : 
            <>
            <div className='contenedorGeneralProduct' style={{ display: 'flex', flexDirection: 'column' }}>
                
                <div className="mainProduct" style={{ height: '100vh' }}>
                    <div className='mainProduct2' style={{ display: 'flex', width: '100%', height: '90%', justifyContent: 'space-evenly' }}>
                        <div className="cajaPrueba">
                            {images.length > 0 && images.length === 1 ? <div className='unaFotito' style={{ backgroundImage: `url(${images[0]})` }}></div> 
                            : images.map((color, index) => <div key={uuid()} className='pruebaFotitos' style={{ backgroundImage: `url(${color})` }}></div>)}
                        </div>
                        <div className="detallesProduct">
                            <div className="precioDet">
                                <p className="tituloPrenda">{oneProduct[0].name.toUpperCase()}</p>
                                <p className="precio">${oneProduct[0].price}</p>
                                <div className="colores">
                                    <p className="titulos">COLORES</p>
                                    <div style={{ display: "flex", justifyContent: "flex-start", width: '25vw', height: '5vh' }}>
                                        {oneProduct[0].stock.map(color => <div key={uuid()} className="color" style={{ backgroundColor: color.color}} onClick={() => Click(color.color)}></div>)}

                                    </div>
                                </div>
                                <div style={{height:'30%'}}>
                                    <p className="titulos">TALLES</p>
                                    <div style={{ display: "flex", justifyContent: 'flex-start', height:'100%'}}>
                                        {visible ? color.length > 0 && color[0].size.map(size => <div key={uuid()} className="talles" id={size.size} style={{backgroundColor: id=== size.size&& "#6048a3"}} onClick={(e) => {
                                            setId(e.target.id)
                                            setProduct({ ...product, id: uuid(), size: size.size })
                                        }}>{size.size}</div>)
                                            : props.oneCloth[0].stock[0].size.map(color => <div key={uuid()} className="talles" id={color.size} style={{backgroundColor: id=== color.size&& "#6048a3"}} onClick={(e) =>{
                                                setId(e.target.id)
                                                setProduct({ ...product, id: uuid(), size: color.size })
                                            } }>{color.size}</div>)}
                                    </div>

                                </div>
                            </div>
                            <button className='botonComprar' onClick={addToCart} style={{ textAlign: "center" }}>Añadir al carrito</button>
                            <div>
                                <p className="titulos">DESCRIPCIÓN:</p>
                                <p className="descripcion">{oneProduct[0].description}</p>
                            </div>

                        </div>
                    </div>

                </div>
               
                <div className="mainProduct" style={{ height: '100vh' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p className="tituloMedio">NEW SEASON IS HERE!</p>
                    </div>
                    
                    <div className="cardsProducts">
                        {props.lastClothes.map(card => {
                            return (
                                <Link className="clothCardLink" to={`/product/${card._id}`} key={card._id}>
                                    <div className="clothCard" style={{ backgroundImage: `url(${card.stock[0].images[0]})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                    <div className="otros" style={{ height: '30%', width: '100%' }}>
                        <Link to={{ pathname: '/productStore', state: 'Camisas' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={camisas} style={{ width: '40%', height: '90%' }} alt="camisas"></img>
                                <p style={{ width: '100%', textAlign: 'center' }}>CAMISAS</p>
                            </div>
                        </Link>
                        <Link to={{ pathname: '/productStore', state: 'Remeras' }}>

                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={remeras} style={{ width: '40%', height: '90%' }} alt="remeras"></img>
                                <p style={{ width: '100%', textAlign: 'center' }}>REMERAS</p>
                            </div >
                        </Link>

                        <Link to={{ pathname: '/productStore', state: 'Buzos' }}>
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={buzos} style={{ width: '40%', height: '90%' }} alt="buzos"></img>
                                <p style={{ width: '100%', textAlign: 'center' }}>BUZOS</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            </>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.purchaseR.checkout,
        loggedUser: state.userR.loggedUser,
        clothes: state.clothesR.clothes,
        reload: state.purchaseR.reload,
        lastClothes: state.clothesR.lastClothes,
        oneCloth:state.clothesR.oneCloth
    }
}

const mapDispatchToProps = {
    checkout: purchaseAction.checkout,
    forceReload: purchaseAction.forceReload,
    getClothes: clothesActions.getClothes,
    getOne: clothesActions.getOne
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)