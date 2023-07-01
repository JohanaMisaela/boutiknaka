import React from 'react'
import './CardProduit.css'
import imgTest from "../../assets/jpg/apple-iphone-14-pro-max-1.jpg"
import {BiCartAdd} from 'react-icons/bi'
import {AiOutlineHeart } from 'react-icons/ai'
const CardProduit = ({data}) => {
  return (
    <>

          <div className='produit-root-container'>
                  
                 
               <div className='produit-container'>
               <img src={`http://localhost:3002/file/${data.image}`} alt='prduct' width={200}/>
                        
                      <h1>{data.name}</h1>
                      <p>type: {data.categorie} </p>
                      <p>prix: {data.prix}</p>
               </div>
                   <div className='button-product-container'>
                           <BiCartAdd size={30}/>
                           <AiOutlineHeart size={30}/>
                   </div>
                    
          </div>

    </>
  )
}

export default CardProduit