import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Producto = () => {
  let { id } = useParams()
  const [product, setProduct] = useState()
  const [cont, setCont] = useState(0)
  console.log(id)
  const handleRest = () => {
    if (cont > 0) {
      setCont(cont-1)
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
  console.log(product)
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
              <div className='mt-5'>
                <p>Ingresar metro cuadrado:</p>
                <div className="button-container mt-4">
                  <div className='contador'>
                    <div className='h4' onClick={() => handleRest()}>-</div>
                    <div>{cont}</div>
                    <div className='h4' onClick={() => setCont(cont+1)}>+</div>
                  </div>
                  <button className="btn-primary">COTIZAR</button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Producto
