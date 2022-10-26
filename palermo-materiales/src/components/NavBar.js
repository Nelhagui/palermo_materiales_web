import React from 'react'
import '../styles/style.css'
import { Link } from 'react-router-dom'
import carrito from '../assets/img/carrito.svg'
import playstore from '../assets/img/playstore.svg'
import logo from '../assets/img/logo_informacion.png'

const NavBar = () => {
  return (
    <div className='container'>
      <div className="nav-container ">
        <div className="logo-container ">
          <img src={logo} alt="logo" />
        </div>

        <div className="navbar-xl  ">
          <Link to="/">HOME</Link>
          <Link to="/about">COMPRAR</Link>
          <Link to="/about">COTIZAR</Link>
          <Link to="/about">EMPRESA</Link>
          <Link to="/about">CONTACTO</Link>
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
        <Link to="/about">Comprar</Link>
        <Link to="/about">Cotizar</Link>
        <Link to="/about">Empresa</Link>
        <Link to="/about">Contacto</Link>
      </div>
    </div>
  )
}

export default NavBar
