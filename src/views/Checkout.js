import React, { useEffect, useState } from 'react'
import DetailIcon from '../assets/img/carrito_detalle.png'
import DataIcon from '../assets/img/carrito_datos.png'
import PaymentIcon from '../assets/img/FormDePago_negro.png'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../context/CartContext.js'
import axios from "axios";
import ItemsCart from '../components/checkout/ItemsCart.js'
import Spinner from '../components/Spinner.js';
import { precio } from '../utils/precio.js';

const Checkout = () => {
  const { cart, addProduct } = useContext(CartContext)
  const [items, setItems] = useState([])
  const [totalPrice, setTotalPrice] = useState([])
  const [sendingOrder, setSendingOrder] = useState(false)
  const [isLogged] = useState( JSON.parse(localStorage.getItem('user')) )
  const ids_cotizaciones = cart.map( (item) =>item.cotizacion.id);
  let navigate = useNavigate()

  useEffect(() => {
    const valores = cart.map((e) => {
        return e.cotizacion.subtotal
    })
    setItems(valores);
  }, [cart])
  
  useEffect(() => {
    setTotalPrice(items.reduce((a, b) => a + b, 0))
  }, [items])

  const deleteItem = ( (item_id) => {
        const result = cart.filter(item => item.producto_combinado_id !== item_id);
        addProduct(result);
  })

  const sendCart = (()=> {
    setSendingOrder(true);
    if(ids_cotizaciones.length > 0 )
    {
        if(isLogged?.token) {
            let data = JSON.stringify({ "cotizaciones": ids_cotizaciones });
            let config = {
                method: 'post',
                url: `${process.env.REACT_APP_API_URL}/orden`,
                headers: { 
                  'Content-Type': 'application/json', 
                  'Authorization': 'Bearer '+isLogged.token
                },
                data : data
            };
            axios(config)
            .then(function (response) {
                localStorage.setItem('compra', JSON.stringify(response.data))
                addProduct([]);
                navigate('/checkout/payment')
            })
            .catch(function (error) {
            });
        } else {
            navigate('/checkout/data')
        }
    } else {
        navigate('/cotizar')
    }
  });
  console.log(cart)

  if(cart.length > 0)
  {
      return (
        <div className="container-fluid wrapper">
            <div className="stepper-checkout">
                <div className="active">
                    <img src={DetailIcon} style={{ fill: '#FF9817' }} alt="icon" />
                    <p className="pago-text">Detalle</p>
                </div>
                <div>
                    <img src={DataIcon} alt="icon" />
                    <p className="pago-text">Datos</p>
                </div>
                <div>
                    <img style={{ height: '30px' }} src={PaymentIcon} alt="icon" />
                    <p className="pago-text">Pago</p>
                </div>
            </div>
            <div className='cont-gral-table-resumen'>
                <div className="table-container checkout">
                    <div className="header fw-bold">
                        <div className='item-head'>Productos simples</div>
                        {/* <div className='item-head'></div> */}
                        <div className='item-head'>Cant</div>
                        <div className='item-head'>Precio Un</div>
                        <div className='item-head'>Precio Final</div>
                        <div className='item-head'></div>
                    </div>
                        
                    {cart.map((c) => {
                        return  <ItemsCart item={c} key={Math.random()} deleteItem={deleteItem}></ItemsCart>
                    })}
                    
                </div>
                <div className="row checkout-container fw-bold">
                    <div className="price-container col-lg-6 p-3">
                        <p className="pago-text">Costo total:</p>
                        <p className="pago-text">
                        ${precio(totalPrice, 2, ',', '.')}
                            
                            </p>
                    </div>
                    <div className='col-lg-3 p-1' style={{display: 'flex', alignItems: 'center'}}>
                        { sendingOrder 
                            ?
                            <div className="btn-primary disabled" style={{marginBottom: '0', padding: '.5rem', width: '100%'}}>
                                <p className="pago-text"> AGREGAR MÁS PRODUCTOS</p>
                            </div>
                            :
                            <div className="btn-secondary" style={{marginBottom: '0', padding: '.5rem', width: '100%'}}>
                                <p className="pago-text">
                                    <Link to="/cotizar">AGREGAR MÁS PRODUCTOS</Link>
                                </p>
                            </div>
                        }
                    </div>
                    <div className='col-lg-3 p-1' style={{display: 'flex', alignItems: 'center'}}>
                        { isLogged 
                            ?
                            <div className={sendingOrder ? "btn-primary disabled" : "btn-primary"} onClick={sendingOrder ? null : ()=> {sendCart()}} style={{marginBottom: '0', padding: '.5rem', width: '100%'}}>
                                { sendingOrder
                                    ?
                                    <Spinner/>
                                    :
                                    <p className="pago-text">CONTINUAR</p>
                                }
                            </div>
                           :
                            <div className="btn-primary" style={{marginBottom: '0', padding: '.5rem', width: '100%'}}>
                                <p className="pago-text"> <Link to="/checkout/data">CONTINUAR</Link> </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
      )
  }
  else{
    navigate('/cotizar')
  }
}

export default Checkout
