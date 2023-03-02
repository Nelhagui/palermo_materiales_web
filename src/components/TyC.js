import React from 'react'
import { Link } from 'react-router-dom'

const TyC = () => {
  return (
    <div className='tyc'>
        <a href="https://api.palermomateriales.com.ar/terminosycondiciones.pdf" target="_blank" rel="noopener noreferrer">Términos y condiciones</a><br />
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