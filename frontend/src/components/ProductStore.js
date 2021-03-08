import React, { useState, useEffect } from 'react'
import CardClothing from './CardClothing'
import CartPurchase from './CartPurchase'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import clothesActions from '../redux/actions/clothesActions'
import { connect } from 'react-redux'

const ProductStore = (props) => {
    const categorias=[]
    props.clothes.map(cloth=>{
        if(!categorias.includes(cloth.type)){
            categorias.push(cloth.type)
        }
    })
    const [filtro, setFiltro]=useState([])
    const [sexo,setSexo]=useState('')
    const [cart, setCart] = useState([])
    const [orden,setOrden]=useState('')
    const [verdad,setVerdad]=useState(false)

    useEffect(async()=>{
        await props.getClothes() 
    }, [])

    useEffect(()=>{
        setFiltro(props.clothes)
    },[props.clothes])

    const filtradoSexo = (value)=>{
        const filtrito = props.clothes.filter(item=>item.sex===value)
        if(orden===''){
            setFiltro(props.clothes.filter(item=>item.sex===value))
        }else if(orden==="Mayor"){
            setFiltro(filtrito.sort((a,b)=> b.price - a.price))
        }else if (orden==="Menor"){
            setFiltro(filtrito.sort((a,b)=> a.price - b.price))
        }
        setSexo(`${value}`)
    }
    const filtradoAll = ()=>{
        const filtrito = props.clothes
        if(orden===''){
            setFiltro(props.clothes)
        }else if(orden === 'Mayor'){
            setFiltro(filtrito.sort((a,b)=> b.price - a.price))
        }else if(orden==="Menor"){
            setFiltro(filtrito.sort((a,b)=> a.price - b.price))
        }
        setSexo('')
    }
    const filtradoCategoria=(value)=>{
        const filtrito = props.clothes.filter(item=>item.sex===sexo && item.type===value)
        if(sexo ===''){
            setFiltro(props.clothes.filter(item=>item.type===value))
        }else if (sexo!=='' && orden === ''){
            setFiltro(props.clothes.filter(item=>item.sex===sexo && item.type===value))
        }else if (sexo!=='' && orden === "Mayor"){
            setFiltro(filtrito.sort((a,b)=> b.price - a.price))
        }else if(sexo!=='' && orden === "Menor"){
            setFiltro(filtrito.sort((a,b)=> a.price - b.price))
        }
    }
    function sortFilter(value) {
        if(value ==="Mayor"){
            setFiltro(filtro.sort((a,b)=> b.price - a.price))
            setOrden(value)
            setVerdad(!verdad)
        }else if(value === "Menor"){
            setOrden(value)
            setFiltro(filtro.sort((a,b)=> a.price - b.price))
            setVerdad(!verdad)
        }
    }

    return (
        <>
            <div className="boxProductStore">
                <div className='containerFiltro'>
                    <div>
                        <h2>Filtro</h2>
                        <p onClick={()=>filtradoAll()}>Todos los productos</p>
                        <p onClick={()=>filtradoSexo("H")}>Hombres</p>
                        <p onClick={()=>filtradoSexo("M")}>Mujeres</p>
                    </div>
                    <div>
                        <h2>Precio</h2>
                        <p onClick={()=>sortFilter("Mayor")}>Mayor precio</p>
                        <p onClick={()=>sortFilter("Menor")}>Menor precio</p>
                    </div>
                    <div>
                        <h2>Categoria</h2>
                        {categorias.map(categoria=><p onClick={()=>filtradoCategoria(`${categoria}`)}>{categoria}</p>)}
                    </div>
                </div>
                <div className='containerProductsStore'>
                    {filtro.map(product => {
                        return (
                            <Link to={`/product/${product._id}`}><CardClothing from  key={product.id} product={product} cart={cart} setCart={setCart} products ={product}/></Link>
                        )
                    })}
                </div>
            </div>
            {/* <Footer/> */}

        </>
    )
}


const mapStateToProps = state => {
    return {
      clothes: state.clothesR.clothes
    }
  }
  
  const mapDispatchToProps = {
    getClothes: clothesActions.getClothes
  }
export default connect(mapStateToProps, mapDispatchToProps)(ProductStore)