import { connect } from 'react-redux'
import CartCards from './CartCards'

const UserProfile = ({loggedUser}) => {
    const { firstname, lastname, email } = loggedUser
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
                        <h2>Tus compras en KAOS</h2>
                    </div>
                    <div className='userPurchase'>
                        <CartCards />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        loggedUser: state.userR.loggedUser
    }
}
export default connect(mapStateToProps)(UserProfile)