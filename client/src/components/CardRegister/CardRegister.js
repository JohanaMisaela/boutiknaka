import React from 'react'
import './Register.css'
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form"
import axios from 'axios';
const CardRegister = () => {

    const {handleSubmit,register ,formState:{errors}} = useForm()

    axios.defaults.withCredentials =true
const onSubmit2 = (data)=>{
 

  axios.post('http://localhost:3002/api/register',data)
  .then(reponse =>{
       console.log(reponse);
  }).catch( error =>{
      console.log(error);
  })


}



  return (
    <>

<div className="text-connexion">
        <h2>Creer votre compte:</h2>
      </div>
      <div className="login-root">
        <div className="register-root-container">
          <div className="container-login">
            <div className="container-login-1">
              {/* ====================form==================== */}
              <form onSubmit={handleSubmit(onSubmit2)} className="fomr-container" >
                <div className="form-container-register">
                  <div className="form-1">
                    <div className="label-form">
                      <label>Email</label>
                    </div>
                    <div className="form-login-input">
                      <input type="text" {...register('emailRegister',{required:true})} />

                      {errors.emailRegister && (<p style={{color:'red'}}> your email is required</p>)}
                    </div>
                  </div>

                  <div className="form-2">
                    <div className="label-form">
                      <label>Mot de passe</label>
                    </div>
                    <div className="form-login-input">
                      <input type="password" {...register('passwordRegister',{required:true})} />
                      {errors.passwordRegister && (<p style={{color:'red'}}> your password is required</p>)}
                    </div>
                  </div>

                  <div className="form-2">
                    <div className="label-form">
                      <label>Confirmer mot de passe</label>
                    </div>
                    <div className="form-register-input">
                      <input type="password" {...register('confirmPassword',{required:true})} />
                      {errors.confirmPassword && (<p style={{color:'red'}}> please confirm your password</p>)}
                    </div>
                  </div>
                </div>

                <div className="button-container">
                  <p>Mot de passe oublié?</p>

                  <button className="button-connexion" type="submit">
                    Sauvegarder
                  </button>
                </div>
              </form>

              {/* ============================================================ */}
            </div>

            <div className="container-login-2">
              <div></div>

              <div className="container-login-2-1">
                <h3 className="text-h3-login">UTILISEZ VOTRE COMPTE AMAZON</h3>
                <p>
                  Avec Amazon Pay et Connexion avec Amazon, vous pouvez
                  facilement vous connecter et utiliser les informations
                  d’expédition et de paiement stockées dans votre compte Amazon
                  pour passer une commande dans cette boutique.
                </p>
                <hr />

                <div className="container-login-2-2">
                  <Link to="/register">
                    <p>Pas de compte? Créez-en un ici</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default CardRegister