import { useEffect, useState } from "react"
import {connect} from 'react-redux'
import purchaseAction from "../redux/actions/purchaseAction"
import CartPurchase from './CartPurchase'


const Product = (props)=>{
    const [images,setImages]=useState([])
    const [color, setColor]= useState([])
    const [visible,setVisible]=useState(false)
    const [reload, setReload]=useState(false)
    const products = [
        {
            stock: [
                {color: "blue",
                images:["imagenAzul1", "imagenAzul2", "imagenAzul3", "imagenAzul4"],
                size:[{quantity:2, size: "Ll"}, {quantity:3, size: "S"}, {quantity:4, size: "M"}]},
                {color: "green",
                images:["imagenVerde1", "imagenVerde2", "imagenVerde3", "imagenVerde4"],
                size:[{quantity:4, size: "L"}, {quantity:2, size: "S"}, {quantity:1, size: "M"}]},
                {color: "red",
                images:["imagenRojo1", "imagenRojo2", "imagenRojo3", "imagenRojo4"],
                size:[{quantity:4, size: "XL"}, {quantity:2, size: "S"}, {quantity:1, size: "M"}]}
            ],
            name: "Remera 1",
            type:"remera",
            price:"$5000",
            description:"Esta es la primera remera xd",

            _id:1
        }
    ]

    const url = parseInt(props.match.params.id)
    const [product, setProduct] = useState({id:url, name: products[0].name, image: '', price: products[0].price, description: products[0].description, color: '', size: '', quantity: 1})
    const oneProduct= products.filter(product=>product._id === url)

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
            <div>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <div className="cajaPrueba">
                        {images.length>0 && images.map((color,index)=><div className='pruebaFotitos' style={{backgroundColor:`${index === 0 ? "blue" : index ===1 ? "red" : index === 2 ? "green" : index === 3 && "black"}`}}>{color}</div>)}
                    </div>
                    <div>
                        <p>{oneProduct[0].name}</p>
                        <p>{oneProduct[0].price}</p>
                        <div>
                            <p>Colores</p>
                            <div style = {{display:"flex", justifyContent:"space-around",}}>
                            {oneProduct[0].stock.map(color=><div style={{backgroundColor:`${color.color}`, width:"20%", height:"6vh"}} onClick={()=>Click(color.color)}>{/* {color.color} */}</div>)}

                            </div>
                        </div>
                        
                        <div>
                            <p>Talles</p>
                            <div style = {{display:"flex", justifyContent:"space-around"}}>
                                {visible ? color.length > 0 && color[0].size.map(size=><div style={{cursor: 'pointer'}} onClick={()=>setProduct({...product, size: size.size})}>{size.size}</div>) 
                                : oneProduct[0].stock[0].size.map(color => <div style={{cursor: 'pointer'}} onClick={()=>setProduct({...product, size: color.size})}>{color.size}</div>)}
                            </div>
                        </div>
                        <div className='botonComprar' onClick={addToCart} style={{textAlign:"center"}}>Comprar</div>
                        <div>
                            <p>Descripcion</p>
                            <p>{oneProduct[0].description}</p>
                        </div>
                    </div>
                </div>
                <div>Aca van a ir fotos de recomendaciones(otros productos)</div>
                <CartPurchase products={props.cart} reload={reload} />
            </div>
        </>
    ) 
}

const mapStateToProps=state=>{
    return {
        cart: state.purchaseR.checkout
    }
}

const mapDispatchToProps = {
    checkout: purchaseAction.checkout
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)