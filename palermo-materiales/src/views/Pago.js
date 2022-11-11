import React from 'react'
import DetailIcon from '../assets/img/Carrito_Detalle.svg'
import DataIcon from '../assets/img/Carrito_Datos.svg'
import PaymentIcon from '../assets/img/FormDePago_negro.svg'

import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const Pago = () => {
  return (
    <div className="wrapper " style={{backgroundColor: '#FAFAFA'}}>
      <div className="stepper-checkout p-5">
        <div>
          <img src={DetailIcon} alt="icon" />
          <p>Detalle</p>
        </div>
        <div>
          <img src={DataIcon} alt="icon" />
          <p>Datos</p>
        </div>
        <div className="active">
          <img style={{ height: '30px' }} src={PaymentIcon} alt="icon" />
          <p>Pago</p>
        </div>
      </div>
      <div className='card m-3 p-5'>
        <div className="payment-top">
          <div className="order-container col-6">
            <p className="fw-bold">Numero de orden:</p>
            <p className="fw-bold">#1113</p>
            <div className="vl"></div>
            <p>27/06/2022</p>
            <p>18:05 hs</p>
          </div>
          <div className="download-order col">Descargar orden</div>
        </div>
        <hr />
        <div style={{ marginLeft: '5em' }}>
          <p className="h3">Forma de pago</p>
          <p>
            Para coordinar la entrega deberás constacarte a través de nuestro
            Whatsapp (011) 2184-9984 de Lunes a Viernes.
          </p>
          <div className="payment-method d-flex gap-5">
            <FormGroup className="radio-payment col-4 d-flex gap-2 h4">
              <Input type="radio" name="email" id="email" />
              <p>Abonar con mercadopago</p>
            </FormGroup>
            <FormGroup className="radio-payment col-4 d-flex gap-2 h4">
              <Input type="radio" name="email" id="email" />
              <p>Coordinar por email</p>
            </FormGroup>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pago
