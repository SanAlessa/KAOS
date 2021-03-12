import { useEffect } from "react"
import { connect } from "react-redux"
import purchaseAction from "../redux/actions/purchaseAction"

const Success = (props)=>{

    useEffect(()=>{
        props.cleanCart()
    },[])
    return (
        <>
            <div className='boxSuccess'>
               <div className='containerSuccess'>
                   <div className='successBack'></div>
                   <div className='textoSuccess'>
                       <h2>Estimado Cliente</h2>
                       <p>Si necesita ayuda para realizar una compra, con el seguimiento de un producto, o para realizar el cambio de su pedido, estamos disponibles para ayudarle las 24hs, los 7 dias de la semana</p>
                       <p>Envienos un email a kaosmindhub@gmail.com</p>
                   </div>
               </div>
            </div>
        </>
    )
}


const mapDispatchToProps = {
    cleanCart: purchaseAction.cleanCheckout
}
export default connect(null,mapDispatchToProps)(Success)