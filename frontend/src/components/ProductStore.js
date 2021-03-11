import React, { useState, useEffect } from 'react'
import CardClothing from './CardClothing'
import {Link} from 'react-router-dom'
import clothesActions from '../redux/actions/clothesActions'
import { connect } from 'react-redux'
import Loader from './Loader'

const ProductStore = (props) => {
    const [cart, setCart] = useState([])
    const [nuevoFiltro, setNuevoFiltro] = useState([])
    const [categorias, setCategorias] = useState ([])
    const [filtro, setFiltro]=useState([])
    const [sexo,setSexo]=useState('')
    const [orden,setOrden]=useState('')
    const [verdad,setVerdad]=useState(false)
    const [vista,setVista]=useState(false)

    
    useEffect(() => {
      window.scrollTo(0,0)
      fetch()
    }, [])
    useEffect(()=>{
        setCategorias(new Array(...new Set(nuevoFiltro.map(articulo => articulo.type))))
    },[nuevoFiltro])
    
    const fetch = async () => {
      await props.getClothes()
    }

    useEffect(()=>{
        setFiltro(props.clothes)
        setNuevoFiltro(props.clothes)
        if(props.location.state) filtradoCategoria(props.location.state)

    },[props.clothes])
    
    if (props.clothes.length === 0) {
      return <Loader/>
    }

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
    function filtradoCategoria(value){
        const filtrito = props.clothes.filter(item=>item.sex===sexo && item.type===value)
        if(sexo ===''){
            setFiltro(props.clothes.filter(item=>item.type===value))
        }else if (sexo!=='' && orden === ''){
            setFiltro(filtrito)
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
                        <div className="firstContFiltro">
                            <h2 className="titulos2">Filtro</h2>
                            <div className='boxIconsFiltro'>
                                <p className='icono1' onClick={()=>setVista(true)}><i className="fas fa-th-list"></i></p>
                                <p className='icono2' onClick={()=>setVista(false)}><i className="fas fa-th"></i></p>
                            </div>
                        </div>
                        <p className="titulos1" onClick={()=>filtradoAll()}>Todos los productos</p>
                        <p className="titulos1" onClick={()=>filtradoSexo("H")}>Hombres</p>
                        <p className="titulos1" onClick={()=>filtradoSexo("M")}>Mujeres</p>
                    </div>
                    <div>
                        <h2 className="titulos2">Precio</h2>
                        <p className="titulos1" onClick={()=>sortFilter("Mayor")}>Mayor precio</p>
                        <p className="titulos1" onClick={()=>sortFilter("Menor")}>Menor precio</p>
                    </div>
                    <div>
                        <h2 className="titulos2">Categoria</h2>
                        {categorias.length > 0 && categorias.map(categoria=><p className="titulos1" key={`${categoria}1`} onClick={()=>filtradoCategoria(`${categoria}`)}>{categoria}</p>)}
                    </div>
                </div>
                <div className={!vista ? 'containerProductsStore': 'containerProductsStore2'}>
                    {filtro.map(product => {
                        return (                            
                            <div className='containerCardMapping' key={product._id}>
                            <Link to={`/product/${product._id}`}>
                                <CardClothing from  key={product._id} product={product} cart={cart} setCart={setCart} products ={product}/>
                            </Link>
                            </div>
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