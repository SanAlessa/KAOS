import React, { useState } from 'react'

const AdminPanel =()=>{

  const [product, setProduct]=useState({
    size: [{size: '', stock: 0}], colour: '', type: '', price: 0, images: []
  })

  const readInput=(e)=>{
    const prop = e.target.name
    const value = e.target.value
    setProduct({
      ...product,
      [prop]: value
    })
  }

  const addImage=(e)=>{
    setProduct({...product, images: [e.target.value]})
    
  }

  const send =(e)=>{
    e.preventDefault()
  }

  const enter=(e)=>{
    if(e.key==='Enter'){
      send()
    }
  }

  return(
    <div className="centerCenter" style={{flexDirection: 'column', justifyContent: 'space-between', margin: '5vh auto'}}>
      <label htmlFor="colour">colour</label>
      <input type="text" name="colour" id="colour" onChange={readInput}/>
      <label htmlFor="type">type</label>
      <input type="text" name="type" id="type" onChange={readInput}/>
      <label htmlFor="price">price</label>
      <input type="number" name="price" id="price" onChange={readInput}/>
      <div>
      <label htmlFor="images">images</label>
      <input type="text" name="images" id="image" onChange={addImage}/>
      </div>
      {/* <div style={{width:'20vw', height: '20vh', backgroundImage: `url('${path}`}}></div> */}
      <select name="size" id="size" onChange={(e)=> setProduct({...product, size:[{size: e.target.value}]})}>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
        <option value="xl">XL</option>
        <option value="xxl">XXL</option>
      </select>
      <input type="number" name="stock" id="stock" onChange={(e)=> setProduct({...product, size:[{stock: e.target.value}]})}/>
      <button onKeyPress={enter} onClick={send}>CARGAR</button>
    </div>
  )
}

export default AdminPanel