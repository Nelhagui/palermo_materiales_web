import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import CartContext from '../context/CartContext.js'
import Spinner from './Spinner.js'
import axios from 'axios'

const ProductCardSetCant = () => {
    let { id } = useParams()
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const {cart, addProduct } = useContext(CartContext)
  const [sendingCotizacion, setSendingCotizacion] = useState(false)
  const [cant, setCant] = useState(1)


  const handleRest = () => {
    if (cant > 0) {
        setCant(cant - 1)
    }
  }

  const handleAdd = () => {
    setCant(cant + 1)
  }

  const changeValue = (event) => {
    if(event.target.value > 0 )
        setCant(event.target.value)
  }

  function cotizarSimpleProduct() {
    setSendingCotizacion(true);
    const cotizarBody = {
      cantidad: cant,
      producto_combinado_id: id,
    };
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/cotizador/cotizar`,
        cotizarBody
      )
      .then((response) => {
        const result = cart.filter(item => item.producto_combinado_id !== response.data.producto_combinado_id);
        addProduct([... result, response.data])
        setSendingCotizacion(false);
      });
  }

  useEffect(() => {
    if (id) {
        axios.get(`${process.env.REACT_APP_API_URL}/productocombinado/${id}`)
        .then((res) => { 
            setIsLoading(false);
            setProduct(res?.data) 
        })
    }
  }, [id])


  return (
    <div className="card-product">
        <div className='row'>
            { isLoading 
              ?
                <div className='img-product loading'></div>
              :
                <div className='img-conte col-12 col-md-5'>
                    <img src={product?.foto} alt="foto" style={{minWidth: '263px'}}/>
                </div>
            }
            <div className='info-card-product col-12 col-md-7'>
                <div className='col-12 product-contain'>
                    <h1 className="product-title">{product?.titulo}</h1>
                    <p className="product-price">${product?.productos_simples[0]?.precio_x_unidad}</p>
                    <div className="line"></div>
                    <p className="product-desc">{product?.descripcion_corta}</p>
                </div>
                <div className='row contenedor-botones'>
                    <div className="col-12 col-md-5 cant-contain" >
                        <div className='contador'>
                            <div className="button-change-count" onClick={sendingCotizacion ? null : () => handleRest()}> - </div>
                            <div className='input-cant'>
                                <input type="number" value={cant} onChange={changeValue}/>
                            </div>
                            <div className="button-change-count" onClick={sendingCotizacion ? null : () => handleAdd()}> + </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-7'>
                        <button id="btn-agregar" className={sendingCotizacion ? "btn-primary disabled" : "btn-primary"} onClick={sendingCotizacion ? null : ()=> { cotizarSimpleProduct()}}>
                            { sendingCotizacion ? <Spinner/> : <p>AGREGAR AL CARRITO</p> }
                        </button>
                    </div>
                </div>
            </div>
            <div className="line-dos"></div>
            <p className="product-desc product-contain">{product?.descripcion_corta}</p>
        </div>
    </div>
  )
}

export default ProductCardSetCant
