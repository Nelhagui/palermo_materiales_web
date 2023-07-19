import React from 'react'
import DetailIcon from '../assets/img/carrito_detalle.png'
import DataIcon from '../assets/img/carrito_datos.png'
import PaymentIcon from '../assets/img/FormDePago_negro.png'
import { useState } from 'react'
import PaymentMethods from '../components/checkout/PaymentMethods.js';

// mercadopago

import { initMercadoPago } from "@mercadopago/sdk-react";
initMercadoPago("APP_USR-9a50cf8c-da4a-4a6d-9485-d30478fd7087", {
    locale: 'es-AR',
});

const Pago = () => {
    const [orden] = useState( JSON.parse(localStorage.getItem('compra')) )
    const [mpDisabled, setMpDisabled] = useState(true)
    const fecha = orden.created_at.split(' ')[0].split('-')[2]+'-'+orden.created_at.split(' ')[0].split('-')[1]+'-'+orden.created_at.split(' ')[0].split('-')[0];
    const hora  = orden.created_at.split(' ')[1].split(':')[0]+':'+orden.created_at.split(' ')[1].split(':')[1];

    return (
        <div className="container-fluid pago wrapper" style={{backgroundColor: '#FAFAFA'}}>
            <div className="stepper-checkout">
                <div>
                    <img src={DetailIcon} style={{ fill: '#FF9817' }} alt="icon" />
                    <p className="pago-text">Detalle</p>
                </div>
                <div>
                    <img src={DataIcon} alt="icon" />
                    <p className="pago-text">Datos</p>
                </div>
                <div className="active">
                    <img style={{ height: '30px' }} src={PaymentIcon} alt="icon" />
                    <p className="pago-text">Pago</p>
                </div>
            </div>
            <div className='card order'>
                <div className='row order-top'>
                    <div className="col-md-8 col-12 cont-detal-order">
                        <p className="fw-bold pago-text">{`Numero de orden: #${orden.id}`}</p>
                        <div className="vl didesk"></div>
                        <p className='date-order pago-text'>{`${fecha}  ${hora}hs`}</p>
                    </div>
                    <div className="col-md-4 col-12">
                        <a href={`${process.env.REACT_APP_URL}/uploads/${orden.pdf}`} download target="_blank" rel="noreferrer">Descargar orden</a>
                    </div>
                </div>
                <div className="row cont-payment-method">
                    <p className="h3 pago-text fw-bold">Forma de pago</p>
                    <p className="pago-text">Para coordinar la entrega deberás contactarte al (011) 2184-9984 Opcion 4 de Lunes a Viernes de 7.30hs a 12hs y de 13hs a 17 hs. </p>
                    <div className="cont-options-method row">
                        <PaymentMethods mpDisabled={mpDisabled} />
                    </div>
                    <hr />
                    <div className='col-12'>
                        <input type="checkbox" id='terminos' onChange={()=>setMpDisabled(!mpDisabled)}/>
                        <label htmlFor="terminos" style={{marginLeft: '.5rem', marginBottom: '.5rem'}}>Terminos y condiciones</label>
                        <div style={{border: ".5px solid #c7c8c9", padding: '1rem'}}>
                            <p style={{fontSize: '.7rem'}}>Antes de realizar una compra a través del Website, el Usuario deberá tener en cuenta que los productos seleccionados pueden no encontrarse en stock. Toda compra se encuentra sujeta a disponibilidad. El usuario declara conocer que en virtud del dinamismo del sitio y que en el mismo pueden estar efectuando operaciones muchos usuarios a la vez, puede suceder que al momento de concretar la operación el producto ya no se encuentre disponible. Palermo Materiales no garantiza la disponibilidad de los productos solicitados por el usuario al momento de la compra. En estos casos dependemos del stock disponible al momento de realizar la compra. En el improbable caso de que el cliente comprase uno o varios productos sin disponibilidad de stock por algún error en el sistema o el producto estuviera en falta le informaremos POR MAIL de manera que usted pueda optar por: • OPCIÓN 1: Elegir otro modelo del sitio de igual valor. • OPCIÓN 2: Elegir otro modelo del sitio de mayor valor (por el que deberás pagar la diferencia). • OPCIÓN 3: Solicitar el reintegro del importe abonado por el producto en falta y enviar los demás productos. • OPCIÓN 4: Cancelación y reintegro total del monto de la compra.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Pago
