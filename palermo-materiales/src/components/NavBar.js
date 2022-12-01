import React from 'react'
import '../styles/style.css'
import { Link } from 'react-router-dom'
import carrito from '../assets/img/carrito.svg'
import playstore from '../assets/img/playstore.svg'
import logo from '../assets/img/logo_informacion.png'
import CartContext from '../context/CartContext.js'
import { useContext } from 'react'
import { useEffect, useState } from 'react'

const NavBar = () => {
  const { cart } = useContext(CartContext)
  let cartLength = cart.length
  let classNameIconCartCount = 'cart-circle';
  if (cartLength > 0) {
    classNameIconCartCount += ' active';
  }
  console.log('cantidad en carrito',cartLength)

  return (
    <div className="nav-root ">
      <div className="nav-container container">
        <div className="logo-container ">
          <img src={logo} alt="logo" />
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
          <div className="vl"></div>
          <div className="playstore">
            <img src={playstore} alt="playstore-logo" />
            <p>DESCARGAR APP</p>
          </div>
        </div>
      </div>
      <div className="navbar-sm">
        <Link to="/">Home</Link>
        <Link to="/comprar">Comprar</Link>
        <Link to="/cotizar">Cotizar</Link>
        <Link to="/sobre-nosotros">Empresa</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </div>
  )
}

export default NavBar
