import { useEffect } from 'react'
import { connect } from 'react-redux'
import purchaseAction from '../redux/actions/purchaseAction'
import CartCards from './CartCards'

const UserProfile = ({loggedUser, getPurchases, newPurchase}) => {
    const { firstname, lastname, email, id } = loggedUser
    
    useEffect(()=>{
        getPurchases(id)
    },[])

    return(
        <div className='containerUserProfile'>
            <div className='containerUserProfileCentered'>
                <div className='containerUserInfo'>
                    <h1>Tus Datos Personales</h1>
                    <h2>{firstname}</h2>
                    <h3>Tu nombre</h3>
                    <h2>{lastname}</h2>
                    <h3>Tu Apellido</h3>
                    <h2>{email}</h2>
                    <h3>Tu dirección de correo</h3>
                    <h4>Quiero cambiar mi contraseña</h4>
                </div>
                <div className='containerUserPurchase'>
                    <div className='containerTitleUserPurchase'>
                        {newPurchase.length > 0 ? <div>
                            <h2>Tus compras en KAOS</h2>
                            {newPurchase.map(purchase=> <h1>hola</h1>)}
                            </div>
                            : <h2>Aun no realizaste compras!</h2>}
                    </div>
                    <div className='userPurchase'>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        loggedUser: state.userR.loggedUser,
        newPurchase: state.purchaseR.newPurchase
    }
}

const mapDispatchToProps={
    getPurchases: purchaseAction.getPurchases
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)