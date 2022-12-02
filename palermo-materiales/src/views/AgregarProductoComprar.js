import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Input } from 'reactstrap';
import CartContext from '../context/CartContext.js'
import ProductCardSetCant from '../components/ProductCardSetCant.js';

const AgregarProductoComprar = () => {
  


  const filterBySearch = (e) => {
    const query = e?.target?.value
    console.log(e?.target?.value)
    // var updatedList = [...products]
    
    if (query) {
      // setProducts(updatedList)
    } else {
      
    }
  }


    return (
        <div className="wrapper">
            <div className="img-container text-center">
                <h3 className="fw-bold">BUSCAR PRODUCTOS</h3>
                <h5>¿Estás buscando un producto puntual? Utiliza nuestro buscador</h5>
                <Input onChange={filterBySearch} className=" mx-auto " />
            </div>
            <div className="d-flex mt-5 mx-5">
                <ProductCardSetCant></ProductCardSetCant>
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

export default AgregarProductoComprar
