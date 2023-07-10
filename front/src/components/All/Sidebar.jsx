import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axios/instance';
import { IoIosArrowForward } from 'react-icons/io';

function Sidebar() {
    const [produits, setProduits] = useState([]);

    useEffect(() => {
      (async () => {
        await load();
      })();
    }, []);
  
    async function load() {
      const result = await axiosInstance.get('http://localhost:3002/user/getAll');
      const categories = result.data.data.map((produit) => produit.categorie.toLowerCase());
      const uniqueCategories = Array.from(new Set(categories));
  
      setProduits(uniqueCategories);
      // console.log(result.data);
    }
  
  return (
    
    <div className='sidebar'>
       
        <div className="categorie"><p style={{
            fontSize:"20px",
            color:"white"
        }}>Toutes Categories</p></div>
        <div className="listCategorie">
            <div className="cat"> 
            {produits.map((categorie, index) => (
           <div className='text-categorie-liste' key={index}>
          
            <ul className='p-2' >
                <a href='#' >
                  <li className='flex justify-between items-center' style={{
              textDecoration:"none",
              fontSize:"20px",
              color:"rgb(114, 110, 110)"
            }}>
                    {categorie} <IoIosArrowForward />
                  </li>
                </a>
            </ul>
            
          </div>
           ))}
            </div> 
        </div>
    
    </div>
  )
}

export default Sidebar