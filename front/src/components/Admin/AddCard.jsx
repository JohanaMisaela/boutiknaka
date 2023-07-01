import logobnk from '../../assets/images/logobnk.jpeg'
import React, { useEffect, useState } from 'react'
import axiosInstance from '../../axios/instance';
import { useNavigate, useParams } from 'react-router-dom';

function AddCard() {
    const [produits, setProduits] = useState([]);
    const [formValues, setFormValues] = useState({
    _id: "",
    name: "",
    categorie: "",
    description: "",
    prix: "",
    image: null,
  });
    async function saveProduit(event) {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append("name", formValues.nom);
        formData.append("categorie", formValues.categorie);
        formData.append("description", formValues.description);
        formData.append("prix", formValues.prix);
        formData.append("image", formValues.image);
    
        try {
          await axiosInstance.post("http://localhost:3002/user/create", formData);
          alert("Produit registered successfully");
        } catch (error) {
          console.error("Failed to register produit:", error);
          alert("Produit registration failed");
        }
      }
      function handleFormInputChange(event) {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      }
    
      function handleImageInputChange(event) {
        const file = event.target.files[0];
        setFormValues((prevValues) => ({
          ...prevValues,
          image: file,
        }));
      }
    
    
  return (
    <div className="addcard" style={{
        width:"70%",
        marginLeft:"15%",
        marginTop:"5em",
    }}>
         
    <div className="card">
            <div style={{
                height: "400px",
                width:"70%"
            }}>
                <div className="logobnk" style={{
            width:"5em",
            height:"5em",
            marginTop:'1em',
            marginBottom:'3em',
            marginLeft:"50%"
        }}>
            <img src={logobnk} alt=""  style={{
            width:"100%",
            height:"100%"
        }}/>
        </div>
            <form > 
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    paddingTop:"1em"   
                }}>
                    <label htmlFor="nameItem" style={{
                        fontSize:"20px",
                        color:"rgb(114, 110, 110)",
                        fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                        marginLeft:"10em",
                        marginBottom:"15px"
                    }}>Nom du produit : </label>
                    <input type="text" name="nom" id="" style={{
                        border:"1px solid #ededed",
                        width:"300px",
                        height:"30px",
                        marginLeft:"5em"
                    }} 
                    onChange={handleFormInputChange}
                    value={formValues.nom}
                    />
                    </div>
                    <div style={{
                    display:"flex",
                    flexDirection:"row",
                    paddingTop:"1em"   
                }}>
                    <label htmlFor="nameItem" style={{
                        fontSize:"20px",
                        color:"rgb(114, 110, 110)",
                        fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                        marginLeft:"10em",
                        marginBottom:"15px"

                    }}>categorie : </label>
                    <input type="text" name="categorie" id="" style={{
                        border:"1px solid #ededed",
                        width:"300px",
                        height:"30px",
                        marginLeft:"6.7em"
                    }} 
                    onChange={handleFormInputChange}
                    value={formValues.categorie}
                    />
                    </div>
                    <div style={{
                    display:"flex",
                    flexDirection:"row",
                    paddingTop:"1em"   
                }}>
                    <label htmlFor="nameItem" style={{
                        fontSize:"20px",
                        color:"rgb(114, 110, 110)",
                        fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                        marginLeft:"10em",
                        marginBottom:"15px"

                    }}>Prix du produit : </label>
                    <input type="text" name="prix" id="" style={{
                        border:"1px solid #ededed",
                        width:"300px",
                        height:"30px",
                        marginLeft:"5.5em"
                    }}
                    onChange={handleFormInputChange}
                    value={formValues.prix}
                    />
                    </div>
                    <div style={{
                    display:"flex",
                    flexDirection:"row",
                    paddingTop:"1em"   
                }}>
                    <label htmlFor="nameItem" style={{
                        fontSize:"20px",
                        color:"rgb(114, 110, 110)",
                        fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                        marginLeft:"10em",
                        marginBottom:"15px"

                    }}>Description : </label>
                    <input type="text" name="description" id="" style={{
                        border:"1px solid #ededed",
                        width:"300px",
                        height:"30px",
                        marginLeft:"8.3em"
                    }}
                    onChange={handleFormInputChange}
                    value={formValues.description}
                    />
                    </div>
                   
                    <div style={{
                    display:"flex",
                    flexDirection:"row",
                    paddingTop:"1em"   
                }}>
                    <label htmlFor="nameItem" style={{
                       fontSize:"20px",
                       color:"rgb(114, 110, 110)",
                       fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
                       marginLeft:"10em",
                       marginBottom:"15px"

                    }}>Image du Produit : </label>
                    <input type="file" name="image" id="" style={{
                        border:"1px solid #ededed",
                        width:"300px",
                        height:"30px",
                        background:"#ededed",
                        color:"rgb(114, 110, 110)",
                        marginLeft:"3.4em"
                    
                    }}
                    onChange={handleImageInputChange}
                    />
                    </div>

                
    
                <button type="submit" style={{
                    backgroundColor:"#c02b27",
                    marginTop:"20px",
                    marginLeft:"5em"
                }}
              onClick={saveProduit}
                >
                    Ajouter produit 
                </button>
            </form>
            </div>
    </div>
    <div style={{
        width:"30%",
        marginLeft:"70%",
        height:"400px",
        backgroundColor:"#c02b27",
        marginTop:"-400px"
    }}>

    </div>
        </div>  )
}

export default AddCard