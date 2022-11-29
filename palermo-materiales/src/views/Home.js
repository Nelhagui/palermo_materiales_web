import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard.js'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext.js'

const Home = () => {
  const [categories, setCategories] = useState([])
  const [catId, setCatId] = useState(0)
  const [subcategories, setSubCategories] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    setCatId(categories[0]?.id);
  }, [categories])

  useEffect(() => {
    axios
      .get('https://test.api.palermomateriales.com.ar/api/categoria')
      .then((response) => {
        setCategories(response.data)
      })
  }, [])

  useEffect(() => {
    axios
      .get(`https://test.api.palermomateriales.com.ar/api/categoria/${catId}/mas-vendidos`)
      .then((response) => setProducts(response.data))
  }, [catId])

 
  const { setCart } = useContext(CartContext)

  return (
    <div className="wrapper">
      <div className="images-container">
        <div className=" img1">
          <div className="image-titles">
            <h2>BUSCAR PRODUCTOS</h2>
            <h4>¿Estás buscando un producto puntual?</h4>
            <button className="btn-primary">
              <Link to="/comprar">BUSCAR POR PRODUCTOS</Link>
            </button>
          </div>
        </div>
        <div className=" img2">
          <div className="image-titles">
            <h2>CALCULAR PRODUCTOS</h2>
            <h4>¿Querés saber cuánto material necesitás cubrir?</h4>
            <button className="btn-secondary white">BUSCAR POR CATEGORIAS</button>
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
                <img src={c.icon} alt="techo-icon" />
                <p>{c.titulo}</p>
              </div>
            )
          })}
        </div>
        <div className="products">
          {products?.map((p) => {
            return (
              <ProductCard
                key={p.id}
                id={p.id}
                title={p.productos_simples[0].titulo.toLowerCase()}
                img={p.productos_simples[0].foto}
                price={`$${p.productos_simples[0].precio_x_unidad}`}
                buttonTitle={"AGREGAR AL CARRITO"}
                className="col"
              />
            )
          })}
        </div>
      </div>
      <div className="footer-image">
        <p style={{ margin: '1em 0 0 4em' }}>Te acompañamos</p>
        <br />
        <p style={{ margin: '1.5em 0px 0px 7em' }}>
          todos tus <strong>proyectos</strong>
        </p>
      </div>
    </div>
  )
}

export default Home
