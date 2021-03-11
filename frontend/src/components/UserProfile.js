import { useEffect } from 'react'
import { connect } from 'react-redux'
import purchaseAction from '../redux/actions/purchaseAction'
import userAction from '../redux/actions/userAction'
import Footer from './Footer'

const UserProfile = ({ loggedUser, getPurchases, newPurchase, addAdmin }) => {
    const { firstname, lastname, email, id } = loggedUser
    console.log(loggedUser)
    useEffect(() => {
        getPurchases(id)
    }, [])
    console.log(loggedUser)
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
                        <h4>Quiero cambiar mi contraseña</h4>
                        {(loggedUser.rol !== 'admin' || !loggedUser.rol) && 
                        <h4 onClick={()=>addAdmin(loggedUser.token)}>Solicitar Acceso de Admin</h4>
                        }
                    </div>
                    <div className='containerUserPurchase'>
                        <div className='containerTitleUserPurchase'>
                            {newPurchase.length > 0 ?
                                <div>
                                    <h2>Tus compras en KAOS</h2>
                                    {newPurchase.map(purchase => <h1>hola</h1>)}
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
        newPurchase: state.purchaseR.newPurchase
    }
}

const mapDispatchToProps = {
    getPurchases: purchaseAction.getPurchases,
    addAdmin: userAction.addAdmin
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)