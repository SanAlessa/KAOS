import { useEffect, useState } from "react"
import { connect } from "react-redux"
import clothesActions from '../redux/actions/clothesActions'

const Product = (props)=>{
    const [images,setImages]=useState([])
    const [color, setColor]= useState([])
    const [visible,setVisible]=useState(false)

    const url = props.match.params.id
    const oneProduct= props.clothes.filter(product=>product._id === url)
    useEffect(()=>{
        setImages(oneProduct[0].stock[0].images) 
    },[])
    const Click = (value)=>{
        var colorFilter= oneProduct[0].stock.filter(color=>color.color === value)
        setColor(colorFilter)
        setImages(colorFilter[0].images)
        setVisible(true)
        alert(`hiciste click en ${value}`)
    }
    console.log(images)
    return (
        <>
            <div>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <div className="cajaPrueba">
                        {images.length>0 && images.map((color,index)=><div className='pruebaFotitos' style={{backgroundImage: `url(${color})`}}></div>)}
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
                                {visible ? color.length > 0 && color[0].size.map(size=><div>{size.size}</div>):oneProduct[0].stock[0].size.map(color => <div>{color.size}</div>)}
                            </div>
                        </div>
                        <div className='botonComprar' style={{textAlign:"center"}}>Comprar</div>
                        <div>
                            <p>Descripcion</p>
                            <p>{oneProduct[0].description}</p>
                        </div>
                    </div>
                </div>
                <div>Aca van a ir fotos de recomendaciones(otros productos)</div>
                <div>y aca no se, algo que complete</div>
            </div>
        </>
    ) 
}
const mapStateToProps = state => {
    return {
      clothes: state.clothesR.clothes
    }
  }
  
export default connect(mapStateToProps)(Product)