import CardHistoryPurchase from "./CardHistoryPurchase"
import { useEffect } from 'react'
import { connect } from 'react-redux'
import purchaseAction from '../redux/actions/purchaseAction'
import userAction from '../redux/actions/userAction'
import Footer from './Footer'

const UserProfile = ({ loggedUser, getPurchases, userPurchase, addAdmin, disconnectUser, history, cart }) => {
    const { firstname, lastname, email, id } = loggedUser
    
    useEffect(() => {
        getPurchases(id)
        
    }, [])

    useEffect(()=>{
        console.log(userPurchase)
    },[userPurchase.length>0])

    console.log(userPurchase)

 
    return (
        <>
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
                        <h4 onClick={()=>history.push(`/reset-password/${email}`)}>Quiero cambiar mi contraseña</h4>
                        {(loggedUser.rol !== 'admin' || !loggedUser.rol) && 
                        <h4 onClick={()=>addAdmin(loggedUser.token)}>Solicitar Acceso de Admin</h4>}
                        <div className="logOut" onClick={()=>disconnectUser()}>Log Out</div>
                    </div>
                    <div className='containerUserPurchase'>
                        <div className='containerTitleUserPurchase'>
                            {userPurchase.length > 0 ?
                                <div>
                                    <h2>Tus compras en KAOS</h2>
                                    {userPurchase.map(purchase => <CardHistoryPurchase product={purchase}/>)}
                                </div>
                                : <h2>Aun no realizaste compras!</h2>}
                        </div>
                        <div className='userPurchase'>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
const mapStateToProps = state => {
    return {
        loggedUser: state.userR.loggedUser,
        userPurchase: state.purchaseR.newPurchase,
        cart: state.purchaseR.checkout,
    }
}
const mapDispatchToProps = {
    getPurchases: purchaseAction.getPurchases,
    addAdmin: userAction.addAdmin,
    disconnectUser: userAction.disconnectUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)