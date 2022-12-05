import { useContext } from 'react'
import SinImagen from '../assets/img/no-img.png';
import CartContext from '../context/CartContext.js'
import { useNavigate } from 'react-router-dom'

const ProductSimpleCard = (props) => {
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
    <div className="product-card " key={props?.producto?.id}>
      <div className="img-card-container">
        <img alt="producto" src={(props?.producto?.foto) ? props?.producto.foto : SinImagen} />
      </div>
      <div className="produc-card-info">
        <p className="price">{props?.producto?.productos_simples[0]?.precio_x_unidad}</p>
        <p className="title">{props?.producto?.productos_simples[0]?.alias?.toLowerCase()}</p>
        <button onClick={handleClick} className="btn-secondary">
          {props.buttonTitle}
        </button>
      </div>
    </div>
  )
}

export default ProductSimpleCard
