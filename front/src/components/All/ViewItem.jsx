import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping , faMoneyBill} from '@fortawesome/free-solid-svg-icons'
import C2 from '../../assets/images/vista.png'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../axios/instance'
function ViewItem() {
 const {productId} = useParams()
 const [produit, setProduit] = useState([]);
   
  
 useEffect(() => {
   Load();
 }, [productId]);

 async function Load() {
   try {
     const response = await axiosInstance.get('http://localhost:3002/user/getOne/'+productId);
     setProduit(response.data.data);
   } catch (error) {
     console.log("Failed to load products:", error);
   }
 }
  return (
    <div className='cardlist'>
        <div className="filter"></div>
        
        <div className="container1" style={{ marginTop:'2em'}}>
      <div className="images" >
      {produit.image && (
                  <img src={`http://localhost:3002/${produit.image}`} alt="Product" className='img1' 
                  />
                )}
      </div>
   
      <div className="product">
        <p className='header'>{produit.name}</p>
        <h1 className='sousheader'>{produit.categorie}</h1>
        <h2 className='paragraph'>{produit.prix}</h2>
        <p className="desc paragraph">
       {produit.description}
        </p>
        <div className="buttons" >
          <button className="add">Add to Cart
          </button>
          <button className="like"><span>
          <FontAwesomeIcon icon={faCartShopping} style={{
                   fontSize:"15px"
                }}/>
            </span></button>
        </div>
        <div className="buttons" >
          <button className="add1">Proceder au paiement 
          </button>
          <button className="like1"><span>
          <FontAwesomeIcon icon={faMoneyBill} style={{
                   fontSize:"15px"
                }}/>
            </span></button>
        </div>
     
    </div>
        </div>
    </div>
  )
}

export default ViewItem