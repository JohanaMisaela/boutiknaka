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
           <div className='text-categorie-liste'>
            <ul className='p-2'>
              {produits.map((categorie, index) => (
                <a href='#' key={index}>
                  <li className='flex justify-between items-center'>
                    {categorie} <IoIosArrowForward />
                  </li>
                </a>
              ))}
            </ul>
          </div>
            </div> 
        </div>
    
    </div>
  )
}

export default Sidebar