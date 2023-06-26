import React from 'react'
import { Link } from 'react-router-dom'
import ProductCardSetCant from '../components/ProductCardSetCant.js'
import search from '../assets/img/Search_blanco.svg'

const AgregarProductoComprar = () => {

  return (
    <div className="wrapper">
        <div className="img-container comprar text-center">
            <h3 className="fw-bold">BUSCAR PRODUCTOS</h3>
            <h5>¿Estás buscando un producto puntual? Utiliza nuestro buscador</h5>
            <Link to="/comprar">
                <button className="btn-secondary white mt-2"> 
                    <img src={search} alt="Search_blanco" style={{width: "1.4rem", marginRight: "1rem"}}/>
                    BUSCAR POR PRODUCTOS 
                </button>
            </Link>
        </div>
        <div className="d-flex">
            <ProductCardSetCant></ProductCardSetCant>
        </div>

        <div className="footer-image">
            <div className="footer-text">
              <p>Te acompañamos</p>
              <p>en todos tus <strong>proyectos</strong> </p>
            </div>
        </div>
        {/* <div className="footer-image-cotizar">
            <div className="footer-text">
                <p><strong>Descargate</strong> nuestra app</p>
                <p>y comenzá a operar</p>
            </div>
        </div> */}
    </div>
  )
}

export default AgregarProductoComprar
