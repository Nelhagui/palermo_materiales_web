import React from 'react'
import logo from '../assets/img/logo_informacion.png'
import Mercadopago from '../assets/img/Mercadopago.svg'
import Visa from '../assets/img/visa.svg'
import Ahora12 from '../assets/img/ahora12.svg'
import Mastercard from '../assets/img/mastercard.svg'
import Amex from '../assets/img/amex.svg'
import Playstore from '../assets/img/playstore2.png'

const Footer = () => {
  return (
    <>
        <hr />
            <div className="footer my-2">
              <div className="logo-container col-2">
                <img src={logo} alt="logo" />
              </div>
              <div className="direction-container col">
                <p className="direction">
                  Av. Juan B. Justo 1700 (C1414BHB) CABA, Argentina
                </p>
                <p>Lunes a Viernes de 7.30 a 12 y de 13 a 17hs</p>
              </div>
              <div className="pay-methods col">
                <img src={Ahora12} alt="ahora12" />
                <img src={Mercadopago} alt="mercadopago" />
                <img src={Mastercard} alt="mastercard" />
                <img src={Visa} alt="visa" />
                <img src={Amex} alt="amex" />
                <div className="vl"></div>
                <img src={Playstore} alt="playstore" className="playstore" />
              </div>
            </div>
        <hr />
    </>
  )
}

export default Footer
