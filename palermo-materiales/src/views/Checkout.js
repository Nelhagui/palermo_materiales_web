import React, { useEffect, useState } from 'react'
import DetailIcon from '../assets/img/Carrito_Detalle.svg'
import DataIcon from '../assets/img/Carrito_Datos.svg'
import PaymentIcon from '../assets/img/FormDePago_negro.svg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../context/CartContext.js'
import ItemsCart from '../components/checkout/ItemsCart.js'

const Checkout = () => {
  const { cart } = useContext(CartContext)
  const [items, setItems] = useState([])
  const [totalPrice, setTotalPrice] = useState([])
  console.log(cart)

  // const openRow = () => {
  //   let tableRow = document.querySelector('.table-expandable')
  //   let toggle = document.querySelector('.chevron')
  //   if (tableRow.style.display === 'none') {
  //     tableRow.style.display = 'flex'
  //     toggle.style.cssText = ` transform: rotate(0deg); width: 1em`
  //     console.log('open')
  //   } else {
  //     tableRow.style.display = 'none'
  //     toggle.style.cssText = ` transform: rotate(270deg); width: 1em`
  //     console.log('close')
  //   }
  // }
  // useEffect(() => {
  //   openRow()
  // }, [])
  //
  const showProducs = () => {
      console.log('click')
  }

  useEffect(() => {
    cart.map((e) => {
      setItems(e.cotizacion.subtotal)
      return console.log(e)
    })
  }, [cart])

  useEffect(() => {
    setTotalPrice([items].reduce((a, b) => a + b, 0))
  }, [items])


  return (
    <div className="wrapper">
      <div className="stepper-checkout p-5">
        <div className="active">
          <img src={DetailIcon} style={{ fill: '#FF9817' }} alt="icon" />
          <p>Detalle</p>
        </div>
        <div>
          <img src={DataIcon} alt="icon" />
          <p>Datos</p>
        </div>
        <div>
          <img style={{ height: '30px' }} src={PaymentIcon} alt="icon" />
          <p>Pago</p>
        </div>
      </div>
      <div className="table-containerr">
        

        <table className="table">
            <thead className="t-header">
                <tr className="cont-columns-table">
                  <th scope="col">Productos simples</th>
                  <th scope="col">Superf.</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio Un.</th>
                  <th scope="col">Precio Final</th>
                </tr>
            </thead>
        </table>
            
            
            {cart.map((c) => {
            return  <ItemsCart item={c} key={Math.random()}></ItemsCart>
            })}



        {/* <div className="icon-container">
              <img alt="icon" style={{ width: '1em' }} src={DeleteIcon} />
              <img
                className="chevron"
                alt="icon"
                src={ChevronDown}
                onClick={openRow}
              />
            </div> */}
        
      </div>
      <div className="checkout-container m-4">
        <div className="price-container fw-normal h5 col-4 mr-5">
          <p>Costo total:</p>
          <p>$12345</p>
        </div>
        <div className="button-container col-6 text-center">
          <div
            className="btn-primary px-5 py-3 col "
            style={{ color: '#FF9817' }}
          >
            <p className="my-auto">AGREGAR MÁS PRODUCTOS</p>
          </div>
          <div className="btn-secondary p-3 col">
            <p>
              <Link to="/checkout/data">CONTINUAR</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
