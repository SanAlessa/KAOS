import React, { useState } from 'react'
import { connect } from 'react-redux'
import clothesActions from '../redux/actions/clothesActions'

const AdminPanel =(props)=>{
  const [colorStock, setColorStock] = useState({color: '', images:[], size: []})
  const [product, setProduct]=useState({
    stock:[],
    type: '', price: 0, description: '', sex: 'SEXO', name: ''
  })

  const [image, setImage] = useState([])
  const [size, setSize] = useState({size: 'Talle', quantity: 0})

  const readInput=(e)=>{  
    const prop = e.target.name
    const value = e.target.value
    setProduct({
      ...product,
      [prop]: value
    })
  }

  const handleImages =()=>{
    if(image.trim() === ''){
      alert('ups se te olvido cargar la imagen')
      setImage('')
    }else{
      colorStock.images.push(image)
      setImage('')
    }
  }

  const handleSize =()=>{
    colorStock.size.push(size)
  }
  
  const handleColorStock=()=>{
    product.stock.push(colorStock)
    setColorStock({color: '', images:[], size: []})
    setSize({size: 'Talle', quantity: 0})
  }

  const send =(e)=>{
    e.preventDefault()
    console.log(product)
    setProduct({
      stock:[],
      type: '', price: 0, description: '', sex: 'SEXO', name: ''
    })
    // props.addClothes(product)
  }

  const enter=(e)=>{
    if(e.key==='Enter'){
      send()
    }
  }

  return(
    <div className="centerCenter" style={{flexDirection: 'column', justifyContent: 'space-between', margin: '5vh auto'}}>
      <label htmlFor="Sex">Sexo</label>
      <select name="sex" id="sex" value={product.sex} onChange={readInput}>
       <option disabled selected>SEXO</option>
       <option value="M">M</option>
       <option value="H">H</option>
      </select>
      <label htmlFor="type">Tipo</label>
      <input type="text" name="type" id="type" value={product.type} onChange={readInput}/>
      <label htmlFor="name">Nombre</label>
      <input type="text" name="name" id="name" value={product.name} onChange={readInput}/>
      <label htmlFor="description">Descripcion del Producto</label>
      <textarea name="description" id="description" cols="90" value={product.description} onChange={readInput}></textarea>
      <label htmlFor="price">price</label>
      <input type="number" name="price" id="price" value={product.price} onChange={readInput}/>
      <div className="centerCenter" style={{marginTop: '10vh', flexDirection: 'column'}}>
        <label htmlFor="colour">Colour</label>
        <input type="text" name="colour" id="colour" value={colorStock.color} onChange={(e)=>setColorStock({...colorStock, color: e.target.value})}/>
        <label htmlFor="images">Imagenes</label>
        <input type="text" name="images" id="image" value={image} onChange={(e)=>setImage(e.target.value)}/>
        <button onClick={handleImages}>CARGAR IMAGEN</button>
      {product.stock.images && product.stock.images.map(url=> <div style={{width:'20vw', height: '20vh', backgroundPosition: 'cover', backgroundImage: `url('${url}')`}}></div>)}
      <select name="size" id="size" value={size.size} onChange={(e)=> setSize({...size, size: e.target.value})}>
        <option disabled selected>Talle</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
      <label htmlFor="stock">Stock</label>
      <input type="number" name="stock" id="stock" value={size.quantity} onChange={(e)=> setSize({...size, quantity: e.target.value})}/>
      <button onClick={handleSize}>Añadir Stock</button>
      </div>
      <button onClick={handleColorStock}>Agregar Nuevo Color</button>
      <button onKeyPress={enter} onClick={send}>CARGAR</button>
    </div>
  )
}

const mapDispatchToProps = {
  addClothes: clothesActions.addClothes
}


export default connect(null, mapDispatchToProps) (AdminPanel)