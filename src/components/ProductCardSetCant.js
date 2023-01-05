import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import CartContext from '../context/CartContext.js'
import Spinner from './Spinner.js'
import axios from 'axios'

const ProductCardSetCant = () => {
  const [product, setProduct] = useState(null)
  const {cart, addProduct } = useContext(CartContext)
  const [sendingCotizacion, setSendingCotizacion] = useState(false)
  const [productStorege] = useState(
    JSON.parse(localStorage.getItem('producto-agregar')),
  )
  const [cant, setCant] = useState(1)

  let { id } = useParams()
  const handleRest = () => {
    if (cant > 0) {
        setCant(cant - 1)
    }
  }

  const handleAdd = () => {
    setCant(cant + 1)
  }


  function cotizarSimpleProduct() {
    setSendingCotizacion(true);
    const cotizarBody = {
      cantidad: cant,
      producto_combinado_id: id,
    };
    axios
      .post(
        "https://test.api.palermomateriales.com.ar/api/cotizador/cotizar",
        cotizarBody
      )
      .then((response) => {
        const result = cart.filter(item => item.producto_combinado_id !== response.data.producto_combinado_id);
        addProduct([... result, response.data])
        setSendingCotizacion(false);
      });
  }

  useEffect(() => {
    let sendFecht = false;
    if (productStorege !== null) {
        if (productStorege.id === id) {
            setProduct(productStorege)
        } else { sendFecht = true; }
    } else { sendFecht = true; }
    if(sendFecht) {
        if (id) {
            axios.get(`https://api.palermomateriales.com.ar/api/productocombinado/${id}`)
                .then((res) => { setProduct(res?.data) })
        }
    }
  }, [productStorege, id])


  return (
    <div className="card-product">
        <div className='row'>
            <div className='img-conte col-12 col-md-5'>
                <img src={product?.foto} alt="foto" style={{minWidth: '263px'}}/>
            </div>
            <div className='info-card-product col-12 col-md-7'>
                <div className='col-12 product-contain'>
                    <h1 className="product-title">{product?.titulo}</h1>
                    <p className="product-price">${product?.productos_simples[0]?.precio_x_unidad}</p>
                    <div className="line"></div>
                    <p className="product-desc">{product?.descripcion_corta}</p>
                </div>
                <div className='row contenedor-botones'>
                    <div className="col-12 col-md-5" >
                        <div className='contador'>
                            <div className="button-change-count" onClick={sendingCotizacion ? null : () => handleRest()}> - </div>
                            <div>{cant}</div>
                            <div className="button-change-count" onClick={sendingCotizacion ? null : () => handleAdd()}> + </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-7'>
                        <button className={sendingCotizacion ? "btn-primary disabled" : "btn-primary"} onClick={sendingCotizacion ? null : ()=> { cotizarSimpleProduct()}}>
                            { sendingCotizacion ? <Spinner/> : <p>AGREGAR AL CARRITO</p> }
                        </button>
                    </div>
                </div>
            </div>
            <div className="line-dos"></div>
            <p className="product-desc">{product?.descripcion_corta}</p>
        </div>
    </div>
  )
}

export default ProductCardSetCant
