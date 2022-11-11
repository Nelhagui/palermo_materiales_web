import React, { useEffect } from 'react'
import { Table } from 'reactstrap'
import DeleteIcon from '../assets/img/Carrito_Eliminar.svg'
import ChevronDown from '../assets/img/Felcha_haciaabajo.svg'
import DetailIcon from '../assets/img/Carrito_Detalle.svg'
import DataIcon from '../assets/img/Carrito_Datos.svg'
import PaymentIcon from '../assets/img/FormDePago_negro.svg'
import { Link } from 'react-router-dom'

const Checkout = () => {
  const openRow = () => {
    let tableRow = document.querySelector('.table-expandable')
    let toggle = document.querySelector('.chevron')
    if (tableRow.style.display === 'none') {
      tableRow.style.display = 'flex'
      toggle.style.cssText = ` transform: rotate(0deg); width: 1em`
      console.log('open')
    } else {
      tableRow.style.display = 'none'
      toggle.style.cssText = ` transform: rotate(270deg); width: 1em`
      console.log('close')
    }
  }
  useEffect(() => {
    openRow()
  }, [])

  return (
    <div className="wrapper">
      <div className="stepper-checkout p-5">
        <div className='active'>
          <img src={DetailIcon} style={{fill: '#FF9817'}} alt="icon" />
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
      <div className="table-container">
        <div className="table-header grid grid-col-5">
          <p>Productos simples</p>
          <p>Superf.</p>
          <p>Cantidad</p>
          <p>Precio Un.</p>
          <p>Precio Final</p>
        </div>
        <div className="table-body">
          <p>Masilla DUrlock multi balde 1.8KG</p>
          <p>1 m2</p>
          <p>-</p>
          <p>-</p>
          <div className="last-container">
            <p>$42069</p>{' '}
            <div className="icon-container">
              <img alt="icon" style={{ width: '1em' }} src={DeleteIcon} />
              <img
                className="chevron"
                alt="icon"
                src={ChevronDown}
                onClick={openRow}
              />
            </div>
          </div>
        </div>
        <div className="table-expandable" style={{ display: 'none' }}>
          <div className="expandable-data">
            <p>Masilla DUrlock multi balde 1.8KG</p>
            <p>1 m2</p>
            <p>-</p>
            <p>-</p>
            <p>$42069</p>
          </div>
          <div className="expandable-data">
            <p>Masilla DUrlock multi balde 1.8KG</p>
            <p>1 m2</p>
            <p>-</p>
            <p>-</p>
            <p>$42069</p>
          </div>
        </div>
      </div>
      <div className='checkout-container m-4'>
      <div className='price-container fw-normal h5 col-4 mr-5'>
        <p>Costo total:</p><p>$12345</p>
      </div>
      <div className='button-container col-6 text-center'>
      <div className='btn-primary px-5 py-3 col ' style={{color: '#FF9817'}}><p className='my-auto'>AGREGAR MÁS PRODUCTOS</p></div>
      <div className='btn-secondary p-3 col' ><p><Link to='/checkout/data'>CONTINUAR</Link></p></div>
      </div>
      </div>
    </div>
  )
}

export default Checkout
