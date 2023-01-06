import React from 'react'
import { Link } from 'react-router-dom';

const ModalEmailMethod = ({setShowMethodEmail}) => {
  return (
    <div className='modal-email'>
        <div className='cont-modal-email'>
            <span className='close-modal-email' onClick={()=> setShowMethodEmail(false)}>X</span>
            <div className='title-modal-email pago-text'>
                <p>Coordinar pago por email</p>
            </div>
            <div className='info'>
                <p className="pago-text">
                    Escribinos a pedidos@palermomateriales.com.ar, haciendo referencia a tu número <br /> de orden con 72 hs. de anticipación para poder coordinar la forma de pago y la entrega.
                </p>
                <p className="pago-text">
                    También podés hacerlo a través de nuestro WhatSapp (011)2184-9984 de Lunes a Viernes.
                </p>
                <div className='cont-btn-action-new-purchase'>
                    <div className="btn-primary pago-text">
                        <Link to="/cotizar">REALIZAR UNA NUEVA COMPRA</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalEmailMethod