import logo from '../assets/kaoswhite.png'
import Drawer from './Drawer'
import {Link} from 'react-router-dom'
import {IoPersonCircleOutline} from 'react-icons/io5'
import {FiShoppingCart} from 'react-icons/fi'
 

const Header = () => {
    return (
        <div className="logoBanner">
         <Drawer/>
         <Link to='/'className="logo"/>
            <div className="iconsHeader">
                <Link to='signin' ><IoPersonCircleOutline style={{fontSize:'34',color:'black'}}/></Link>
                <FiShoppingCart style={{fontSize:'29',color:'black'}}/>
            </div>
        </div>
    )
}

export default Header