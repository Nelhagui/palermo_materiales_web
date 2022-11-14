import {useState} from 'react'

const ProductCard = (props) => {


  
  return (
    <div className='product-card '>
        <img alt='producto' src={props.img}/>
        <p className='price'>${props.price}</p>
        <p className='title'>{props.title}</p>
        <button className='btn-secondary'>Agregar al carrito</button>
    </div>
  )
}

export default ProductCard