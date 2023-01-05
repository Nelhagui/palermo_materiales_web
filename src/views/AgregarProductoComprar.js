import React from 'react'
import { Input } from 'reactstrap'
import ProductCardSetCant from '../components/ProductCardSetCant.js'

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
            <Input onChange={filterBySearch} className=" mx-auto " />
        </div>
        <div className="d-flex">
            <ProductCardSetCant></ProductCardSetCant>
        </div>
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

export default AgregarProductoComprar