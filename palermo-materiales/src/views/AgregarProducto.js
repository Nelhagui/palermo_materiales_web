import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext.js'
import ProductCardSetCant from '../components/ProductCardSetCant.js';

const AgregarProducto = () => {
    
    const { setCart } = useContext(CartContext)

    return (
        <div className="wrapper">
            <div className="images-container">
                <div className=" img1">
                    <div className="image-titles">
                        <h2>BUSCAR PRODUCTOS</h2>
                        <h4>¿Estás buscando un producto puntual?</h4>
                        <button className="btn-primary">
                            <Link to="/comprar">BUSCAR POR PRODUCTOS</Link>
                        </button>
                    </div>
                </div>
                <div className=" img2">
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
                <p style={{ margin: '1em 0 0 4em' }}>Te acompañamos</p>
                <br />
                <p style={{ margin: '1.5em 0px 0px 7em' }}>
                    todos tus <strong>proyectos</strong>
                </p>
            </div>
        </div>
    )
}

export default AgregarProducto
