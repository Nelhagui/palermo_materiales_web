import React from 'react'

const ProductCard = () => {
  return (
    <div className='product-card '>
        <img alt='producto' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ff02822-ddf0-45fc-b39a-f166184d7096/darwoog-529014fc-7e38-4caa-88d8-1e92830d127a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmZjAyODIyLWRkZjAtNDVmYy1iMzlhLWYxNjYxODRkNzA5NlwvZGFyd29vZy01MjkwMTRmYy03ZTM4LTRjYWEtODhkOC0xZTkyODMwZDEyN2EucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.13jC5-JlAQsUcph9BHsND721TBn7MoAhY5rVU44uUiA' />
        <p className='price'>$420,69</p>
        <p className='title'> Titulo producto</p>
        <button className='btn-primary'>Agregar al carrito</button>
    </div>
  )
}

export default ProductCard