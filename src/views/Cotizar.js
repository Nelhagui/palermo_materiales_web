import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ListBestSellers from '../components/cotizar/ListBestSellers.js'
import ListCategories from '../components/cotizar/ListCategories.js'
import ListFilters from '../components/cotizar/ListFilters.js'
import SubCategoryResults from '../components/cotizar/SubCategoryResults.js'

const Cotizar = () => {
    const [subcategories, setSubCategories] = useState([])
    const [subcategoriesIsLoading, setSubcategoriesIsLoading] = useState(false)
    const [idCategorySelected, setIdCategorySelected] = useState(false);
    const [categories, setCategories] = useState([])
    const [styleCategories, setStyleCategories] = useState("row cont-categories")
    const [bestSellers, setBestSellers] = useState([]);
    const [filters, setFilters] = useState([])
    let navigate = useNavigate()

    const selectSubcategory = (category) => {
        setSubCategories([]);
        if(category.id === 132) {
            navigate(`/producto-techo/${category.id}`)
        } else {
            setFilters([...filters, category])
            fetchSubCategories(category.id);
        }
    }

    const selectCategory = ((category)=> {
        setFilters([]);
        setIdCategorySelected(category.id)
        setSubCategories([]);
        fetchSubCategories(category.id);
        setStyleCategories("row cont-categories selected")
    }) 

    const fetchSubCategories = ((category_id) => {
        setSubcategoriesIsLoading(true);
        axios.get(`https://test.api.palermomateriales.com.ar/api/categoria/cotizable/${category_id}`)
            .then((res) => {setSubCategories(res.data); setSubcategoriesIsLoading(false)} )
    })

    const clearFilter = ((indice) => {
        
        setSubCategories([]);
        const newFilters = filters.filter((item, index) => index < indice);
        setFilters(newFilters);
        const category_id = indice !== 0 ? filters[indice-1].id : filters[indice].padre_id;
        fetchSubCategories(category_id);
    })

    useEffect(() => {
        axios.get(`https://test.api.palermomateriales.com.ar/api/categoria/1/mas-vendidos`)
            .then((response) => setBestSellers(response?.data))
        axios.get('https://test.api.palermomateriales.com.ar/api/categoria')
            .then((response) => setCategories(response.data))
    }, []);

  return (
    <div className="container-fluid wrapper">
        <div className="row">
            <div className="text-center cotizar-title">
                <h1 className="fw-bold">CALCULAR PRODUCTOS</h1>
                <h4>¿Querés saber cuánto material necesitás cubrir?</h4>
                <h4>Comienza eligiendo una categoria</h4>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 cont-gral-category">
                <div className="row cont-text-category">
                    <div className="col-md-12">
                        <h1 className="fw-bold">Nuestras categorias</h1>
                        <h4>Seleccioná el tipo de proyecto a realizar</h4>
                    </div>
                </div>
                <div className={styleCategories}>
                    <ListCategories categories={categories} selectCategory={selectCategory} idCategorySelected={idCategorySelected}/>
                </div>
            </div>
        </div>
        <div className="row cont-filters">
            <ListFilters filters={filters} clearFilter={clearFilter}/>
        </div>
        <div className="row cont-sub-result">
            <SubCategoryResults subcategories={subcategories} selectSubcategory={selectSubcategory} subcategoriesIsLoading={subcategoriesIsLoading} />
            <div className="col-md-12 cont-best-sellers">
                { bestSellers.length > 0 && subcategories.length === 0 && subcategoriesIsLoading === false ?   <ListBestSellers products={bestSellers}/> : "" }
            </div>
        </div>
        <div className="footer-image-cotizar">
          <div className="footer-text">
            <p><strong>Descargate</strong> nuestra app</p>
            <p>y comenzá a operar</p>
          </div>
        </div>
    </div>
  )
}

export default Cotizar