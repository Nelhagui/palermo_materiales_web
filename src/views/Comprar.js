import { useEffect, useState } from 'react'
import { Input } from 'reactstrap'
import ProductCardSetCant from '../components/ProductCardSetCant.js';
import ProductCardLoading from '../components/ProductCardLoading.js';
import ProductSimpleCard from '../components/ProductSimpleCard.js';
import ListProducts from '../components/comprar/ListProducts.js';
import axios from 'axios'
import search from '../assets/img/Search_blanco.svg'

const Comprar = () => {
    const [products, setProducts] = useState([]);
    const [bestProducts, setBestProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isSetCant] = useState(false);
    const [query, setQuery] = useState('')

    const filterBySearch = (e) => {
        if(e?.key === "Enter" || e?.target?.name === 'btn_buscador' )
        {
            if(query.length > 1)
            {
                axios.get(`${process.env.REACT_APP_API_URL}/productocombinado/simple/categorias/buscar?q=${query}`)
                .then((response) => {
                    setProducts(response.data)
                })
            }
        }
    }

    const handleInput = (event) => {
        setQuery(event.target.value )
    }

    useEffect(() => {
        filterBySearch()
    }, [])

    useEffect(() => {
        setIsLoading(true);
        axios
        .get(`${process.env.REACT_APP_API_URL}/categoria/1/mas-vendidos`)
        .then((response) => setBestProducts(response.data))
        .finally(()=> setIsLoading(false));
    }, [])

    
    return (
        <div className="wrapper">
            <div className="img-container comprar text-center">
                <h3 className="fw-bold">BUSCAR PRODUCTOS</h3>
                <h5>¿Estás buscando un producto puntual? Utiliza nuestro buscador</h5>
                <div className="busca-contain">
                    <Input onChange={handleInput} className=" mx-auto input-busca" onKeyUp={filterBySearch} />
                    <button className="btn btn-primary input-group-btn btn-lg btn-search">
                        <img src={search} alt="Search_blanco" name="btn_buscador" onClick={filterBySearch}/>
                    </button>
                </div>
            </div>
            { isSetCant ? <ProductCardSetCant></ProductCardSetCant> :
                <div className="d-flex row comprar-items-contain">
                    <div className="col-12 col-md-12 comprar-produ">
                        <div className="products d-flex flex-wrap justify-content-center">
                            <ListProducts products={products}></ListProducts>
                        </div>
                    </div>
                </div>      
            }
      <div className="categories-container">
        <h1 className="mx-auto">Productos más buscados</h1>
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
            bestProducts?.map((p) => {
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

export default Comprar
