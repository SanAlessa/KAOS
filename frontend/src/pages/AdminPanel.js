import React, { useState } from 'react'
import { connect } from 'react-redux'
import clothesActions from '../redux/actions/clothesActions'
import Footer from '../components/Footer'
import '../styles/adminPanel.css'

const AdminPanel = (props) => {
  const [colorStock, setColorStock] = useState({ color: '', images: [], size: [] })
  const [product, setProduct] = useState({
    stock: [],
    type: '', price: 0, description: '', sex: 'SEXO', name: ''
  })

  const [image, setImage] = useState([])
  const [size, setSize] = useState({ size: 'Talle', quantity: 0 })

  const readInput = (e) => {
    const prop = e.target.name
    const value = e.target.value
    setProduct({
      ...product,
      [prop]: value
    })
  }
  const handleImages = () => {
    if (image.trim() === '') {
      alert('ups se te olvido cargar la imagen')
      setImage('')
    } else {
      colorStock.images.push(image)
      console.log(colorStock)
      setImage('')
    }
  }

  const handleSize = () => {
    colorStock.size.push(size)
    console.log(colorStock.size)
    setSize({ size: 'Talle', quantity: 0 })
  }

  const handleColorStock = () => {
    product.stock.push(colorStock)
    setColorStock({ color: '', images: [], size: [] })
    setSize({ size: 'Talle', quantity: 0 })
  }

  const send = (e) => {
    e.preventDefault()
    console.log(product)
    setProduct({
      stock: [],
      type: '', price: 0, description: '', sex: 'SEXO', name: ''
    })
    props.addClothes(product)
  }


  return (
    <>
      <div className="backgroundCarga">
        <div className="centerCenter adminPanel" style={{ flexDirection: 'column', justifyContent: 'space-between', margin: '5vh auto' }}>
          <h2>CARGA DE PRENDAS</h2>
          <div className="primerDiv" style={{ display: 'flex', justifyContent: 'space-evenly', width: '60%', marginTop: '1vh' }}>
            <div><label htmlFor="Sex">Género:</label>
              <select name="sex" id="sex" value={product.sex} onChange={readInput}>
                <option disabled selected>Sexo</option>
                <option value="M">M</option>
                <option value="H">H</option>
              </select></div>
            <div><label htmlFor="type">Tipo:</label>
              <input type="text" name="type" id="type" value={product.type} placeholder="Bermuda, Remera, etc" style={{ textAlign: 'center' }} onChange={readInput} /></div>
            <div><label htmlFor="name">Nombre:</label>
              <input type="text" name="name" id="name" value={product.name} placeholder="Bermuda Flight" style={{ textAlign: 'center' }} onChange={readInput} /></div>
          </div>
          <div className="displayFlex" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <textarea placeholder="Agregá una breve descripción de la prenda" name="description" id="description" cols="80" rows="5" value={product.description} style={{ resize: 'none' }} onChange={readInput}></textarea>
          </div>
          <div className="centerCenter" style={{ marginTop: '2vh', justifyContent: 'space-around', width: '60%' }}>
            <div><label htmlFor="price" style={{ marginTop: '2vh' }}>Precio de venta:</label>
              <input type="number" name="price" id="price" value={product.price} onChange={readInput} /></div>
            <div><label htmlFor="colour">Color:</label>
              <input type="text" name="colour" id="colour" value={colorStock.color} placeholder="Color de la prenda" style={{ textAlign: 'center' }} onChange={(e) => setColorStock({ ...colorStock, color: e.target.value })} /></div>
          </div>
          <div style={{ display: 'flex', width: '50%', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <label htmlFor="images">Imágenes:</label>
            <input type="text" name="images" id="image" placeholder="4 imágenes máximo" style={{ textAlign: 'center' }} value={image} onChange={(e) => setImage(e.target.value)} />
            <button className="btnAdmin" onClick={handleImages}>Cargar Imagen</button>
          </div>
          {colorStock.images.length > 0 &&
            <div style={{ width: '25vw', height: '25vh', display: 'flex', flexWrap: 'wrap' }}>
              {colorStock.images.map(url => <div style={{ margin: 'auto', width: '10vw', height: '10vh', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: `url('${url}')` }}></div>)}
            </div>}
          <div style={{ width: '40%', justifyContent: 'space-around', display: 'flex', alignItems: 'center' }}>
            <div>
              <select name="size" id="size" value={size.size} onChange={(e) => setSize({ ...size, size: e.target.value })}>
                <option disabled selected>Talle</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
            <div>
              <label htmlFor="stock">Stock</label>
              <input type="number" name="stock" id="stock" value={size.quantity} onChange={(e) => setSize({ ...size, quantity: e.target.value })} />
            </div>
            <button className="btnAdmin" onClick={handleSize}>Añadir Stock</button>
          </div>
          <button className="btnAdmin" onClick={handleColorStock}>Agregar Color</button>
          <p className="textoFinal" style={{ fontSize: '1rem' }}>Una vez que agregaste todos los colores finalizá la carga!</p>
          <button className="btnAdmin" style={{ marginTop: '-4vh', marginBottom: '2vh' }} onClick={send}>Finalizar Carga</button>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

const mapDispatchToProps = {
  addClothes: clothesActions.addClothes
}


export default connect(null, mapDispatchToProps)(AdminPanel)