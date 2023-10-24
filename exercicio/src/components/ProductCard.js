import React from 'react'
import '../ProductCard.css'
const ProductCard = ({titulo, imagem, alt, texto, preco})=>{
return(
    <div className="card">
        <h2 className='titulo'> {titulo}</h2>
        <img src={imagem} alt={alt} className='imagem'/>
        <p className='preco'>{preco}</p>
        <p className='text'> {texto}</p>
    </div>
    )
}
export default ProductCard 