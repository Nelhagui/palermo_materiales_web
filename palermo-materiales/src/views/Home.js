import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard.js'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext.js'
import ProductCardLoading from '../components/ProductCardLoading.js'

const Home = () => {
  const [categories, setCategories] = useState([])
  const [catId, setCatId] = useState(0)
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingCategories, setIsLoadingCategories] = useState(true)

  useEffect(() => {
    setCatId(categories[0]?.id);
  }, [categories])

  useEffect(() => {
    products.length > 0 ? setIsLoading(false) : setIsLoading(true);
  }, [products])

  useEffect(() => {
    axios
      .get('https://test.api.palermomateriales.com.ar/api/categoria')
      .then((response) => {
        setCategories(response.data)
        setIsLoadingCategories(false);
      })
  }, [])

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://test.api.palermomateriales.com.ar/api/categoria/${catId}/mas-vendidos`)
      .then((response) => setProducts(response.data))
  }, [catId])

 
  const { setCart } = useContext(CartContext)

  return (
    <div className="wrapper">
      <div className="images-container row">
        <div className="col-12 col-md-6 img1 img-home">
          <div className="image-titles">
            <h2 className="text-img">BUSCAR PRODUCTOS</h2>
            <h4 className="text-img">¿Estás buscando un producto puntual?</h4>
            <button className="btn-primary">
              <Link to="/comprar">BUSCAR POR PRODUCTOS</Link>
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6 img2 img-home">
          <div className="image-titles">
            <h2 className="text-img">CALCULAR PRODUCTOS</h2>
            <h4 className="text-img">¿Querés saber cuánto material necesitás cubrir?</h4>
              <button className="btn-secondary white">
                <Link to="/cotizar">BUSCAR POR CATEGORIAS</Link>
              </button>
          </div>
        </div>
      </div>
      <br />
      <div className="categories-container">
        <h1 className="mx-auto">Productos más buscados</h1>
        <div className="categories">
          {
            isLoadingCategories
            ?
            <>
              <div className="btn-category loading"></div>
              <div className="btn-category loading"></div>
              <div className="btn-category loading"></div>
              <div className="btn-category loading"></div>
            </>
            :
            categories?.map((c) => {
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
            })
          }
        </div>
        <div className="products">
          {
            isLoading 
            ?  
              <>
                <ProductCardLoading />
                <ProductCardLoading />
                <ProductCardLoading />
                <ProductCardLoading />
              </>
            : 
            products?.map((p) => {
              return (
                <ProductCard
                  producto={p}
                  seccion={"home"}
                  key={Math.random()}
                  buttonTitle={"AGREGAR AL CARRITO"}
                  className="col"
                />
              )
            })
          }
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
