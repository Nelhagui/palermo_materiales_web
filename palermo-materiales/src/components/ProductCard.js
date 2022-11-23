import { useState, useContext, useEffect } from 'react'
import CartContext from '../context/CartContext.js'

const ProductCard = (props) => {
  const [data, setData] = useState([])

  const { cart, addProduct } = useContext(CartContext)

  function handleClick() {
    data.push({id:props.id, title: props.title, price: props.price})
    setData(data)
    cart.push(data)
    addProduct(cart)


  }

  return (
    <div className="product-card " key={props.id}>
      <img alt="producto" src={props.img} />
      <p className="price">${props.price}</p>
      <p className="title">{props.title}</p>
      <button onClick={handleClick} className="btn-secondary">
        AGREGAR AL CARRITO
      </button>
    </div>
  )
}

export default ProductCard
