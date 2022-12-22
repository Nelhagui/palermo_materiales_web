import axios from 'axios'
import React from 'react'
import CartContext from '../context/CartContext.js'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Producto = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(JSON.parse(localStorage.getItem('producto')))
  const {cart, addProduct } = useContext(CartContext)
  const [cont, setCont] = useState(1)
  const [productCotizado, setProductCotizado] = useState([])

  const handleRest = () => {
    if (cont > 0)
        setCont(cont - 1)
  }
  const handleAdd = () => {
    setCont(cont + 1)
  }

  const fetchProducto = () => {
    axios.get(`https://test.api.palermomateriales.com.ar/api/productocombinado/${id}`)
        .then((res) => setProduct(res.data))
  }
  const validoLocalStorage = () => {
    if(product !== null)
        if(Number(product.id) !== Number(id))
            fetchProducto();
    else
        fetchProducto();
  }
  
  useEffect(() => {
    validoLocalStorage();
  }, [id])

  const addToCart = () => {    
    addProduct([... cart, productCotizado])
  }

  function handleNull() {
    const cotizarBody = {
      cantidad: cont,
      producto_combinado_id: id,
    };
    axios
      .post(
        "https://test.api.palermomateriales.com.ar/api/cotizador/cotizar",
        cotizarBody
      )
      .then((response) => setProductCotizado(response.data));
  }
  console.log(cart);

  return (
    <div className="container-fluid wrapper">
        <div className="text-center cotizar-title">
            <h1 className="fw-bold">CALCULAR PRODUCTOS</h1>
            <h4>¿Querés saber cuánto material necesitás cubrir?</h4>
            <h4>Comienza eligiendo una categoria</h4>
        </div>
      
        <div className="card-product">
            <div className='row'>
                <div className='img-conte col-12 col-md-5'>
                    <img src={product?.foto} alt="foto" />
                </div>
                <div className='info-card-product col-12 col-md-7'>
                    <div>
                        <h1>{product?.titulo}</h1>
                        <p>numero id</p>
                        <hr />
                        <p>{product?.descripcion_corta}</p>
                    </div>
                    <div className="mt-5">
                        <p>Ingresar metro cuadrado:</p>
                        <div className='row contenedor-botones'>
                            <div className="col-12 col-md-5" >
                                <div className='contador'>
                                    <div className="button-change-count" onClick={() => handleRest()}> - </div>
                                    <div>{cont}</div>
                                    <div className="button-change-count" onClick={() => handleAdd()}> + </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-7'>
                                <button className="btn-primary" onClick={handleNull}> COTIZAR </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        { productCotizado.hasOwnProperty('cotizacion') ?
                <>
                    <div className="cotizar-table container">
                        <div className="header fw-bold">
                            <div className="productos-simples">Productos simples</div>
                            <div className="cotizar-cantidad">Cant.</div>
                            <div className="cotizar-precio">Precio Un.</div>
                        </div>
                        {productCotizado?.producto_combinado?.productos_simples.map((p) => {
                            return (
                                <div className="items-container" style={{ backgroundColor: '#F7F7F7 !important' }}  key={Math.random()}>
                                    <div className="productos-simples-items">{p?.alias}</div>
                                    <div className="productos-cantidad-cotizar">
                                        {p?.cantidad}
                                    </div>
                                    <div className='productos-subtotal'> $ {p?.subtotal}</div>
                                </div>
                            )})
                        }
                        <div className="table-footer fw-bold">
                            <div className="productos-simples"> TOTAL</div>
                            <div className="cotizar-cantidad">{productCotizado?.cotizacion.cantidad}</div>
                            <div className="cotizar-precio">${productCotizado?.cotizacion.subtotal}</div>
                        </div>
                    </div>
                    <div className="button-add">
                        <button className="btn-primary mt-5" onClick={() => addToCart()}>
                            Agregar al carrito
                        </button>
                    </div>
                </>
            :
            ""
        }
    </div>
  )
}

export default Producto
