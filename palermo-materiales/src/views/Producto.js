import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Producto = () => {
  let { id } = useParams()
  const [product, setProduct] = useState()
  const [cont, setCont] = useState(0)
  const [postRes, setPostRes] = useState([])
  const [total, setTotal] = useState([])
  const [data, setData] = useState([])

  let itemId = localStorage.getItem('item-id')
  const handleRest = () => {
    if (cont > 0) {
      setCont(cont - 1)
    }
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
    if (cont === 0) {
      alert('La cantidad no puede ser 0')
    } else {
      const cotizarBody = {
        cantidad: cont,
        producto_combinado_id: itemId,
      }
      console.log(cotizarBody)
      axios
        .post(
          'https://test.api.palermomateriales.com.ar/api/cotizador/cotizar',
          cotizarBody,
        )
        .then(
          (response) => (
            setPostRes([response.data.producto_combinado?.productos_simples]),
            setTotal([response.data])
          ),
        )
      console.log(postRes)
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
      {product?.map((p) => {
        return (
          <div className="card-product p-5 ">
            <img src={p.foto} alt="foto" />
            <div>
              <div>
                <h1>{p.titulo}</h1>
                <p>numero id</p>
                <hr />
                <p>{p.descripcion_larga}</p>
              </div>
              <div className="mt-5">
                <p>Ingresar metro cuadrado:</p>
                <div className="button-container mt-4">
                  <div className="contador col-4" style={{minWidth: 'fit-content'}}>
                    <div className="h4" onClick={() => handleRest()}>
                      -
                    </div>
                    <div>{cont}</div>
                    <div className="h4" onClick={() => setCont(cont + 1)}>
                      +
                    </div>
                  </div>
                  <button className="btn-primary" onClick={handleNull}>
                    COTIZAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      <div className="cotizar-table container">
        <div className="header">
          <div className="productos-simples">Productos simples</div>
          <div className="cotizar-cantidad">Cantidad</div>
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
                  <div className="productos-cantidad-cotizar">{cont} </div>
                  <div>${c.precio_x_unidad}</div>
                </div>
              </div>
            )
          })}
        </div>
        {total.map((p) => {
          return (
            <div>
              <div className="items-container">
                <div className="productos-simples-items col-4">TOTAL</div>
                <div className="productos-cantidad-cotizar">
       
                  {p?.cotizacion?.cantidad}
                </div>
                <div> $ {p?.cotizacion?.subtotal}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Producto
