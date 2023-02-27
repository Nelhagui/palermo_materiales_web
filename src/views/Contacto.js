import React, {useState} from 'react'
import TelefonoNaranja from '../assets/img/telefono_naranja.svg'
import MailNaranja from '../assets/img/Mail_naranja.svg'
import HorarioNaranja from '../assets/img/Horario_naranja.svg'
import UbiNaranja from '../assets/img/icon-ubicacion.svg'
import MapView from '../components/MapView.js'

const Contacto = () => {
    const [initialState, setInitialState] = useState({
        nombre: "",
        email: "",
        comentario: ""
    });
    const handleChange = (event) => {
        event.preventDefault();
        setInitialState({ ...initialState, [event.target.name] : event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    
    return (
        <div className="container-fluid wrapper">
            <div className='row'>
                <div className='col-12 col-lg-8 cont-form'>
                    <div>
                        <h1 className="contacto-title"> Dejanos tus consultas </h1>
                        <p className="contacto-desc"> Contanos con atención personalizada tanto para arquitectos y emprendedores. </p>
                        <form onSubmit={handleSubmit} className='form-contacto' >
                            <div className='row'>
                                <div className='col-12 col-lg-6'>
                                    <div className='inputs-cols-1'>
                                        <label htmlFor="nombre" className="input-title">Ingresa tu nombre</label>
                                        <input type="text" name='nombre' defaultValue={initialState?.nombre} onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-6'>
                                    <div className='inputs-cols-2'>
                                        <label htmlFor="email" className="input-title">Ingresa tu email</label>
                                        <input type="email" name='email' defaultValue={initialState?.email} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div>
                                    <label htmlFor="comentario" className="input-title">Comentario</label>
                                    <textarea name="comentario" cols="5" rows="5" defaultValue={initialState?.comentario} onChange={handleChange}></textarea>
                                </div>
                            </div>
                            <div className='col-12 d-flex justify-content-center'>
                                <button className="btn-primary" type='submit'>ENVIAR</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-12 col-lg-4 cont-info-boxes'>
                    <div className="info-contain">
                        <h2 className="contacto-title">Contactate con nosotros</h2>
                        <div className="box-item-contacto d-flex">
                            <img src={TelefonoNaranja} className="mb-auto" style={{width: '1.5em', marginRight: '1em'}} alt="img" />
                            <div>
                                <h5 className="contacto-data">Nuestros telefonos</h5>
                                <p className="input-title">+549(011) 21849984 | 4899-0110</p>
                            </div>
                        </div>
                        <div className="box-item-contacto d-flex">
                            <img src={MailNaranja} className="mb-auto" style={{width: '1.5em', marginRight: '1em'}} alt="img" />
                            <div>
                                <h5 className="contacto-data">Consultas por email</h5>
                                <p className="input-title">ventas@palermomateriales.com.ar</p>
                            </div>
                        </div>
                        <div className="box-item-contacto d-flex">
                            <img src={HorarioNaranja} className="mb-auto" style={{width: '1.5em', marginRight: '1em'}} alt="img" />
                            <div>
                                <h5 className="contacto-data">Horarios de atencion</h5>
                                <p className="input-title">Lun. a Vier. de 07.30 a 12.00hs</p>
                                <p className="input-title">y 13.00 a 17.00hs</p>
                            </div>
                        </div>
                        <div className="box-item-contacto d-flex">
                            <img src={UbiNaranja} className="mb-auto" style={{width: '1.5em', marginRight: '1em'}} alt="img" />
                            <div>
                                <h5 className="contacto-data">Ubicacion</h5>
                                <p className="input-title">Av.Juan B.Justo 1700 (C1313BHB)</p>
                                <p className="input-title">CABA, Argentina</p>
                                <p className="input-title">Estacionamiento por J.A. Cabrera 5454</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          {/* <div style={{ backgroundColor: '#F6F6F6' }} className="info-body">
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
                
                
                

                <div className="info-box ">
                  
                  <div>
                    
                  </div>
                </div>

              </div>
            </aside>
          </div> */}
          <MapView/>
        </div>
    )
}

export default Contacto
