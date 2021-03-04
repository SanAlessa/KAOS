import React, { useState } from 'react'
import { connect } from 'react-redux'
import clothesActions from '../redux/actions/clothesActions'

const AdminPanel =(props)=>{
  console.log(props)
  const [product, setProduct]=useState({
    stock:{color: '', images:[], size: []},
    type: '', price: 0, description: ''
  })

  const [image, setImage] = useState([])
  const [size, setSize] = useState({})


  const readInput=(e)=>{  
    const prop = e.target.name
    const value = e.target.value
    setProduct({
      ...product,
      [prop]: value
    })
  }

  console.log(size)

  const handleImages =()=>{
    if(image.trim() === ''){
      alert('ups se te olvido cargar la imagen')
      setImage('')
    }else{
      product.stock.images.push(image)
      setImage('')
    }
  }

  const handleSize =()=>{
    product.stock.size.push(size)
    console.log(product)
  }
  console.log(product)
  
  const send =(e)=>{
    e.preventDefault()
    props.addClothes(product)
  }

  const enter=(e)=>{
    if(e.key==='Enter'){
      send()
    }
  }
  return(
    <div className="centerCenter" style={{flexDirection: 'column', justifyContent: 'space-between', margin: '5vh auto'}}>
      <label htmlFor="type">type</label>
      <input type="text" name="type" id="type" onChange={readInput}/>
      <label htmlFor="description">Descripcion del Producto</label>
      <textarea name="description" id="description" cols="90" onChange={readInput}></textarea>
      <label htmlFor="price">price</label>
      <input type="number" name="price" id="price" onChange={readInput}/>
      <div className="centerCenter" style={{marginTop: '10vh', flexDirection: 'column'}}>
        <label htmlFor="colour">Colour</label>
        <input type="text" name="colour" id="colour" onChange={(e)=>setProduct({...product, stock:{...product.stock, color: e.target.value}})}/>
        <label htmlFor="images">Images</label>
        <input type="text" name="images" id="image" value={image} onChange={(e)=>setImage(e.target.value)}/>
        <button onClick={handleImages}>CARGAR IMAGEN</button>
      {product.stock.images && product.stock.images.map(url=> <div style={{width:'20vw', height: '20vh', backgroundPosition: 'center', backgroundImage: `url('${url}')`}}></div>)}
      <select name="size" id="size" onChange={(e)=> setSize({...size, size: e.target.value})}>
        <option disabled selected>Talle</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
      <label htmlFor="stock">Stock</label>
      <input type="number" name="stock" id="stock" onChange={(e)=> setSize({...size, quantity: e.target.value})}/>
      <button onClick={handleSize}>Añadir Talle y Stock</button>
      </div>
      <button onKeyPress={enter} onClick={send}>CARGAR</button>
    </div>
  )
}

const mapDispatchToProps = {
  addClothes: clothesActions.addClothes
}


export default connect(null, mapDispatchToProps) (AdminPanel)