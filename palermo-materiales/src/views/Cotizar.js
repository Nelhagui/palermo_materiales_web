import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard.js'
import Techo from '../assets/img/techo.svg'

const Cotizar = () => {
  const [categories, setCategories] = useState([])
  const [catId, setCatId] = useState([])
  const [subcategories, setSubCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState([])
  const [products, setProducts] = useState([])
  const [selectedFilter, setSelectedFilter] = useState([])
  const [isCombinado, setIsCombinado] = useState([])
  let navigate = useNavigate()
  let selectedCategoryContainer = document.querySelector(
    '.cotizar-subcategorias',
  )
  let categorySelected = document.querySelector('.cotizar-categorias')
  function onLoad(){
    selectedFilter.length(0)
  }
  window.onload = onLoad()
  function handleClick(k) {
    setCatId(k?.id)
    selectedFilter.push(k)
    // if (isCombinado.tipo == 'categoria') {
    //   console.log('categoria')
    // } else {
    //   localStorage.setItem("productItemCotizar", isCombinado.id)
    //   navigate(`/producto/${isCombinado.id}`)
    //   console.log('no categoria')
    // }
    console.log('SELECTED FILTER', selectedFilter)
  }
  function handleCategories(c) {
    setSelectedFilter([c])
    selectedFilter.push(c)
    setCatId(c?.id)
    console.log(selectedFilter)
  }
  useEffect(() => {
    handleCategories()
  }, [])

  function clearFilter(idx, f) {
    if (selectedFilter.length > 0) {
      selectedFilter.length = idx
      setSelectedFilter(selectedFilter)
      setCatId(selectedFilter[idx - 1]?.id)
    }
    console.log(selectedFilter)
  }
  function fetchCategories() {
    if (catId) {
      selectedCategoryContainer?.classList.add('selected')
      categorySelected?.classList.add('selected')
      axios
        .get(
          `https://api.palermomateriales.com.ar/api/categoria/cotizable/${catId}`,
        )
        .then((res) => setSelectedCategory(res.data))
    }
  }
  function productSet() {
    axios
      .get('https://mocki.io/v1/0900f38f-514e-4462-9de7-44071dbd866f')
      .then((response) => setProducts(response?.data[catId]?.productos))
  }
  useEffect(() => {
    selectedCategory.map((producto) => {
      setIsCombinado(producto)
      return isCombinado
    })
  }, [selectedCategory])
  useEffect(() => {
    axios
      .get('https://test.api.palermomateriales.com.ar/api/categoria')
      .then((response) => setCategories(response.data))
  }, [])

  useEffect(() => {
    axios
      .get('https://test.api.palermomateriales.com.ar/api/categoria')
      .then((response) => setCategories(response?.data))
      .then((response) => setCatId(response?.data?.id))
  }, [])

  useEffect(() => {
    fetchCategories()
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
              onClick={() => handleCategories(c)}
            >
              <img src={c?.foto} alt="foto" />
              <p>{c.titulo}</p>
            </div>
          )
        })}
      </div>
      <div className="filtro-aplicado container">
        {selectedFilter.map((f, idx) => {
          return (
            <div
              className="filter-container"
              id={`filter${idx}`}
              onClick={() => clearFilter(idx, f)}
            >
              <p className="">{f?.titulo}&nbsp;&nbsp;X</p>
            </div>
          )
        })}
      </div>
      <div className="cotizar-subcategorias mt-5 container">
        {selectedCategory.map((k) => {
          if (isCombinado.tipo == 'categoria') {
            return (
              <div className="cotizar-subitems" onClick={() => handleClick(k)}>
                <div className="circle-subcategorias">
                  <img src={Techo} alt="icon" />
                </div>
                <div className="title-subcategorias">
                  <p className="h6">{k.titulo}</p>
                </div>
              </div>
            )
          } else {
            return (
              <ProductCard
                key={k.id}
                id={k.id}
                title={k.titulo}
                img={k.foto}
                className="col-auto"
                buttonTitle={"COTIZAR"}
                categoria_id={k.categoria_id}
              />
            )
          }
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
                price={`$${p.precio_x_unidad}`}
                buttonTitle={"AGREGAR AL CARRITO"}
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
