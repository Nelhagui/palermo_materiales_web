import React from 'react'
import Video from '../assets/video/Palermo.mp4'
import EcommerceIcon from '../assets/img/Ecommerce_naranja.svg'
import PresuIcon from '../assets/img/Presu_naranja.svg'
import FormaIcon from '../assets/img/FormDePago_naranja.svg'

// import IosDownload from '../assets/img/ios store.svg'
// import AndroidDownload from '../assets/img/playstore2.png'

const Empresa = () => {
  return (
        <>
            <div className="container-fluid wrapper">
                <div className="row about-image-text">
                    <div className="col-md-6 about-image">
                        <video src={Video} autoPlay style={{width:'100%'}} >
                            Tu navegador no admite el elemento <code>video</code>.
                        </video>
                    </div>
                    <div className="col-md-6 about-text">
                        <div className="palermo-contain">
                            <h1 className="palermo-title">Palermo Materiales</h1>
                            <p className="palermo-desc mt-2">
                                A finales de la década de los 70 surge esta empresa familiar, hoy con la segunda generación a cargo.
                                Situados en el corazón de Palermo Hollywood desde 2003, comercializamos y distribuimos a toda CABA y Gran Bs. As. materiales de construcción.
                            </p>
                            <p className="palermo-desc mt-4">
                                Nuestra experiencia nos permite asesorar y participar con usted en la mejor selección de productos que se adecue a sus necesidades.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 info-boxes">
                        <div className="row app-titles">
                            <div className="col-md-12">
                                <h2 className="palermo-title">Descargá nuestra aplicación</h2>
                                <p className="palermo-desc">
                                    Obtené tu presupuesto al instante, comprá y elegí tu forma de pago
                                </p>
                            </div>
                        </div>
                        <div className="row cont-boxes">
                            <div className="col-md-4 cont-boxes-desc">
                                <div className="row box-empresa ">
                                    <div className="box-contain">
                                        <div className="empresa-img">
                                            <img src={EcommerceIcon} alt="icon" />
                                        </div>
                                        <div className="item-empresa">
                                            <h3 className="title-empresa">E-commerce</h3>
                                            <p className="desc-empresa">Encontrá los productos</p>
                                            <p className="desc-empresa">adecuados para la construccion</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 cont-boxes-desc">
                                <div className="row box-empresa">
                                    <div className="box-contain">
                                        <div className="empresa-img">
                                            <img src={PresuIcon} alt="icon" />
                                        </div>
                                        <div className="item-empresa">
                                            <h3 className="title-empresa">Presupuesto online</h3>
                                            <p className="desc-empresa">Calculá la cantidad y el precio de</p>
                                            <p className="desc-empresa">los materiales para realizar tu obra</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 cont-boxes-desc">
                                <div className="row box-empresa">
                                    <div className="box-contain">
                                        <div className="empresa-img">
                                            <img src={FormaIcon} alt="icon" />
                                        </div>
                                        <div className="item-empresa">
                                            <h3 className="title-empresa">Forma de pago</h3>
                                            <p className="desc-empresa">Pagá con Mercado Pago</p>
                                            <p className="desc-empresa">o tarjeta de crédito</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-image">
                    <div className="footer-text">
                      <p>Te acompañamos</p>
                      <p>en todos tus <strong>proyectos</strong> </p>
                    </div>
                </div>
                {/* <div className="row footer-image empresa">
                    <div className="footer-empresa">
                        <div className="footer-text-empresa">
                            <p className="">
                                <strong>Comienza ahora</strong> descargando <br /> nuestra aplicación mobile
                            </p>
                        </div>
                        <div className="empresa-app">
                            <img style={{ width: '10em' }} src={IosDownload} alt="iphone"/>
                            <img style={{ width: '10em' }} src={AndroidDownload} alt='android'/>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
  )
}

export default Empresa
