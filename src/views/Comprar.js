import { useEffect, useState } from 'react'
import { Input } from 'reactstrap'
import ProductCardSetCant from '../components/ProductCardSetCant.js';
import ListProducts from '../components/comprar/ListProducts.js';
import axios from 'axios'
import search from '../assets/img/Search_blanco.svg'

const Comprar = () => {
    const [catId, setCatId] = useState('')
    const [products, setProducts] = useState([]);
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
        axios.get(`${process.env.REACT_APP_API_URL}/categoria`)
        .then((response) => {
            setCatId(response?.data[0].id)
        })
    }, [])

    useEffect(() => {
        if(catId > 0 ){
            axios.get(`${process.env.REACT_APP_API_URL}/categoria/${catId}/comprar`)
            .then((response) => setProducts(response.data))
        }
    }, [catId])

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
