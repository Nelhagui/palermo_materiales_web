import SinImagen from '../assets/img/no-img.png';
import { useNavigate } from 'react-router-dom'

const ProductCombinadoCard = (props) => {
  let navigate = useNavigate()

  function handleClick() {
    if (props.buttonTitle === 'COTIZAR') {
        navigate(`/producto/${props.id}`)
        localStorage.setItem("item-id", props.id)
        localStorage.setItem("producto-agregar", JSON.stringify(props.producto))
    } 
    else if (props?.seccion === "home") {
        localStorage.setItem("producto-agregar", JSON.stringify(props.producto))
        navigate(`/producto/agregar/${props.producto.id}`)
    }
    else if(props?.seccion === "comprar")
    {    
        localStorage.setItem("producto-agregar", JSON.stringify(props.producto))
        navigate(`/comprar/agregar/${props.producto.id}`)
    }
}
      

  

  return (
    <div className="product-card ">
      <div className="img-card-container">
        <img alt="producto" src={(props?.foto) ? props?.foto : SinImagen} />
      </div>
      <div className="produc-card-info" >
        <p className="title">{props?.title}</p>
        <button onClick={handleClick} className="btn-secondary">
          {props.buttonTitle}
        </button>
      </div>
    </div>
  )
}

export default ProductCombinadoCard
