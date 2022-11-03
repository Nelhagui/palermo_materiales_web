import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

import TelefonoNaranja from '../assets/img/telefono_naranja.svg'
import MailNaranja from '../assets/img/Mail_naranja.svg'
import HorarioNaranja from '../assets/img/Horario_naranja.svg'
import UbiNaranja from '../assets/img/icon-ubicacion.svg'
import MapView from '../components/MapView.js'

const Contacto = () => {
  return (
    <div className="wrapper">
      <div style={{ backgroundColor: '#F6F6F6' }} className="info-body">
        <div className="contact-container">
          <div className="contact-title m-5">
            <h1>Dejanos tus consultas</h1>
            <p>
              Contanos con atención personalizada tanto para arquitectos y
              emprendedores.{' '}
            </p>
          </div>
          <div className="card m-5 p-5 form-container col-3">
            <Form className="row">
              <FormGroup className="col-5">
                <Label for="name">Ingresa tu nombre</Label>
                <Input type="name" name="name" id="name" />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="email">Ingresa tu email</Label>
                <Input type="email" name="email" id="email" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Comentario</Label>
                <Input
                  style={{ height: '12em' }}
                  type="textarea"
                  name="text"
                  id="exampleText"
                />
              </FormGroup>
              <Button className="btn-primary mx-auto">Enviar</Button>
            </Form>
          </div>
        </div>
        <aside className="contact-info col  ">
          <h1 className="mt-4 pt-3 px-3 h2">Contactate con nosotros</h1>
          <div className="container-info my-5">
            <div className="info-box  ">
              <img src={TelefonoNaranja} className="mb-auto" style={{width: '1.5em'}} alt="img" />
              <div>
                <h4>Nuestros telefonos</h4>
                <h5>+549(011) 21849984 | 4899-0110</h5>
              </div>
            </div>
            <div className="info-box ">
              <img src={MailNaranja} className="mb-auto" style={{width: '1.5em'}} alt="img" />
              <div>
                <h4>Consultas por email</h4>
                <h5>ventas@palermomateriales.com.ar</h5>
              </div>
            </div>
            <div className="info-box ">
              <img src={HorarioNaranja} className="mb-auto" style={{width: '1.5em'}} alt="img" />
              <div>
                <h4>Horarios de atencion</h4>
                <h5>Lun. a Vier. de 07.30 a 12.00hs</h5>
                <h5>y 13.00 a 17.00hs</h5>
              </div>
            </div>
            <div className="info-box ">
              <img src={UbiNaranja} className="mb-auto" style={{width: '1.5em'}} alt="img" />
              <div>
                <h4>Ubicacion</h4>
                <h5>Av. Juan B. Justo 1700 (C1313BHB)</h5>
                <h5>CABA, Argentina</h5>
                <h6>Estacionamiento por J.A. Cabrera 5454</h6>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <MapView/>
    </div>
  )
}

export default Contacto
