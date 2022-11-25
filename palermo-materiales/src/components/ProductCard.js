import { useState, useContext, useEffect } from 'react'
import CartContext from '../context/CartContext.js'
import {divIcon} from 'leaflet'
import { useNavigate } from 'react-router-dom'

const ProductCard = (props) => {
  const [data, setData] = useState([])
  let navigate = useNavigate()

  const { cart, addProduct } = useContext(CartContext)

  function handleClick() {
   if (props.buttonTitle == 'COTIZAR') {
    navigate(`/producto/${props.categoria_id}`)
   } else {
    data.push({id:props.id, title: props.title, price: props.price})
    setData(data)
    cart.push(data)
    addProduct(cart)
   }


  }

  return (
    <div className="product-card " key={props.id}>
      <div className="img-card-container">
        <img alt="producto" src={props.img} />
      </div>
      <div className="produc-card-info">
        <p className="price">{props.price}</p>
        <p className="title">{props.title.toLowerCase()}</p>
        <button onClick={handleClick} className="btn-secondary">
          {props.buttonTitle}
        </button>
      </div>
    </div>
  )
}

export default ProductCard
