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
                    En la brevedad se estarán contactando con usted
                </p>
                {/* <p className="pago-text">
                    También podés hacerlo a través de nuestro WhatSapp (011)2184-9984 de Lunes a Viernes.
                </p> */}
                <div className='cont-btn-action-new-purchase'>
                    <div className="btn-primary pago-text" style={{minWidth: 'max-content', padding:'.5rem 1rem'}}>
                        <Link to="/cotizar">Realizar una nueva compra</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalEmailMethod