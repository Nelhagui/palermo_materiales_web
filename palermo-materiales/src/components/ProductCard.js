import { useState, useContext, useEffect } from 'react'
import CartContext from '../context/CartContext.js'
import { useNavigate } from 'react-router-dom'

const ProductCard = (props) => {


  // id={p.id}
  // title={p.productos_simples[0].titulo}
  // alias={p.productos_simples[0].alias}
  // descripcion_corta={p.productos_simples[0].descripcion_corta}
  // descripcion_larga={p.productos_simples[0].descripcion_larga}
  // foto={p.productos_simples[0].foto}
  // precio_x_unidad={`$${p.productos_simples[0].precio_x_unidad}`}

  let navigate = useNavigate()
  const { cart, addProduct } = useContext(CartContext)

  function handleClick() {
    if (props.buttonTitle == 'COTIZAR') {
      navigate(`/producto/${props.categoria_id}`)
      localStorage.setItem("item-id", props.id)
    } 
    else if (props?.seccion == "home") {
        localStorage.setItem("producto-agregar", JSON.stringify(props.producto))
        navigate(`/producto/agregar/${props.producto.id}`)
      }
      else if(props?.seccion == "comprar")
      {
        
        localStorage.setItem("producto-agregar", JSON.stringify(props.producto))
        navigate(`/comprar/agregar/${props.producto.id}`)
      }
    // data.push({id:props.id, title: props.title, price: props.price})
    // setData(data)
    // cart.push(data)
    // addProduct(cart)
   }


  

  return (
    <div className="product-card " key={props?.producto.id}>
      <div className="img-card-container">
        <img alt="producto" src={props?.producto.foto} />
      </div>
      <div className="produc-card-info">
        <p className="price">{props?.producto.productos_simples[0].precio_x_unidad}</p>
        <p className="title">{props?.producto.productos_simples[0].alias.toLowerCase()}</p>
        <button onClick={handleClick} className="btn-secondary">
          {props.buttonTitle}
        </button>
      </div>
    </div>
  )
}

export default ProductCard
