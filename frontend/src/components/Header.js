import logo from '../assets/kaos.png'
import Drawer from './Drawer'
import userAction from '../redux/actions/userAction';
import { Link } from 'react-router-dom'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { FiShoppingCart } from 'react-icons/fi'
import { connect } from 'react-redux'




const Header = (props) => {
    console.log(props.loggedUser)
    return (
        <div className="logoBanner">
            <Drawer />
            <Link to='/' style={{ display: 'flex', justifyContent: 'center', height: '80%' }}>
                <img src={logo} className="logo"></img>
            </Link>
            <div className="iconsHeader">
                <Link to='signin' ><IoPersonCircleOutline style={{ fontSize: '34', color: 'black' }} /></Link>
                <FiShoppingCart style={{ fontSize: '29', color: 'black' }} />
            </div>
            {/* <button onClick={() => props.disconnectUser()}>desconectar</button> */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loggedUser: state.userR.loggedUser
    }
}
const mapDispatchToProps = {
    disconnectUser: userAction.disconnectUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)