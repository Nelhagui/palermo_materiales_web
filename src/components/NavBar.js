import React, { useContext, useState, useEffect } from 'react'
import '../styles/style.css'
import { Link } from 'react-router-dom'
import carrito from '../assets/img/carrito.svg'
// import playstore from '../assets/img/playstore.svg'
import logo from '../assets/img/logo_informacion.png'
import CartContext from '../context/CartContext.js'
import NavBarSm from './navBar/NavBarSm.js'

const NavBar = () => {
    const [showMsjAdd, setShowMsjAdd] = useState(false)
    const { cart } = useContext(CartContext)
    let cartLength = cart.length
    const [lenghInitial, setLenghInitial] = useState(cart?.length)
    let classNameIconCartCount = 'cart-circle';
    if (cartLength > 0) { classNameIconCartCount += ' active'; }
    const [isShowNavBarSm, setIsShowNavBarSm] = useState(false);
    const changeIsShowNavBarSm = (() => {
        setIsShowNavBarSm(!isShowNavBarSm)
    })

    useEffect(() => {
        if(cart.length !== lenghInitial && cart.length < lenghInitial){
            console.log('Estoy descontando')
        } 
        else if(cart.length > 0) {
            setTimeout(function(){setShowMsjAdd(false)}, 5000);
            setShowMsjAdd(true);
        }
        setLenghInitial(cart.length);
    }, [cart])
    

  return (
    <div className="nav-root ">
        <div  className={showMsjAdd ? "popup-add-cart show" : "popup-add-cart" }>¡AGREGADO AL CARRITO!</div>   
      <div className="nav-container container">
        <div className="logo-container ">
            <Link to={'/'}>
                <img src={logo} alt="logo" />
            </Link>
        </div>

        <div className="navbar-xl  ">
          <Link to="/">HOME</Link>
          <Link to="/comprar">COMPRAR</Link>
          <Link to="/cotizar">COTIZAR</Link>
          <Link to="/sobre-nosotros">EMPRESA</Link>
          <Link to="/contacto">CONTACTO</Link>
        </div>

        <div className="shop ">
          {
            (cartLength > 0)
              ?
            <Link to='/checkout/detail' className="link-carrito">
                <div
                  className={classNameIconCartCount}
                  id="cart-circle"
                >
                  {cartLength}
                </div>
                <img src={carrito} alt="carrito" />
            </Link>
            :
            <img src={carrito} alt="carrito" />
          }
          {/* <div className="vl"></div> */}
          <div className='nav-hamburger' onClick={()=>changeIsShowNavBarSm()}>
            <label className="toggle-button"></label>
          </div>
          {/* <div className="playstore navbar">
            <img src={playstore} alt="playstore-logo" />
            <a href="https://play.google.com/store/apps/details?id=rd.corralon.rc" target="_blank">
                DESCARGAR APP
            </a>
          </div> */}
        </div>
      </div>
      <NavBarSm changeIsShowNavBarSm={changeIsShowNavBarSm} isShowNavBarSm={isShowNavBarSm}/>
    </div>
  )
}

export default NavBar
