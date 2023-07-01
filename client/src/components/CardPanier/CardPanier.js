import React from 'react'
import "./Panier.css";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import CardProduit from '../CardProduitAdmin/CardProduit';
const CardPanier = () => {
  const navigate = useNavigate()
  const notify = () => {
    
    toast.success('Payement Reussie ');
   setTimeout(() => {
       navigate('/')
     }, 3000);
  }
    

  return (
    <div>
 
        <div className="pannier-root">
      <div className="pannier-conatainer">
        <div className="pannier-container-1">
          <div className="pannier-section-1">
            <div className="section-1">
              <div>
                <h1>Pannier</h1>
              </div>
              <div>
                <p>il ny a rien dans votre pannier</p>
              </div>
                     
              <div className="pannier-produit-section">
                
                <div className='w-full flex flex-row border-b py-2 '>
                       
                         <div className='w-1/2'>
                         <h2 className='mt-3  p-1 '>nom produit: mac </h2>
                         <h2 className='mt-3  p-1 '>prix unitaire: 2000000ar</h2>

                         </div>
                          
                          <div className=''>
                          <div className='mt-3'>
                          <button className=''>+1</button>
                           <span className= 'mt-3 ml-3 bg-gray-300 p-2 '>1</span>
                          <button className='ml-3'>-1</button>
                         </div>
                          <br/>
                          <button className=' bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>retirer</button>
                          <hr/>   
                          </div>

                              
                </div>


              </div>
            </div>
          </div>
        </div>

        <div className="pannier-container-2">
          <div className="pannier-section-2">
            <div className="section-2">
              <div className="section2-container-root">
                <div className="section-container-1">
                  <div className="prix-livaraison-container">
                    <div className="prix">
                      <div className="nombre-article">
                        <span> 1 Aritcle</span>
                        <span>Livraison</span>
                      </div>

                      <div className="prix-article">
                        <span>44100ar</span>

                        <span>gratuit</span>
                      </div>
                    </div>
                            
                    <div className="panier-total">
                    <hr/>
                      <div className="total-container">
                        <div className="total-ttc">
                          <span>Total TTC</span>
                        </div>

                        <div className="total-prix">
                          <span>444000ar</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                            <hr/>
              </div>
              <div className="section-container-root-2">
                  
              <div className="code-promo">
                   <p>Vous avez un code promo ?</p>
                  </div>
                  <div className="boutton-section">

                 
                     <button    className="button-payement" onClick={notify}>Passer au payement</button>
      <Toaster />
                  </div>
                </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    </div>
  )
}

export default CardPanier