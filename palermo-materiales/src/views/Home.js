import React from 'react'
import ProductCard from '../components/ProductCard'

const Home = () => {
  return (
    <div className=''>
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
      </div><br/>
      <div className='categories-container'>
            <h1>Productos más buscados</h1>
            <div className='categories'>
                <p>Techo</p>
                <p>Pared</p>
                <p>Terminación</p>
                <p>Impermeabilizar</p>
            </div>
            <div className='products'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
      </div>
      
    </div>
  )
}

export default Home
