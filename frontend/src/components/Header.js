import logo from '../assets/kaoswhite.png'

const Header = () => {
    return (
        <div className="logoBanner">
            <div className="menuHamb">

                <nav class="navbar navbar-light navbar-1 white">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent15"
                        aria-controls="navbarSupportedContent15" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent15">

                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>

                    </div>

                </nav>
            </div>
            <div className="logo"></div>
            <div className="iconsHeader">
                <i class="fas fa-user-circle fa-2x"></i>
                <i class="fas fa-shopping-cart fa-2x"></i>
            </div>
        </div>
    )
}

export default Header