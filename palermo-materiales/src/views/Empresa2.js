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
        {/* <div className="about-container my-5">
        <div className="col-5 about-image">
          <video src={Video} autoPlay style={{width:'100%'}} >
            Tu navegador no admite el elemento <code>video</code>.
          </video>
        </div>
        <div className="col about-text">
          <h1>Palermo Materiales</h1>
          <p>
            A finales de la década de los 70 surge esta empresa familiar, hoy con la segunda generación a cargo.
            Situados en el corazón de Palermo Hollywood desde 2003, comercializamos y distribuimos a toda CABA y Gran Bs. As. materiales de construcción.
          </p>
          <p>
            Nuestra experiencia nos permite asesorar y participar con usted en la mejor selección de productos que se adecue a sus necesidades.
          </p>
        </div>
      </div> */}
{/* EMPIEZA */}
<div class="container-fluid">
	<div class="row">
		<div class="col-md-6">
            <video src={Video} autoPlay style={{width:'100%'}} >
                Tu navegador no admite el elemento <code>video</code>.
            </video>
		</div>
		<div class="col-md-6">
            <h1>Palermo Materiales</h1>
            <p>
                A finales de la década de los 70 surge esta empresa familiar, hoy con la segunda generación a cargo.
                Situados en el corazón de Palermo Hollywood desde 2003, comercializamos y distribuimos a toda CABA y Gran Bs. As. materiales de construcción.
            </p>
            <p>
                Nuestra experiencia nos permite asesorar y participar con usted en la mejor selección de productos que se adecue a sus necesidades.
            </p>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
			<div class="row">
				<div class="col-md-12">
                    <h2>Descargá nuestra aplicación</h2>
                    <p>
                        Obtené tu presupuesto al instante, comprá y elegí tu forma de pago
                    </p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
                    <div className="box">
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
				<div class="col-md-4">
                    <div className="box">
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
				<div class="col-md-4">
                    <div className="box">
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
	</div>
	<div class="row footer-image">
        <div className="col-md-6 pl-2 d-flex align-items-center justify-content-end">
            <p className="text-left">
                <strong>Comienza ahora</strong> descargando <br /> nuestra aplicación mobile
            </p>
            {/* <p>
                nuestra aplicación mobile
            </p> */}
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-start p-4">
            <img style={{ width: '10em' }} src={IosDownload} alt="iphone"/>
            <img style={{ width: '10em' }} src={AndroidDownload} alt='android'/>
        </div>
	</div>
</div>

{/* TERMINA */}



            {/* <div className="container">
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
            </div> */}
        </>
  )
}

export default Empresa2
