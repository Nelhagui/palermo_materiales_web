import { useEffect, useState } from 'react'
import { Input } from 'reactstrap'
import ProductCard from '../components/ProductCard.js'
import Techo from '../assets/img/techo.svg'
import axios from 'axios'

const Comprar = () => {
  const [categories, setCategories] = useState([])
  const [catId, setCatId] = useState(1)
  const [subcategories, setSubCategories] = useState({})

  useEffect(() => {
    axios
      .get('https://test.api.palermomateriales.com.ar/api/categoria')
      .then((response) => setCategories(response.data))
      .then((response ) => setCatId(response.data.id))
  }, [])

  useEffect(() => {
    if (catId) {
      axios
        .get(
          `https://api.palermomateriales.com.ar/api/categoria/cotizable/${catId}`,
        )
        .then((res) => setSubCategories(res.data))
    } else {
      console.log('nova')
    }
  }, [catId])


  return (
    <div className="wrapper">
      <div className="img-container text-center">
        <h3 className="fw-bold">BUSCAR PRODUCTOS</h3>
        <h5>¿Estás buscando un producto puntual? Utiliza nuestro buscador</h5>
        <Input className=" mx-auto " />
      </div>
      <div className="d-flex mt-5 mx-5">
        <div className="categories-filter col-3">
          <h4>Categorías</h4>
          {categories?.map((c, idx) => {
            
            return (
              <div>
                <div className="d-flex align-items-center my-2 side-categories">
                  <img
                    src={Techo}
                    alt="icon"
                    className="my-auto"
                    style={{ width: '1.5em' }}
                  />
                  <p className="my-auto">{c.titulo}</p>
                </div>
                {subcategories?.map((s) => {
                  return (
                    <div key={s.id} className='d-none'>
                      <p style={{ marginLeft: '2em' }}>{s.titulo}</p>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
        <div className="col-10">
          <div className="products d-flex flex-wrap justify-content-center">
            <ProductCard className="col-3" />
            <ProductCard className="col-3" />
            <ProductCard className="col-3" />
            <ProductCard className="col-3" />
            <ProductCard className="col-3" />
            <ProductCard className="col-3" />
          </div>
        </div>
      </div>
      <div className="footer-image">
        <p style={{ margin: '1em 0 0 10em' }}>
          <strong>Descargate</strong> nuestra app
        </p>
        <br />
        <p style={{ margin: '1.5em 0px 0px 13em' }}>y comenzá a comprar</p>
      </div>
    </div>
  )
}

export default Comprar
