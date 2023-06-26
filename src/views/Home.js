import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductSimpleCard from '../components/ProductSimpleCard.js'
import { Link } from 'react-router-dom'
import ProductCardLoading from '../components/ProductCardLoading.js'
import search from '../assets/img/Search_blanco.svg'

const Home = () => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        products.length > 0 ? setIsLoading(false) : setIsLoading(true);
    }, [products])

    useEffect(() => {
        setIsLoading(true);
        axios
        .get(`${process.env.REACT_APP_API_URL}/categoria/1/mas-vendidos`)
        .then((response) => setProducts(response.data))
    }, [])


    // para funcionalidad más buscados en categorías
    //   const [categories, setCategories] = useState([])
    //   const [catId, setCatId] = useState(0)
    //   const [isLoadingCategories, setIsLoadingCategories] = useState(true)
    //   useEffect(() => {
    //     setCatId(categories[0]?.id);
    //   }, [categories])

    //   useEffect(() => {
    //     axios
    //       .get(`${process.env.REACT_APP_API_URL}/categoria`)
    //       .then((response) => {
    //         setCategories(response.data)
    //         setIsLoadingCategories(false);
    //       })
    //   }, [])

  return (
    <div className="wrapper">
      <div className="images-container row">
        <div className="col-12 col-md-6 img1 img-home">
          <div className="image-titles">
            <h2 className="text-img">BUSCAR PRODUCTOS</h2>
            <h4 className="text-img">¿Estás buscando un producto puntual?</h4>
            <Link to="/comprar">
                <button className="btn-secondary white"> 
                    <img src={search} alt="Search_blanco" style={{width: "1.4rem", marginRight: "1rem"}}/>
                    BUSCAR POR PRODUCTOS 
                </button>
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-6 img2 img-home">
          <div className="image-titles">
            <h2 className="text-img">CALCULAR PRODUCTOS</h2>
            <h4 className="text-img">¿Querés saber cuánto material necesitás cubrir?</h4>
                <Link to="/cotizar">
                    <button className="btn-secondary white">
                        <img src={search} alt="Search_blanco" style={{width: "1.4rem", marginRight: "1rem"}}/>
                        BUSCAR POR CATEGORIAS
                    </button>
                </Link>
          </div>
        </div>
      </div>
      <br />
      <div className="categories-container">
        <h1 className="mx-auto">Productos más buscados</h1>
        {/* <div className={isLoadingCategories ? "categories categories-loading" : "categories"}>
          {
            isLoadingCategories
            ?
            <>
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
        </div> */}
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
                <ProductSimpleCard
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
        <div className="footer-text">
          <p>Te acompañamos</p>
          <p>en todos tus <strong>proyectos</strong> </p>
        </div>
      </div>
    </div>
  )
}

export default Home
