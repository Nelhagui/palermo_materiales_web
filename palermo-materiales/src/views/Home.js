import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard.js'
import Techo from '../assets/img/techo.svg'

const Home = () => {
  const [categories, setCategories] = useState([])
  const [catId, setCatId] = useState(2)
  const [subcategories, setSubCategories] = useState({})
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get('https://test.api.palermomateriales.com.ar/api/categoria')
      .then((response) => setCategories(response.data))
  }, [])

  useEffect(() => {
    axios
      .get('https://mocki.io/v1/0900f38f-514e-4462-9de7-44071dbd866f')
      .then((response) => setProducts(response.data[catId].productos))
  }, [catId])

  useEffect(() => {
    products.map((c) => {
      setSubCategories(c.productos_simples)
    })
  }, [products])
  console.log(subcategories)
  

 

  return (
    <div className="wrapper">
      <div className="images-container">
        <div className=" img1">
          <div className="image-titles">
            <h2>BUSCAR PRODUCTOS</h2>
            <h4>¿Estás buscando un producto puntual?</h4>
            <button className="btn-secondary">BUSCAR POR PRODUCTOS</button>
          </div>
        </div>
        <div className=" img2">
          <div className="image-titles">
            <h2>CALCULAR PRODUCTOS</h2>
            <h4>¿Querés saber cuánto material necesitás cubrir?</h4>
            <button className="btn-primary">BUSCAR POR CATEGORIAS</button>
          </div>
        </div>
      </div>
      <br />
      <div className="categories-container">
        <h1 className="mx-auto">Productos más buscados</h1>
        <div className="categories">
          {categories?.map((c) => {
            return (
              <div
                key={c.id}
                className="categorie-items"
                onClick={() => setCatId(c.id)}
              >
                <img src={c.foto} alt="techo-icon" />
                <p>{c.titulo}</p>
              </div>
            )
          })}
        </div>
        <div className="products">
      {subcategories?.slice(0, 4).map((p => {
        return(
          <ProductCard title={p.titulo} img={p.foto} price={p.precio_x_unidad} className="col" />
        )
      }))}
          
        </div>
      </div>
      <div className="footer-image">
        <p style={{ margin: '1em 0 0 10em' }}>Te acompañamos</p>
        <br />
        <p style={{ margin: '1.5em 0px 0px 13em' }}>
          todos tus <strong>proyectos</strong>
        </p>
      </div>
    </div>
  )
}

export default Home
