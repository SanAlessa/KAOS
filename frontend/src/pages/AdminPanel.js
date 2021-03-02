import e from 'cors'
import React, { useState } from 'react'

const AdminPanel =()=>{

  const [product, setProduct]=useState({
    size: [{size: '', stock: 0}], colour: '', type: '', price: 0
  })
  const [files, setFiles] =useState('')
  const [path, setPath] =useState('')

  const fileChange=(e)=>{
    const images = e.target.file
    const reader = new FileReader()
    reader.readAsDataURL= (images) //inspeccionar si sirve o no.
    reader.onload = function(){
      setPath(reader.result)
    }
    setFiles(images)
  }

  const readInput=(e)=>{
    const prop = e.target.name
    const value = e.target.value
    setProduct({
      ...product,
      [prop]: value
    })
  }

  const send =(e)=>{
    e.preventDefault()
    const fd = new FormData()
    fd.append('stock', product.stock)
    fd.append('colour', product.colour)
    fd.append('type', product.type)
    fd.append('price', product.price)
    for (var i=0; i<files.length; i++){
      fd.append(`images[${i}]`, files)
    }
  }

  const enter=(e)=>{
    if(e.key==='Enter'){
      send()
    }
  }

  return(
    <div>
      <label htmlFor="stock">stock</label>
      <input type="text" name="stock" id="stock" onChange={readInput}/>
      <label htmlFor="colour">colour</label>
      <input type="text" name="colour" id="colour" onChange={readInput}/>
      <label htmlFor="type">type</label>
      <input type="text" name="type" id="type" onChange={readInput}/>
      <label htmlFor="price">price</label>
      <input type="text" name="price" id="price" onChange={readInput}/>
      <input type="file" name="image" id="image" multiple onChange={fileChange}/>
      <div style={{width:'40vw', height: '50vh', backgroundImage: `urle('${path})`}}></div>
      <button onKeyPress={enter} onClick={send}>CARGAR</button>
      <select name="size" id="size" onChange={()=> setProduct({...product, size:[{size: e.target.value}]})}>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
        <option value="xl">XL</option>
        <option value="xxl">XXL</option>
      </select>
      <input type="number" name="stock" id="stock" onChange={()=> setProduct({...product, size:[{stock: e.target.value}]})}/>
    </div>
  )
}

export default AdminPanel