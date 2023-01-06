import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import CartContext from '../context/CartContext.js'



const ProductoPared = () => {
  let { id } = useParams()
  const [setProduct] = useState()
  const [ancho] = useState(1)
  const [largo, setLargo] = useState(1)
  const [postRes, setPostRes] = useState([])
  const [total, setTotal] = useState([])
  const [item, setItem] = useState([])
  const [data, setData] = useState([])

  const { cart, addProduct } = useContext(CartContext)
  const addToCart = () => {
    item.push({ id: data.id, title: data.title, price: data.price })
    setItem(data)
    cart.push(data)
    addProduct(cart)
  }
  const handleRestLargo = () => {
    if (largo > 0) {
      setLargo(largo - 1)
      document.querySelector('.cotizar-table').style.display = 'none'
    }
  }

  const handleAddLargo = () => {
    document.querySelector('.cotizar-table').style.display = 'none'
    setLargo(largo + 1)
  }

  function fetchCategories() {
    if (id) {
      axios
        .get(
          `https://api.palermomateriales.com.ar/api/categoria/cotizable/${id}`,
        )
        .then((res) => setProduct(res.data))
    }
  }
  useEffect(() => {
    fetchCategories()
  }, [id])

 
  function handleNull() {
    if (ancho === 0 || largo === 0) {
      alert('Ingrese una cantidad mayor a 0')
    } else {
      document.querySelector('.cotizar-table').style.display = 'flex'
      axios
        .get(
          `https://api.palermomateriales.com.ar/api/cotizador/cotizar_techo?ancho=${ancho}&largo=${largo}`,
        )
        .then(
          (response) => (
            setPostRes([response.data.producto_combinado?.productos_simples]),
            setTotal([response.data])
          ),
        )
    }
  }

  useEffect(() => {
      postRes.map((r) => {
        setData(r)
      })
  }, [postRes])

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
                                <div className="button-change-count" onClick={() => console.log('hola')}> - </div>
                                <div>0</div>
                                <div className="button-change-count" onClick={() => console.log('hola')}> + </div>
                            </div>
                        </div>
                    </div> 
                    <div className='col-12 col-md-12 mt-4'>
                        <button className="btn-primary" onClick={()=>{console.log('cotizar')}}> COTIZAR </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

      

      <div className="cotizar-table container" style={{ display: 'none' }}>
        <div className="header">
          <div className="productos-simples">Productos simples</div>

          <div className="cotizar-precio">Precio Un.</div>
        </div>
        <div className="items">
          {data.map((c) => {
            return (
              <div>
                <div className="items-container">
                  <div className="productos-simples-items col-4">
                    {c.titulo}
                  </div>

                  <div>${c.precio_x_unidad}</div>
                </div>
              </div>
            )
          })}
        </div>
        {total.map((p) => {
          return (
            <div
              className="total-container fw-bold"
              style={{ backgroundColor: '#F7F7F7 !important' }}
            >
              <div className="productos-simples-items col-4">TOTAL</div>

              <div> $ {p?.cotizacion?.subtotal}</div>
            </div>
          )
        })}
              <div className="button-add" style={{ display: 'none' }}>
        <button className="btn-primary mt-5" onClick={() => addToCart()}>
          Agregar al carrito
        </button>
      </div>
      </div>
    </div>
  )
}

export default ProductoPared
