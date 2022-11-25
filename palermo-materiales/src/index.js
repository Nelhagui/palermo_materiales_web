import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

import CartState from './context/CartState.js'
import Producto from './views/Producto.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CartState>
    <BrowserRouter>
      <NavBar
        style={{ boxShadow: ' 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important' }}
      />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/sobre-nosotros" element={<Empresa />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/comprar" element={<Comprar />} />
        <Route path="/cotizar" element={<Cotizar />} />
        <Route path="/checkout/detail" element={<Checkout />} />
        <Route path="/checkout/data" element={<Datos />} />
        <Route path='/checkout/payment' element={<Pago/>} />
        <Route path='/producto/:id' element={<Producto/>}/>
      </Routes>
      <hr />
      <Footer />
      <hr />
      <TyC />
    </BrowserRouter>
    </CartState>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
