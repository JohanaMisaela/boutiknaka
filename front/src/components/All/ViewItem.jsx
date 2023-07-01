import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping , faMoneyBill} from '@fortawesome/free-solid-svg-icons'
import C2 from '../../assets/images/vista.png'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../axios/instance'
function ViewItem() {
 const index = useParams()
 const [produits, setProduits] = useState([]);
   
  
 useEffect(() => {
   Load();
 }, []);

 async function Load() {
   try {
     const response = await axiosInstance.get('http://localhost:3002/user/getOne/'+index);
     setProduits(response.data.data);
   } catch (error) {
     console.log("Failed to load products:", error);
   }
 }
  return (
    <div className='cardlist'>
        <div className="filter"></div>
        
        <div className="container1" style={{ marginTop:'2em'}}>
      <div className="images" >
        <img className='img1' src={C2} />
      </div>
   
      <div className="product">
        <p className='header'>{produits.nom}</p>
        <h1 className='sousheader'>{produits.categorie}</h1>
        <h2 className='paragraph'>{produits.prix}</h2>
        <p className="desc paragraph">
       {produits.description}
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