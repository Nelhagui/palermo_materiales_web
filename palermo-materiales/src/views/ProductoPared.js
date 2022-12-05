import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductoPared = () => {
  let { id } = useParams()
  const [product, setProduct] = useState()
  const [ancho, setAncho] = useState(0)
  const [largo, setLargo] = useState(0)
  const [postRes, setPostRes] = useState([])
  const [total, setTotal] = useState([])
  const [data, setData] = useState([])

  let itemId = localStorage.getItem('item-id')
  const handleRestLargo = () => {
    if (largo > 0) {
      setLargo(largo - 1)
      document.querySelector('.cotizar-table').style.display = 'none'
    }
  }
  const handleRestAncho = () => {
    if (ancho > 0) {
      setAncho(ancho - 1)
      document.querySelector('.cotizar-table').style.display = 'none'
    }
  }

  const handleAddLargo = () => {
    document.querySelector('.cotizar-table').style.display = 'none'
    setLargo(largo + 1)
  }

  const handleAddAncho = () => {
    document.querySelector('.cotizar-table').style.display = 'none'
    setAncho(ancho + 1)
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
    if (ancho == 0 || largo == 0) {
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
    {
      postRes.map((r) => {
        setData(r)
      })
    }
  }, [postRes])
  console.log('TOTAL', total)
  return (
    <div className="wrapper">
      <div className="text-center cotizar-title">
        <h1 className="fw-bold">CALCULAR PRODUCTOS</h1>
        <h4>¿Querés saber cuánto material necesitás cubrir?</h4>
        <h4>Comienza eligiendo una categoria</h4>
      </div>

      <div className="card-product p-5 ">
        <img
          className="foto-cotizar"
          src="https://api.palermomateriales.com.ar/images/productos/cotizables/CONST_HUMEDA.jpg"
          alt="foto"
        />
        <div>
          <div>
            <h1>Construccion humeda</h1>
            <hr />
            <p></p>
          </div>
          <div className="button-container mt-4">
            <div>
              <p>Ingresar altura:</p>
              <div className="button-container mt-4">
                <div className="contador ">
                  <div className="h4" onClick={() => handleRestLargo()}>
                    -
                  </div>
                  <div>{largo}</div>
                  <div className="h4" onClick={() => handleAddLargo()}>
                    +
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <p>Ingresar ancho:</p>
              <div className="button-container mt-4">
                <div className="contador">
                  <div className="h4" onClick={() => handleRestAncho()}>
                    -
                  </div>
                  <div>{ancho}</div>
                  <div className="h4" onClick={() => handleAddAncho()}>
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="btn-primary" onClick={handleNull}>
            COTIZAR
          </button>
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
      </div>
    </div>
  )
}

export default ProductoPared
