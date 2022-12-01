import { useEffect, useState } from 'react'
import { Input } from 'reactstrap'
import ProductCard from '../components/ProductCard.js'
import axios from 'axios'

const Comprar = () => {
  const [categories, setCategories] = useState([])
  const [catId, setCatId] = useState(1)
  const [subcategories, setSubCategories] = useState([])
  const [products, setProducts] = useState([])
  const [isLoadingCategories, setIsLoadingCategories] = useState(true)

  const searchProduct = (e) => {
    const query = e?.target?.value;
    if(e?.key == "Enter")
    {
      if(query.length > 2)
      {
        
          axios
          .get(`https://test.api.palermomateriales.com.ar/api/productocombinado/simple/buscar?q=${query}`)
          .then((response) => {
            setProducts(response?.data);
          })
        console.log('envio esto: ', query);
        
      }
      else
      {
        console.log('ingrese al menos 3 caracteres');
      }
    }
  }

  useEffect(() => {
    axios
      .get('https://test.api.palermomateriales.com.ar/api/categoria')
      .then((response) => {
        setCategories(response?.data)
        setCatId(response?.data.id)
        setIsLoadingCategories(false);
      })
  }, [])

  useEffect(() => {
    setCatId(categories[0]?.id);
  }, [categories])

  useEffect(() => {
    if(catId)
    {
      axios
        .get(`https://test.api.palermomateriales.com.ar/api/categoria/${catId}/comprar`)
        .then((response) => setProducts(response.data))
    }
  }, [catId])

  useEffect(() => {
    products?.map((c) => {
      setSubCategories(c.productos_simples)
    })
  }, [products])

  return (
    <div className="wrapper">
      <div className="img-container text-center">
        <h3 className="fw-bold">BUSCAR PRODUCTOS</h3>
        <h5>¿Estás buscando un producto puntual? Utiliza nuestro buscador</h5>
        <Input onKeyUp={searchProduct} className=" mx-auto " />
      </div>
      <div className="d-flex mt-5 mx-5">
        <div className="categories-filter col-3">
          <h4>Categorías</h4>
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
              categories?.map((c, idx) => {
                return (
                  <div key={Math.random()}>
                    <div  className="d-flex align-items-center my-2 gap-2 side-categories">
                      <img
                        src={c.icon}
                        alt="icon"
                        className="my-auto"
                        style={{ width: '1.5em' }}
                      />
                      <p className="my-auto" onClick={() => setCatId(c.id)}>
                        {c.titulo}
                      </p>
                    </div>
                    {[subcategories]?.map((s) => {
                      return (
                        <div key={Math.random()} className="">
                          <p style={{ marginLeft: '2em' }}>{s.titulo}</p>
                        </div>
                      )
                    })}
                  </div>
                )
              })
          }
        </div>
        <div className="col-10">
          <div className="products d-flex flex-wrap justify-content-center">
            {products?.map((p) => {
              return (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  title={p.productos_simples[0].titulo}
                  img={p.productos_simples[0].foto}
                  price={`$${p.productos_simples[0].precio_x_unidad}`}
                  buttonTitle={"AGREGAR AL CARRITO"}
                  className="col-auto"
                />
              )
            })}
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
