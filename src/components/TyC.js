import React from 'react'
import { Link } from 'react-router-dom'

const TyC = () => {
  return (
    <div className='tyc'>
        <Link to={'/terminos-condiciones'}>
            <p>Terminos y condiciones</p>
        </Link>
        <Link to={'/politicas-privacidad'}>
            <p>Políticas de privacidad</p>
        </Link>
        <Link to={'/contacto'}>
            <p>Contacto</p>
        </Link>
    </div>
  )
}

export default TyC