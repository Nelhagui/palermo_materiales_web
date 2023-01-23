import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import CartContext from '../context/CartContext.js'



const ProductoPared = () => {
  const [productCotizado, setProductCotizado] = useState([])
  const [ancho, setAncho] = useState(1)
  const [largo, setLargo] = useState(1)

  const { cart, addProduct } = useContext(CartContext)

  const addToCart = () => {
    addProduct([...cart, productCotizado])
  }
  
  const handleRestLargo = () => {
    if(largo > 1){
        setLargo(largo-1);
    }
  }

  const handleAddLargo = () => {
    setLargo(largo + 1)
  }

  const handleRestAncho = () => {
    if (ancho > 1) {
      setAncho(ancho - 1)
    }
  }

  const handleAddAncho = () => {
    setAncho(ancho + 1)
  }
 
  function handleSubmit() {
    if (ancho === 0 || largo === 0) {
      alert('Ingrese una cantidad mayor a 0')
    } else {
      axios
        .get(`https://api.palermomateriales.com.ar/api/cotizador/cotizar_techo?ancho=${ancho}&largo=${largo}`, )
        .then(
          (response) => (
            setProductCotizado(response.data)
          ),
        )
    }
  }
  

  return (
    <div className="wrapper">
        <div className="text-center cotizar-title">
            <h1 className="fw-bold cot-title">CALCULAR PRODUCTOS</h1>
            <h4 className="cot-subt">¿Querés saber cuánto material necesitás cubrir?</h4>
            <h4 className="cot-subt">Comienza eligiendo una categoria</h4>
        </div>
        <div className="card-product pared">
            <div className='row'>
                <div className='img-conte col-12 col-md-4'>
                    {/* <img src={product?.foto} alt="foto" /> */}
                    <img src="https://api.palermomateriales.com.ar/images/productos/cotizables/CONST_HUMEDA.jpg" alt="foto" />
                </div>
                <div className='info-card-product col-12 col-md-8'>
                    <div className='titulo-pared'>
                        <h1 className="cot-subt">Construcción Húmeda</h1>
                    </div>
                    <div className="row cont-btn-actions">
                        <div className='col-md-6 col-12 btn-action '>
                            <p className="cot-subt">Ingresar Altura:</p>
                            <div className="button-container mt-2">    
                                <div className="contador col-12 col-md-5" style={{ minWidth: 'fit-content' }} >
                                    <div className="button-change-count" onClick={() => handleRestLargo()}> - </div>
                                    <div>{largo}</div>
                                    <div className="button-change-count" onClick={() => handleAddLargo()}> + </div>
                                </div>
                            </div>
                        </div> 
                        <div className='col-md-6 col-12 btn-action '>
                            <p className="cot-subt">Ingresar Ancho:</p>
                            <div className="button-container mt-2">    
                                <div className="contador col-12 col-md-5" style={{ minWidth: 'fit-content' }} >
                                    <div className="button-change-count" onClick={() => handleRestAncho()}> - </div>
                                    <div>{ancho}</div>
                                    <div className="button-change-count" onClick={() => handleAddAncho()}> + </div>
                                </div>
                            </div>
                        </div> 
                        <div className='col-12 col-md-12 mt-4'>
                            <button className="btn-primary" onClick={() => handleSubmit()}> COTIZAR </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    {/* esta parte es la nueva */}
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
    {/* esta parte es la  nueva */}

      

      
    </div>
  )
}

export default ProductoPared
