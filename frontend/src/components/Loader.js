import '../styles/loader.css'

const Loader =()=>{
  return (
    <div style={{display: 'flex', flex: '1', justifyContent: 'center', alignItems: 'center'}}>
    <div id="f1_container">
      <div id="f1_card">
        <div className="front face"></div>
        <div className="back face"></div>
      </div>
    </div>
    </div>
  ) 
}

export default Loader