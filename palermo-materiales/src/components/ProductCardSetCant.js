import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CartContext from '../context/CartContext.js'

const ProductCardSetCant = () => {
  const [product, setProduct] = useState(null)
  const [productStorege] = useState(
    JSON.parse(localStorage.getItem('producto-agregar')),
  )
  const [cont, setCont] = useState(0)

  let { id } = useParams()
  const handleRest = () => {
    if (cont > 0) {
        setCont(cont - 1)
    }
  }

  const handleAdd = () => {
    setCont(cont + 1)
  }

  function fetchProducto() {
    if (id) {
      axios
        .get(`https://api.palermomateriales.com.ar/api/productocombinado/${id}`)
        .then((res) => {
          setProduct(res?.data)
        })
    }
  }

  useEffect(() => {
    if (productStorege !== null) {
      if (productStorege.id == id) {
        setProduct(productStorege)
      } else fetchProducto()
    } else {
      fetchProducto()
    }
  }, [productStorege])

  console.warn(productStorege)

  return (
    <div className="container-history-set-product">
      <div className="history-set-product">
        <div>este es el historial - este es el historial</div>
        <div className="cont-gral-set-product">
          <div className="img-info row">
            <div className="cont-img col-12 col-md-4">
              <img src={product?.foto} alt="" />
            </div>
            <div className="info-set-cant col-12 col-md-8">
              <div className="title-price">
                <h1>{product?.productos_simples[0]?.alias}</h1>
                <p>${product?.productos_simples[0]?.precio_x_unidad}</p>
              </div>
              <div className="cont-caract-prod">
                <div>
                  <p>Marca:{product?.marca}</p>
                  <p>Peso: {product?.peso}</p>
                </div>
                <div>
                  <p>Tipo:{product?.tipo}</p>
                  <p>Volumen: {product?.volumen}</p>
                </div>
              </div>
              <div className="cont-contador-buttom row">
                <div className="col-12 col-md-6">
                  <div className="contador">
                    <div className="px-5" onClick={() => handleRest()}>
                      -
                    </div>
                    <div>{cont}</div>
                    <div className="px-5" onClick={() => handleAdd()}>
                      +
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <button className="btn-primary">COTIZAR</button>
                </div>
              </div>
            </div>
          </div>
          <div className="details-product row">
            <h3>Detalle</h3>
            <p>{product?.descripcion_larga}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCardSetCant
