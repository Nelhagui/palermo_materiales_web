import React from 'react'
import ProductCard from '../components/ProductCard'
import Techo from '../assets/img/techo.svg'
import Pared from '../assets/img/pared.svg'
import Terminacion from '../assets/img/terminacion.svg'
import Impermeabilizar from '../assets/img/Impermeabilizacion.svg'

const Home = () => {
  return (
    <div className="">
      <div className="images-container">
        <div className="col-6 img1">
          <div className="image-titles">
            <h2>BUSCAR PRODUCTOS</h2>
            <h4>¿Estás buscando un producto puntual?</h4>
            <button className="btn-secondary">BUSCAR POR CATEGORIAS</button>
          </div>
        </div>
        <div className="col-6 img2">
          <div className="image-titles">
            <h2>CALCULAR PRODUCTOS</h2>
            <h4>¿Querés saber cuánto material necesitás cubrir?</h4>
            <button className="btn-primary">BUSCAR POR CATEGORIAS</button>
          </div>
        </div>
      </div>
      <br />
      <div className="categories-container">
        <h1 className='mx-auto'>Productos más buscados</h1>
        <div className="categories">
          <div className='categorie-items'><img src={Techo} alt='techo-icon' /><p>Techo</p></div>
          <div className='categorie-items'><img src={Pared} alt='Pared-icon' /><p>Pared</p></div>
          <div className='categorie-items'><img src={Terminacion} alt='Terminacion-icon' /><p>Terminacion</p></div>
          <div className='categorie-items'><img src={Impermeabilizar} style={{width: "20px"}} alt='Impermeabilizar-icon' /><p>Impermeabilizar</p></div>
        </div>
        <div className="products">
          <ProductCard className="col" />
          <ProductCard className="col" />
          <ProductCard className="col" />
        </div>
      </div>
      <div className="footer-image">
        <p style={{ margin: '2em 0 0 10em' }}>Te acompañamos</p>
        <br />
        <p style={{ margin: '2.5em 0px 0px 13em' }}>
          todos tus <strong>proyectos</strong>
        </p>
      </div>
    </div>
  )
}

export default Home
