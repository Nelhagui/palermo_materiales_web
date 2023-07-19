import axios from 'axios'
import React from 'react'
import { useNavigate } from "react-router-dom";
import CartContext from '../context/CartContext.js'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner.js';
import { precio } from '../utils/precio.js';

const Producto = () => {
  let {id} = useParams();
  let navigate = useNavigate()
  const [product, setProduct] = useState(JSON.parse(localStorage.getItem('producto')))
  const {cart, addProduct } = useContext(CartContext)
  const [cont, setCont] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [sendingCotizacion, setSendingCotizacion] = useState(false)
  const [productCotizado, setProductCotizado] = useState([])

  const handleRest = () => {
    console.log(cont - 1 > 0)
    if (cont - 1 > 0)
        setCont(cont - 1)
  }
  const handleAdd = () => {
    if(cont+1 <= product?.productos_simples[0]['stock'])
        setCont(cont + 1)
  }

  const changeValue = (event) => {
    if(event.target.value > 0 && event.target.value <= product?.productos_simples[0]['stock'] && event.target.value > 0 )
        setCont(Number(event.target.value))  
  }

  const fetchProducto = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/productocombinado/${id}`)
        .then((res) => {
            setProduct(res.data)
            setIsLoading(false)
        })
  }
  
  useEffect(() => {
    fetchProducto();
  }, [id])

  const addToCart = () => {    
    const result = cart.filter(item => item.producto_combinado_id !== productCotizado.producto_combinado_id);
    addProduct([... result, productCotizado])
    navigate('/')
  }

  function handleNull() {
    if (cont === 0 || cont === '') {
        alert('Ingrese una cantidad mayor a 0')
    } else {
        setSendingCotizacion(true)
        const cotizarBody = {
          cantidad: cont,
          producto_combinado_id: id,
        };
        axios
          .post(
            `${process.env.REACT_APP_API_URL}/cotizador/cotizar`,
            cotizarBody
          )
          .then((response) => {
            setSendingCotizacion(false)
            setProductCotizado(response.data)
        });
    }
  }
  

  return (
    <div className="container-fluid wrapper">
        <div className="text-center cotizar-title">
            <h1 className="fw-bold cot-title">CALCULAR PRODUCTOS</h1>
            <h4 className="cot-subt">¿Querés saber cuánto material necesitás cubrir?</h4>
            <h4 className="cot-subt">Comienza eligiendo una categoria</h4>
        </div>
      
        <div className="card-product">
            <div className='row w-100' >
                { isLoading 
                  ?
                    <div className='img-product loading'></div>
                  :
                    <div className='img-conte col-12 col-md-5'>
                        <img src={product?.foto} alt="foto" />
                    </div>
                }
                <div className='info-card-product col-12 col-md-7'>
                    <div>
                        {
                            isLoading
                            ? 
                                <>
                                    <div className='loading mt-2' style={{width: "100%", height: '40px'}}></div>
                                    <div className='loading mt-2' style={{width: "100%", height: '150px'}}></div>
                                </>
                            :
                                <>
                                    <h1 className="fw-bold cot-title">{product?.titulo}</h1>
                                    <p className="cotizar-desc">#{product?.id}</p>
                                    <hr />
                                    <p className="cotizar-desc">{product?.descripcion_corta}</p>
                                </>
                        }   
                    </div>
                    <div className="mt-5">
                        <p className="cotizar-desc">Ingresar metro cuadrado:</p>
                        <div className='row contenedor-botones'>
                            <div className="col-12 col-md-5 cant-contain" >
                                <div className='contador'>
                                    <div className="button-change-count" onClick={() => handleRest()}> - </div>
                                    <div className='input-cant'>
                                        <input type="number" value={cont} onChange={changeValue}/>
                                    </div>
                                    <div className="button-change-count" onClick={() => handleAdd()}> + </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-7'>
                                <button style={{height: '100%'}} className={sendingCotizacion ? "btn-primary btn-cotizar disabled" : "btn-primary btn-cotizar"} onClick={sendingCotizacion ? null : handleNull}>
                                    { sendingCotizacion ? <Spinner/> : "COTIZAR" }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        { productCotizado.hasOwnProperty('cotizacion') ?
                sendingCotizacion ? "" :
                <>
                    <div className="cotizar-table container">
                        <div className="header fw-bold">
                            <div className="productos-simples">Productos simples</div>
                            <div className="cotizar-cantidad">Cant.</div>
                            <div className="cotizar-precio">Precio Un.</div>
                        </div>
                        {productCotizado?.producto_combinado?.productos_simples.map((p) => {
                            return (
                                <div className="items-container" style={{ backgroundColor: '#F7F7F7 !important' }}  key={Math.random()}>
                                    <div className="productos-simples-items">{p?.titulo}</div>
                                    <div className="productos-cantidad-cotizar">
                                        {p?.cantidad}
                                    </div>
                                    <div className='productos-subtotal'> $ {precio(p?.subtotal, 2, ",", ".")}</div>
                                </div>
                            )})
                        }
                        <div className="table-footer fw-bold">
                            <div className="productos-simples"> TOTAL</div>
                            <div className="cotizar-cantidad">{productCotizado?.cotizacion.cantidad}</div>
                            <div className="cotizar-precio">${ precio(productCotizado?.cotizacion.subtotal, 2, ",", ".")}</div>
                        </div>
                    </div>
                    <div className="button-add">
                        <button className="btn-primary mt-5" onClick={() => addToCart()}>
                            Agregar al carrito
                        </button>
                    </div>
                </>
            :
            ""
        }
    </div>
  )
}

export default Producto
