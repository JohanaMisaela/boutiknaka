import React ,{  useState} from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../../axios/instance';
import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


function Login() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState();
    const {
      handleSubmit,
      register,
      formState: { errors },
    } = useForm();
  
    axiosInstance.defaults.withCredentials = true;
    const onSubmit = (data) => {
      axiosInstance
          .post("http://localhost:3002/api/login", data)
          .then((reponse) => {
              console.log(reponse.data);
              document.cookie = `token_jwt=${reponse.data.token}`;
              const status = reponse.data.data[0].type;
              console.log(status)
              if(status === "admin" ){
              Swal.fire({
                  icon: 'success',
                  title: 'Success',
                  text: 'You are connected as Administrator',
              })
              navigate("/admin")
              }else{
                  Swal.fire({
                  icon: 'success',
                  title: 'Success',
                  text: 'You are connected',
              })
          navigate('/')
              }
          })
          .catch ((err) => {
          Swal.fire({
          icon: 'error',
          title: 'error',
          text: 'Invalid credentials',
          }) 
          const error = typeof(error.reponse.data.message) === 'string' ? error.reponse.data.message : error.reponse.data.message[0]
          console.error(err)
          } )
      
      }
   
  return ( 
    <div>
        <p className="sousheader" style={{
            marginLeft:"15%",
            marginBottom:"-6em",
            marginTop:"2em"
        }}>
Connectez-vous à votre compte
        </p>
         <div className='logincard'>
            <form   onSubmit={handleSubmit(onSubmit)}
>
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    paddingTop:"5em"
                    
                }}>
                    <label htmlFor="email" style={{
                        fontSize:"30px",
                        color:"rgb(114, 110, 110)",
                        fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                        marginLeft:"13em"
                    }}>Email : </label>
                    <input type="text" name="email" id="email"  
                     style={{
                        width:"40em",
                        height:"40px",
                        marginLeft:"13.5em",
                        border:"1px solid #ededed"
                        
                    }}
                    {...register("email", { required: true })}
                      />
                      {errors.email && (
                        <p style={{ color: "red" }}>Your email is require </p>
                      )}
                   
                </div>
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    paddingTop:"5em"
                    
                }}>
                    <label htmlFor="password" style={{
                        fontSize:"30px",
                        color:"rgb(114, 110, 110)",
                        fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                        marginLeft:"13em"
                    }}>Mot de passe : </label>
                    <input type="password" name="password" id="password"  
                    style={{
                        width:"40em",
                        height:"40px",
                        marginLeft:"5em",
                        border:"1px solid #ededed"
                    }}
                    {...register("password", { required: "true" })}
                    />
                    {errors.password && (
                      <p style={{ color: "red" }}>
                        {" "}
                        Your password is require
                      </p>
                    )}
                    
                    
                </div>
                <p className="paragraph" style={{
                    textAlign:"center",
                    marginLeft:"13.5em",
                    marginTop:"3em"
                }}>Mot de passe oublier ?</p>
                <button type="submit" style={{
                    padding:"1.5em",
                    marginLeft:"17em",
                    borderRadius:"7px",
                    backgroundColor:"black"
                }}>
                    Se connecter  
                </button>
            </form>

<hr style={{
    width:"80%",
    marginLeft:"7em",
    marginTop:"2em",
    border:"1px solid rgba(0,0,0,.1)",
    marginBottom:"2em",
}}/>
 <p className="paragraph" style={{
    marginLeft:"1em"
 }}>Login with</p>
    <p className="header" style={{
        textAlign:"center",
        textTransform:"uppercase",
        color:"black"
    }}>Utiliser votre compte Amazon</p>
    <p className="paragraph" style={{
        marginLeft:"1em",
        marginLeft:"1em"
    }}>
    Avec Amazon Pay et Connexion avec Amazon,
    vous pouvez facilement vous connecter et utiliser les informations d’expédition et de paiement stockées dans votre compte Amazon pour passer une commande dans cette boutique.
    </p>
    <hr style={{
    width:"80%",
    marginLeft:"7em",
    marginTop:"3em",
    border:"1px solid rgba(0,0,0,.1)",
    marginBottom:"2em",
}}/>
 <p className="paragraph" style={{
                    textAlign:"center",
                    marginTop:"3em",
                    marginBottom:"3em"
                }}>Pas de compte ?<Link to='/signup' style={{
                    textDecoration:"none",
                    color:"rgb(114, 110, 110)"
                }}> Creez-en un ici
                </Link></p>
        </div>
    </div>
   
  )
}

export default Login