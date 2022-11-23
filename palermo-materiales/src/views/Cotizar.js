import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard.js'

const Cotizar = () => {
  const [categories, setCategories] = useState([])
  const [catId, setCatId] = useState(1)
  const [subcategories, setSubCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState([])
  const [products, setProducts] = useState([])

  let selectedCategoryContainer = document.querySelector('.categories-cotizar')
    .classList
  useEffect(() => {
    axios
      .get('https://test.api.palermomateriales.com.ar/api/categoria')
      .then((response) => setCategories(response.data))
  }, [])
  useEffect(() => {
    if (catId) {
      selectedCategoryContainer.add('selected')
      axios
        .get(
          `https://api.palermomateriales.com.ar/api/categoria/cotizable/${catId}`,
        )
        .then((res) => setSelectedCategory(res.data))
    }
  }, [catId])

  useEffect(() => {
    axios
      .get('https://test.api.palermomateriales.com.ar/api/categoria')
      .then((response) => setCategories(response?.data))
      .then((response) => setCatId(response?.data?.id))
  }, [])

  useEffect(() => {
    axios
      .get('https://mocki.io/v1/0900f38f-514e-4462-9de7-44071dbd866f')
      .then((response) => setProducts(response?.data[catId]?.productos))
  }, [catId])

  useEffect(() => {
    products?.map((c) => {
      setSubCategories(c.productos_simples)
    })
  }, [products])
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
            <div
              key={c.id}
              className="cotizar-items button"
              onClick={() => setCatId(c.id)}
            >
              <img src={c?.foto} alt="foto" />
              <p>{c.titulo}</p>
            </div>
          )
        })}
      </div>
      <div
        className="cotizar-categorias mt-5 container"
      >
        {selectedCategory.map((k) => {
          return (
            <div className="cotizar-items">
              <img alt="icon" src={k.foto} />
              <p>{k.titulo}</p>
            </div>
          )
        })}
      </div>
      <div className="container">
        <h1 className="fw-bold">Productos más buscados</h1>
        <div className="products d-flex flex-wrap justify-content-center">
          {subcategories?.map((p) => {
            return (
              <ProductCard
                key={p.id}
                id={p.id}
                title={p.titulo}
                img={p.foto}
                price={p.precio_x_unidad}
                className="col-auto"
              />
            )
          })}
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
