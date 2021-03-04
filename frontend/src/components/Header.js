import logo from '../assets/kaoswhite.png'
import Drawer from './Drawer'

const Header = () => {
    return (
        <div className="logoBanner">
         <Drawer/>
            <div className="logo"></div>
            <div className="iconsHeader">
                <i class="fas fa-user-circle fa-2x"></i>
                <i class="fas fa-shopping-cart fa-2x"></i>
            </div>
        </div>
    )
}

export default Header