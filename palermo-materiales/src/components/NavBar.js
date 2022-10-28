import React from 'react'
import '../styles/style.css'
import { Link } from 'react-router-dom'
import carrito from '../assets/img/carrito.svg'
import playstore from '../assets/img/playstore.svg'
import logo from '../assets/img/logo_informacion.png'

const NavBar = () => {
  return (
    <div className='nav-root ' >
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
          <img src={carrito} alt="carrito" />
          <div className="vl"></div>
          <div className="playstore">
            <img src={playstore} alt="playstore-logo" />
            <p>DESCARGAR APP</p>
          </div>
        </div>
      </div>
      <div className="navbar-sm">
        <Link to="/">Home</Link>
        <Link to="/buy">Comprar</Link>
        <Link to="/about">Cotizar</Link>
        <Link to="/about">Empresa</Link>
        <Link to="/contact">Contacto</Link>
      </div>
    </div>
  )
}

export default NavBar
