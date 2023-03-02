import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home.js'
import Empresa from './views/Empresa.js'
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'
import Contacto from './views/Contacto.js'
import Comprar from './views/Comprar.js'
import Cotizar from './views/Cotizar.js'
import TyC from './components/TyC.js'
import Checkout from './views/Checkout.js'
import Datos from './views/Datos.js'
import Pago from './views/Pago.js'
// import TerminosCondiciones from './views/TerminosCondiciones.js'
import PoliticasPrivacidad from './views/PoliticasPrivacidad.js'
import CartState from './context/CartState.js'
import Producto from './views/Producto.js'
import AgregarProducto from './views/AgregarProducto.js'
import AgregarProductoComprar from './views/AgregarProductoComprar.js'
import ProductoPared from './views/ProductoPared.js'
import ValidarRegistro from './views/ValidarRegistro.js'
import RecuperarPass from './views/RecuperarPass.js'
import ValidaRecuperarPass from './views/ValidaRecuperarPass.js'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CartState>
    <HashRouter>
      <NavBar style={{ boxShadow: ' 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important' }} />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path='/recuperar_password' element={<RecuperarPass/>}/>
        <Route path="/sobre-nosotros" element={<Empresa />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/comprar" element={<Comprar />} />
        <Route path="/comprar/agregar/:id" element={<AgregarProductoComprar />} />
        <Route path="/cotizar" element={<Cotizar />} />
        <Route path="/checkout/detail" element={<Checkout />} />
        <Route path="/checkout/data" element={<Datos />} />
        <Route path='/checkout/payment' element={<Pago/>} />
        <Route path='/producto/:id' element={<Producto/>}/>
        <Route path='/producto-techo/:id' element={<ProductoPared/>}/>
        <Route path='/producto/agregar/:id' element={<AgregarProducto/>}/>
        {/* <Route path='/terminos-condiciones' element={<TerminosCondiciones/>}/> */}
        <Route path='/politicas-privacidad' element={<PoliticasPrivacidad/>}/>
        <Route path='/validar_registro/:token' element={<ValidarRegistro/>}/>
        <Route path='/recuperar_password/validar/:token' element={<ValidaRecuperarPass/>}/>
        
      </Routes>
      <Footer />
      <TyC />
    </HashRouter>
    </CartState>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
