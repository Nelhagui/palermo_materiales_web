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


  const sendCart = (()=> {
    setSendingOrder(true);
    if(ids_cotizaciones.length > 0 )
    {
        if(isLogged?.token) {
            let data = JSON.stringify({ "cotizaciones": ids_cotizaciones });
            let config = {
                method: 'post',
                url: 'https://test.api.palermomateriales.com.ar/api/orden',
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
                console.log(error);
            });
        } else {
            navigate('/checkout/data')
        }
    } else {
        navigate('/cotizar')
    }
  });
  
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
                    <div className='item-head'>Superf</div>
                    <div className='item-head'>Cant</div>
                    <div className='item-head'>Precio Un</div>
                    <div className='item-head'>Precio Final</div>
                </div>
                    
                {cart.map((c) => {
                    return  <ItemsCart item={c} key={Math.random()}></ItemsCart>
                })}
                
            </div>
            <div className="row checkout-container fw-bold">
                <div className="price-container col-md-7 col-12">
                    <p className="pago-text">Costo total:</p>
                    <p className="pago-text">${totalPrice}</p>
                </div>
                <div className='col-md-5 col-12 d-flex'>
                    <div className="button-container text-center">
                        { sendingOrder 
                            ?
                            <div className="btn-primary disabled">
                                <p className="pago-text"> AGREGAR MÁS PRODUCTOS</p>
                            </div>
                            :
                            <div className="btn-secondary">
                                <p className="pago-text">
                                    <Link to="/cotizar">AGREGAR MÁS PRODUCTOS</Link>
                                </p>
                            </div>
                        }
                        { isLogged 
                            ?
                            <div className={sendingOrder ? "btn-primary disabled" : "btn-primary"} onClick={sendingOrder ? null : ()=> {sendCart()}}>
                                { sendingOrder
                                    ?
                                    <Spinner/>
                                    :
                                    <p className="pago-text">CONTINUAR</p>
                                }
                            </div>
                           :
                            <div className="btn-primary">
                                <p className="pago-text"> <Link to="/checkout/data">CONTINUAR</Link> </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout
