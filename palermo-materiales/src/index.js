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

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
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
      </Routes>
      <hr/>
      <Footer />
      <hr/>
      <TyC />
    </BrowserRouter>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
