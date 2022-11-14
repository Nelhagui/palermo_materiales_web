import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard.js'

const Cotizar = () => {
  const [categories, setCategories] = useState([])
  const [catId, setCatId] = useState(null)

  useEffect(() => {
    if (!catId) {
      axios
        .get('https://test.api.palermomateriales.com.ar/api/categoria')
        .then((response) => setCategories(response.data))
    } else {
      axios
        .get(
          `https://api.palermomateriales.com.ar/api/categoria/cotizable/${catId}`,
        )
        .then((res) => setCategories(res.data))
    }
  }, [catId])
  return (
    <div className="wrapper  ">
      <div className="text-center cotizar-title">
        <h1 className="fw-bold">CALCULAR PRODUCTOS</h1>
        <h4>¿Querés saber cuánto material necesitás cubrir?</h4>
        <h4>Comienza eligiendo una categoria</h4>
      </div>
      <div className="mt-5 container">
        <h1 className="fw-bold">Nuestras categorias</h1>
        <h4>Seleccioná el tipo de proyecto a realizar</h4>
      </div>
      <div className="cotizar-categorias mt-5 container">
        {categories?.map((c) => {
          return (
            <div key={c.id} className="cotizar-items">
              <img src={c?.foto} />
              <p>{c.titulo}</p>
            </div>
          )
        })}
      </div>
      <div className='container'>
        <h1 className="fw-bold">Productos más buscados</h1>
        <div className="products d-flex flex-wrap justify-content-center">
          <ProductCard className="col-3" />
          <ProductCard className="col-3" />
          <ProductCard className="col-3" />
          <ProductCard className="col-3" />
          <ProductCard className="col-3" />
          <ProductCard className="col-3" />
        </div>
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

export default Cotizar
