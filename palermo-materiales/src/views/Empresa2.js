import React from 'react'
import Video from '../assets/video/Palermo.mp4'
import EcommerceIcon from '../assets/img/Ecommerce_naranja.svg'
import PresuIcon from '../assets/img/Presu_naranja.svg'
import FormaIcon from '../assets/img/FormDePago_naranja.svg'

import IosDownload from '../assets/img/ios store.svg'
import AndroidDownload from '../assets/img/playstore2.png'
import {divIcon, DivIcon} from 'leaflet'

const Empresa2 = () => {
  return (
        <>
            <div className="container wrapper">
                    <div className="row">
                        <div className="col-12">
                            <div className="app-titles2">
                                <h2>Descargá nuestra aplicación</h2>
                                <p>
                                    Obtené tu presupuesto al instante, comprá y elegí tu forma de pago
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row cont-boxes">
                            <div className="col-12 col-md-4">
                                <div className="row box">
                                    <div className="col-12 col-md-2">
                                        <img src={EcommerceIcon} alt="icon" />
                                    </div>
                                    <div className="col-12 col-md-10">
                                        <h3>E-commerce</h3>
                                        <p>Encontrá los productos</p>
                                        <p>adecuados para la construccion</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="row box">
                                    <div className="col-12 col-md-2">
                                        <img src={PresuIcon} alt="icon" />
                                    </div>
                                    <div className="col-12 col-md-10">
                                        <h3>Presupuesto online</h3>
                                        <p>Calculá la cantidad y el precio de</p>
                                        <p>los materiales para realizar tu obra</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="row box">
                                    <div className="col-12 col-md-2">
                                        <img src={FormaIcon} alt="icon" />
                                    </div>
                                    <div className="col-12 col-md-10">
                                        <h3>Forma de pago</h3>
                                        <p>Pagá con Mercado Pago</p>
                                        <p>o tarjeta de crédito</p>
                                    </div>
                                </div>
                            </div>
                    </div>  
            </div>
            <div className="footer-image">
                <div>
                    <p style={{ margin: '1em 0 0 5em' }}>
                    <strong>Comienza ahora</strong> descargando
                    </p>
                    <br />
                    <p style={{ margin: '1.5em 0px 0px 5em' }}>
                    nuestra aplicación mobile
                    </p>
                </div>
                <div className='downloads my-5'>
                <img src={IosDownload} alt="iphone"/>
                <img src={AndroidDownload} alt='android'/>
                </div>
            </div>
        </>
  )
}

export default Empresa2
