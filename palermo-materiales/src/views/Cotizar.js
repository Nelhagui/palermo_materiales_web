import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ProductCombinadoCard from '../components/ProductCombinadoCard.js'
import ListBestSellers from '../components/cotizar/ListBestSellers.js'

const Cotizar = () => {
    const [subcategories, setSubCategories] = useState([])
    const [categories, setCategories] = useState([])
    const [bestSellers, setBestSellers] = useState([]);
    const [filters, setFilters] = useState([])
    let navigate = useNavigate()

    const selectSubcategory = (category) => {
        if(category.id === '132') {
            navigate(`/producto-techo/${category.id}`)
        } else {
            setFilters([...filters, category])
            fetchSubCategories(category.id);
        }
    }

    const selectCategory = ((category)=> {
        setFilters([]);
        fetchSubCategories(category.id);
    }) 

    const fetchSubCategories = ((category_id) => {
        axios.get(`https://test.api.palermomateriales.com.ar/api/categoria/cotizable/${category_id}`)
            .then((res) => setSubCategories(res.data) )
    })

    const clearFilter = ((indice) => {
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
    <div className="container-fluid">
        <div className="row">
            <div className="text-center cotizar-title">
                <h1 className="fw-bold">CALCULAR PRODUCTOS</h1>
                <h4>¿Querés saber cuánto material necesitás cubrir?</h4>
                <h4>Comienza eligiendo una categoria</h4>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="fw-bold">Nuestras categorias</h1>
                        <h4>Seleccioná el tipo de proyecto a realizar</h4>
                    </div>
                </div>
                <div className="row cont-categories">
                    {categories?.map((c) => {
                        return (
                            <div className="col-md-3 cotizar-items button" key={Math.random()} onClick={() => selectCategory(c)}>
                                <img src={c?.foto} alt="foto" />
                                <p>{c.titulo}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="row">
                    {filters?.map((f, index) => {
                        return (
                            <div className="col-md-2 filter-container" key={Math.random()} onClick={()=> clearFilter(index)}>
                                {f.titulo}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="row">
                    { subcategories.length > 0 ?
                            <div className="col-md-12">
                                <h3>Seleccioná el tipo de construcción</h3>
                            </div>
                        :
                        ""
                    }
                </div>
                <div className="row">
                    {
                        subcategories?.map((s) => {
                            if (s.tipo === 'categoria') {
                                return (
                                    <div className="col-md-3 cotizar-subitems"  onClick={() => selectSubcategory(s)} key={Math.random()}>
                                        <div className="circle-subcategorias">
                                            <img src={s.icon} alt="icon" />
                                        </div>
                                        <div className="title-subcategorias">
                                            <p className="h6">{s.titulo}</p>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="col-md-3">
                                        <ProductCombinadoCard
                                          key={Math.random()}
                                          producto={s}
                                          id={s?.id}
                                          title={s?.titulo}
                                          foto={s?.foto}
                                          className="col-auto"
                                          buttonTitle={"COTIZAR"}
                                          categoria_id={s.categoria_id}
                                        />
                                    </div>
                                  )
                            }
                        })
                    }
                </div>
                {
                    bestSellers.length > 0 && subcategories.length === 0 ?  <div className="row"> <ListBestSellers products={bestSellers}/> </div> : ""
                }
            </div>
        </div>
    </div>
  )
}

export default Cotizar