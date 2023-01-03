import { Link } from 'react-router-dom'

const NavBarSm = ({changeIsShowNavBarSm, isShowNavBarSm}) => {
    return (
        <div className={isShowNavBarSm ? "navbar-sm show" : "navbar-sm"}>
            <Link onClick={ () => changeIsShowNavBarSm()} to="/">Home</Link>
            <Link onClick={ () => changeIsShowNavBarSm()} to="/comprar">Comprar</Link>
            <Link onClick={ () => changeIsShowNavBarSm()} to="/cotizar">Cotizar</Link>
            <Link onClick={ () => changeIsShowNavBarSm()} to="/sobre-nosotros">Empresa</Link>
            <Link onClick={ () => changeIsShowNavBarSm()} to="/contacto">Contacto</Link>
        </div>
    )
}

export default NavBarSm