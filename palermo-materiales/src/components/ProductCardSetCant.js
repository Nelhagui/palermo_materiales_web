import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CartContext from '../context/CartContext.js'

const ProductCardSetCant = () => {
  const [product, setProduct] = useState(null)
  const [productStorege] = useState(
    JSON.parse(localStorage.getItem('producto-agregar')),
  )
  const [cont, setCont] = useState(1)

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

  console.log(product)

  return (
    <div className="card-product">
        <div className='row'>
            <div className='img-conte col-12 col-md-5'>
                <img src={product?.foto} alt="foto" />
            </div>
            <div className='info-card-product col-12 col-md-7'>
                <div className='col-12'>
                    <h1>{product?.titulo}</h1>
                    <p>${product?.productos_simples[0]?.precio_x_unidad}</p>
                    <hr />
                    <p>{product?.descripcion_corta}</p>
                </div>
                <div className='row contenedor-botones'>
                    <div className="col-12 col-md-5" >
                        <div className='contador'>
                            <div className="button-change-count" onClick={() => handleRest()}> - </div>
                            <div>{cont}</div>
                            <div className="button-change-count" onClick={() => handleAdd()}> + </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-7'>
                        <button className="btn-primary" onClick={()=>{console.log('cotizar')}}> AGREGAR AL CARRITO </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCardSetCant
