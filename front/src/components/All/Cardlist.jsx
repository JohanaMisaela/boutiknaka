import React , { useState, useEffect } from 'react'
import axiosInstance from '../../axios/instance';
import produit from '../../assets/images/vista.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faHeart, faEye} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

function Cardlist() {
    const [produits, setProduits] = useState([]);
   console.log(produit)
  
    useEffect(() => {
      Load();
    }, []);
  
    async function Load() {
      try {
        const response = await axiosInstance.get("http://localhost:3002/user/getAll");
        setProduits(response.data.data);

      } catch (error) {
        console.log("Failed to load products:", error);
      }
    }
  return (
    <div className='cardlist'>
        <div className="filter">
           
        </div>
        {produits.map((produit, index) => (
        <div className="card"  key={index}>
       
            <div className="produitPicture">
              <Link to={`/viewpro/${produit._id}`}>{produit.image && (
                  <img src={`http://localhost:3002/${produit.image}`} alt="Product" className='w-[50px]' 
                  />
                )}</Link>  
            </div>
            <div className="produitInfo">
                <p className="header">{produit.name}</p>
                <p className="paragraph">{produit.categorie}</p>
                <p className="sousheader">{produit.prix}</p>
                <p className="paragraph">{produit.description}</p>
            </div>
            <div className="produitAction">
                <p className="paragraph" style={{
                    marginLeft:"1em",
                    marginTop:"2em"
                }}>Avalability : {produit.in_stock}</p>
                <div className="buttonAdd" >
                    <FontAwesomeIcon icon={faCartShopping} style={{
                        color:"white",
                        fontSize:"30px",
                        marginRight:"0.5em", 
                        marginLeft:"1.2em",

                    }}/> <Link to='/panier' style={{
                        textDecoration:"none"
                    }}><p className="buttonText">
                    Add to chart

                    </p></Link>
                </div>
                <div className="act">
                    <div className='actions'>
                    <FontAwesomeIcon icon={faHeart} style={{
                     color:"rgb(114, 110, 110)",
                     fontSize:"30px",
                     marginRight:"0.5em",  
                }}/> <p style={{
                    fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                    color:"rgb(114, 110, 110)",
                    fontSize:"20px",
                    marginTop:"-0.5px"
                }}>Add to WishList</p> 
                    </div>
                    <div className='actions'>
                    <FontAwesomeIcon icon={faEye} style={{
                     color:"rgb(114, 110, 110)",
                     fontSize:"30px",
                     marginRight:"0.5em",  
                }}/> <p style={{
                    fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                    color:"rgb(114, 110, 110)",
                    fontSize:"20px",
                    marginTop:"-0.5px"
                }}>View More</p> 
                    </div>

                
                

                </div>
            </div>

        </div>
         ))}
    </div>
  )
}

export default Cardlist