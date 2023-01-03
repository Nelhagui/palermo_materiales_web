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
            <div className="footer-image-cotizar">
                <div>
                      <p style={{ margin: '1em 0 0 5em' }}>
                        <strong>Descargate</strong> nuestra app
                      </p>
                      <br />
                      <p style={{ margin: '1.5em 0px 0px 8em' }}>y comenzá a operar</p>
                </div>
            </div>
        </div>
    )
}

export default AgregarProducto
