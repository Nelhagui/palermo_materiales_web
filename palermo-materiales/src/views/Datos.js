import React from 'react'
import DetailIcon from '../assets/img/carrito_detalle.png'
import DataIcon from '../assets/img/carrito_datos.png'
import PaymentIcon from '../assets/img/FormDePago_negro.png'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const Datos = () => {
  return (
    <div className='wrapper'>
        <div className="stepper-checkout p-5">
        <div >
          <img src={DetailIcon} alt="icon" />
          <p>Detalle</p>
        </div>
        <div className='active'>
          <img src={DataIcon} alt="icon" />
          <p>Datos</p>
        </div>
        <div>
          <img style={{ height: '30px' }} src={PaymentIcon} alt="icon" />
          <p>Pago</p>
        </div>
      </div>
      <div className='log-window'>
        <div className='login-container col-4 px-5 pb-5 mx-5 card'>
            <div className='login-title h1 my-5 fw-bold' style={{color: '#FF9817'}}>Iniciar sesion</div>
            <div className='login-form'>
            <Form className="row">
              <FormGroup className="col-12">
                <Label for="name">Ingresa tu nombre</Label>
                <Input style={{height: '3em'}} type="name" name="name" id="name" />
              </FormGroup>
              <FormGroup className="col-12">
                <Label for="email">Ingresa tu email</Label>
                <Input style={{height: '3em'}} type="email" name="email" id="email" />
              </FormGroup>

              <Button className="btn-primary mx-auto mt-5">Ingresar</Button>
              <p className='text-center mt-5'>Olvidé mi contraseña</p>
            </Form>
            </div>
        </div>
        <div className='login-container col-6 px-5  mx-5 card'>
            <div className='login-title h1 my-5 fw-bold' style={{color: '#FF9817'}}>Registrarme</div>
            <div className='login-form'>
            <Form className="row">
              <FormGroup className="col-6">
                <Label for="name">Ingresa tu nombre y apellido</Label>
                <Input style={{height: '3em'}} type="name" name="name" id="name" />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="email">Ingresa tu telefono/celular</Label>
                <Input style={{height: '3em'}} type="email" name="email" id="email" />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="name">Ingresa tu email</Label>
                <Input style={{height: '3em'}} type="name" name="name" id="name" />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="email">Ingresa tu contraseña</Label>
                <Input style={{height: '3em'}} type="email" name="email" id="email" />
              </FormGroup>

              <Button className="btn-secondary mx-auto mt-5">Registrarse</Button>
            </Form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Datos