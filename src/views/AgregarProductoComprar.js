import React from 'react'
import { Link } from 'react-router-dom'
import ProductCardSetCant from '../components/ProductCardSetCant.js'

const AgregarProductoComprar = () => {

  return (
    <div className="wrapper">
        <div className="img-container comprar text-center">
            <h3 className="fw-bold">BUSCAR PRODUCTOS</h3>
            <h5>¿Estás buscando un producto puntual? Utiliza nuestro buscador</h5>
            <Link to="/comprar">
                <button className="btn-secondary white"> BUSCAR POR PRODUCTOS </button>
            </Link>
        </div>
        <div className="d-flex">
            <ProductCardSetCant></ProductCardSetCant>
        </div>

        <div className="footer-image-cotizar">
            <div className="footer-text">
                <p><strong>Descargate</strong> nuestra app</p>
                <p>y comenzá a operar</p>
            </div>
        </div>
    </div>
  )
}

export default AgregarProductoComprar
