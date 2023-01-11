import React from 'react'
import { Input } from 'reactstrap'
import ProductCardSetCant from '../components/ProductCardSetCant.js'
import search from '../assets/img/Search_blanco.svg'

const AgregarProductoComprar = () => {
  const filterBySearch = (e) => {
    const query = e?.target?.value
    if (query) {
    } else {
    }
  }

  return (
    <div className="wrapper">
        <div className="img-container comprar text-center">
            <h3 className="fw-bold">BUSCAR PRODUCTOS</h3>
            <h5>¿Estás buscando un producto puntual? Utiliza nuestro buscador</h5>
            <div className="busca-contain">
              <Input onKeyDown={filterBySearch} className=" mx-auto input-busca" />
              <button className="btn btn-primary input-group-btn btn-lg btn-search"><img src={search} alt="Search_blanco" /></button>
        </div>
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
