import React from 'react'
import { Link } from 'react-router-dom'

import ProductCardSetCant from '../components/ProductCardSetCant.js';

const AgregarProducto = () => {
    
    return (
        <div className="container-fluid wrapper">
            <div className="row images-container">
                <div className="col-12 col-lg-6 img1">
                    <div className="image-titles">
                        <h2>BUSCAR PRODUCTOS</h2>
                        <h4>¿Estás buscando un producto puntual?</h4>
                        <button className="btn-primary">
                            <Link to="/comprar">BUSCAR POR PRODUCTOS</Link>
                        </button>
                    </div>
                </div>
                <div className="col-12 col-lg-6 img2">
                    <div className="image-titles">
                        <h2>CALCULAR PRODUCTOS</h2>
                        <h4>¿Querés saber cuánto material necesitás cubrir?</h4>
                        <button className="btn-secondary white">
                        <Link to="/cotizar">BUSCAR POR CATEGORIAS</Link>
                        </button>
                    </div>
                </div>
            </div>
            <br />
            <ProductCardSetCant></ProductCardSetCant>
            <div className="footer-image">
                <div className="footer-text">
                <p><strong>Descargate</strong> nuestra app</p>
                <p>y comenzá a operar</p>
              </div>
            </div>
        </div>
    )
}

export default AgregarProducto
