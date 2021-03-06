import logo from '../assets/kaos.png'
import Drawer from './Drawer'
import { Link } from 'react-router-dom'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { FiShoppingCart } from 'react-icons/fi'


const Header = () => {
    return (
        <div className="logoBanner">
            <Drawer />
            <Link to='/' style={{display:'flex', justifyContent:'center', height:'80%'}}>
                <img src={logo} className="logo"></img>
            </Link>
            <div className="iconsHeader">
                <Link to='signin' ><IoPersonCircleOutline style={{ fontSize: '34', color: 'black' }} /></Link>
                <FiShoppingCart style={{ fontSize: '29', color: 'black' }} />
            </div>
        </div>
    )
}

export default Header