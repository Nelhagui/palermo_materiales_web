import React from 'react'
import Video from '../assets/video/Palermo.mp4'
import EcommerceIcon from '../assets/img/Ecommerce_naranja.svg'
import PresuIcon from '../assets/img/Presu_naranja.svg'
import FormaIcon from '../assets/img/FormDePago_naranja.svg'

import IosDownload from '../assets/img/ios store.svg'
import AndroidDownload from '../assets/img/playstore2.png'

const Empresa = () => {
  return (
    <div>
      <div className="about-container my-5">
        <div className="col-5 about-image">
        <video src={Video} autoplay style={{width:'100%'}} >
  Tu navegador no admite el elemento <code>video</code>.
</video>
        </div>
        <div className="col about-text">
          <h1>Lorem ipsum dolor sit</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            auctor lacus tristique justo fermentum condimentum. Quisque dolor
            augue, luctus feugiat ipsum vel, vestibulum tincidunt turpis. Sed
            pretium nisi eu lacus pulvinar, sed fringilla lacus vestibulum.
            Phasellus maximus ut elit at tempus. Vestibulum porta mauris eu
            ipsum accumsan tristique. Fusce eros risus, vulputate at porta
            vitae, dapibus eu lectus. Praesent consequat ullamcorper velit quis
            vehicula. Proin consectetur nibh vel odio condimentum condimentum.
            Vivamus sed tempus mi. Suspendisse hendrerit neque tellus. Aliquam
            erat volutpat. Nulla id vestibulum eros.
          </p>
        </div>
      </div>
      <div className="app-information">
        <div className="app-titles">
          <h1>Descargá nuestra aplicación</h1>
          <h3>
            Obtené tu presupuesto al instante, comprá y elegí tu forma de pago
          </h3>
        </div>
        <div className="app-boxes m-5">
          <div className="box col">
            <div className="icon-container my-auto col-2">
              <img src={EcommerceIcon} alt="icon" />
            </div>
            <div className="text-container my-auto col">
              <h1>E-commerce</h1>
              <p>Encontrá los productos</p>
              <p>adecuados para la construccion</p>
            </div>
          </div>

          <div className="box col">
            <div className="icon-container my-auto col-2">
              <img src={PresuIcon} alt="icon" />
            </div>
            <div className="text-container my-5 col">
              <h1>Presupuesto online</h1>
              <p>Calculá la cantidad y el precio de</p>

              <p>los materiales para realizar tu obra</p>
            </div>
          </div>

          <div className="box col">
            <div className="icon-container my-auto col-2">
              <img src={FormaIcon} alt="icon" />
            </div>
            <div className="text-container my-auto col">
              <h1>Forma de pago</h1>
              <p>Pagá con Mercado Pago</p>

              <p>o tarjeta de crédito</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-image">
    <div>
    <p style={{ margin: '1em 0 0 5em' }}><strong>Comienza ahora</strong> descargando</p>
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
    </div>
  )
}

export default Empresa
