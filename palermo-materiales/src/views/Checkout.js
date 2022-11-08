import React, { useEffect } from 'react'
import { Table } from 'reactstrap'
import DeleteIcon from '../assets/img/Carrito_Eliminar.svg'
import ChevronDown from '../assets/img/Felcha_haciaabajo.svg'
import DetailIcon from '../assets/img/Carrito_Detalle.svg'
import DataIcon from '../assets/img/Carrito_Datos.svg'
import PaymentIcon from '../assets/img/FormDePago_negro.svg'

const Checkout = () => {
  const openRow = () => {
    let tableRow = document.querySelector('.table-expandable')
    let toggle = document.querySelector('.chevron')
    if (tableRow.style.display === 'none') {
      tableRow.style.display = 'block'
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
        <div>
          <img src={DetailIcon} alt="icon" />
          <p>Detalle</p>
        </div>
        <div>
          <img src={DataIcon} alt="icon" />
          <p>Datos</p>
        </div>
        <div>
          <img style={{height: '30px'}} src={PaymentIcon} alt="icon" />
          <p>Pago</p>
        </div>
      </div>
      <div className="table-container">
        <Table className="table">
          <thead style={{ backgroundColor: '#FFF0DD', padding: '2em' }}>
            <tr className="">
              <th>FProductos simples</th>
              <th>Superf.</th>
              <th>Cantidad</th>
              <th>Precio Un.</th>
              <th>Precio Final</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td>@mdo</td>
              <div className="">
                <img alt="icon" style={{ width: '1em' }} src={DeleteIcon} />
                <img
                  className="chevron"
                  alt="icon"
                  src={ChevronDown}
                  onClick={openRow}
                />
              </div>
            </tr>
            <div className="table-expandable" style={{ display: 'none' }}>
              Coso donde irian las cosas
            </div>
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Checkout
