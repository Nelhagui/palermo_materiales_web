import React from 'react'
import DetailIcon from '../assets/img/carrito_detalle.png'
import DataIcon from '../assets/img/carrito_datos.png'
import PaymentIcon from '../assets/img/FormDePago_negro.png'
import { useState } from 'react'
import PaymentMethods from '../components/checkout/PaymentMethods.js';

// mercadopago

import { initMercadoPago } from "@mercadopago/sdk-react";
initMercadoPago("TEST-1228f104-bb7c-4706-a8c0-35997f1c4135", {
    locale: 'es-AR',
});

const Pago = () => {
    const [orden] = useState( JSON.parse(localStorage.getItem('compra')) )
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
                    <p className="pago-text">Para coordinar la entrega deberás constacarte al (011) 2184-9984 Opcion 4 de Lunes a Viernes. </p>
                    <div className="cont-options-method row">
                        <PaymentMethods />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Pago
