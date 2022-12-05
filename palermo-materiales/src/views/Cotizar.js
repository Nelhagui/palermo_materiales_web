import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ProductCombinadoCard from '../components/ProductCombinadoCard.js'
import ProductSimpleCard from '../components/ProductSimpleCard.js'
import Techo from '../assets/img/techo.svg'

const Cotizar = () => {
  const [categories, setCategories] = useState([])
  const [bestSellers, setBestSellers] = useState([]);
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
      if (idx > 0) {
        setCatId(selectedFilter[idx - 1]?.id)
        document.querySelector(`#filter${idx}`).style.display = 'none'

      }else{
        setSelectedFilter([])
        // selectedCategoryContainer?.classList.remove('selected')
        // categorySelected?.classList.remove('selected')
      }
    }
    console.log(selectedFilter)
  }
  function fetchCategories() {
    if (catId) {
      selectedCategoryContainer?.classList.add('selected')
      categorySelected?.classList.add('selected')
      axios
        .get(
          `https://test.api.palermomateriales.com.ar/api/categoria/cotizable/${catId}`,
        )
        .then((res) => setSelectedCategory(res.data))
    }
  }
  useEffect(() => {
    axios
      .get(`https://test.api.palermomateriales.com.ar/api/categoria/1/mas-vendidos`)
      .then((response) => {
        console.log(response?.data);
        setBestSellers(response?.data)
      })
  }, []);
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
      <div className="filtro-aplicado">
        {selectedFilter.map((f, idx) => {
          return (
            <div
              className="filter-container"
              id={`filter${idx}`}
              onClick={() => clearFilter(idx, f)}
            >
              <p className="">{f?.titulo}&nbsp;&nbsp; <span className="delete-item-filter">X</span></p>
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
              <ProductCombinadoCard
                key={k.id}
                id={k.id}
                title={k.titulo}
                foto={k?.foto}
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
          {bestSellers?.map((p) => {
            return (
              <ProductSimpleCard
                key={p.id}
                producto={p}
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
