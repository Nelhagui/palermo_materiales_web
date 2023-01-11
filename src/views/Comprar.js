import { useEffect, useState } from 'react'
import { Input } from 'reactstrap'
import ProductCardSetCant from '../components/ProductCardSetCant.js';
import ListCategories from '../components/comprar/ListCategories.js';
import ListProducts from '../components/comprar/ListProducts.js';
import axios from 'axios'
import search from '../assets/img/Search_blanco.svg'

const Comprar = () => {
  const [categories, setCategories] = useState([])
  const [catId, setCatId] = useState(1)
  const [subcategories, setSubCategories] = useState([])
  const [products, setProducts] = useState([]);
  const [isSetCant] = useState(false);

  const reorganizoData = (data) => {
      const prodOrganizados = [];
      data.forEach((element,index) => {
          prodOrganizados.push({...element.combinado_simple[0], productos_simples: [element], categorias_padre: (element.categorias_padres_id ? element.categorias_padres_id : []), subcategorias: element.categorias   });
      });
      console.warn(data);
      console.log(prodOrganizados);
      setProducts(prodOrganizados);
  }

  const filterBySearch = (e) => {
    const query = e?.target?.value
    if(e?.key === "Enter")
    {
        if(query.length > 3)
        {
              axios.get(`https://test.api.palermomateriales.com.ar/api/productocombinado/simple/categorias/buscar?q=${query}`)
              .then((response) => {
                reorganizoData(response.data);
              })

        }
    }
  }
  useEffect(() => {
    filterBySearch()
  }, [])
  useEffect(() => {
    axios
      .get('https://test.api.palermomateriales.com.ar/api/categoria')
      .then((response) => {
        setCategories(response?.data)
        setCatId(response?.data.id)
      })
  }, [])

  useEffect(() => {
    setCatId(categories[0]?.id);
  }, [categories])

  useEffect(() => {
    axios
      .get(`https://test.api.palermomateriales.com.ar/api/categoria/${catId}/comprar`)
      .then((response) => setProducts(response.data))
  }, [catId])

  useEffect(() => {
    products?.map((c) => {
      setSubCategories([])
    })
  }, [products])

  return (
    <div className="wrapper">

      <div className="img-container comprar text-center">
        <h3 className="fw-bold">BUSCAR PRODUCTOS</h3>
        <h5>¿Estás buscando un producto puntual? Utiliza nuestro buscador</h5>
        <div className="busca-contain">
          <Input onKeyDown={filterBySearch} className=" mx-auto input-busca" />
          <button className="btn btn-primary input-group-btn btn-lg btn-search"><img src={search} alt="Search_blanco" /></button>
        </div>
      </div>
      { isSetCant ? <ProductCardSetCant></ProductCardSetCant> :
        <div className="d-flex row comprar-items-contain">
            <div className="comprar-items col-2">
                <h4 className="fw-bold cot-title">Categorías</h4>
                <ListCategories categories={categories} subcategories={subcategories} setCatId={setCatId}></ListCategories>
            </div>
            <div className="col-12 col-md-10 comprar-produ">
                <div className="products d-flex flex-wrap justify-content-center">
                <ListProducts products={products}></ListProducts>
                </div>
            </div>
        </div>      
      }
        <div className="footer-image-cotizar">
          <div className="footer-text">
            <p><strong>Descargate</strong> nuestra app</p>
            <p>y comenzá a operar</p>
          </div>
        </div>
    </div>
  )
}

export default Comprar
