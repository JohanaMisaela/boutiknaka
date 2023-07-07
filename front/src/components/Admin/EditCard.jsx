import React , {useState}from 'react'
import axiosInstance from '../../axios/instance';
import logobnk from '../../assets/images/logobnk.jpeg'

function EditCard({ product, closeModal }) {
  const [name, setName] = useState(product.name);
  const [categorie, setCategorie] = useState(product.categorie);
  const [description, setDescription] = useState(product.description);
  const [prix, setPrix] = useState(product.prix);
  const [image, setImage] = useState(null);
  const [in_sotck, setIn_stock] = useState(product.in_stock)
  async function updateProduct(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("categorie", categorie);
    formData.append("description", description);
    formData.append("prix", prix);
    formData.append("in_stock", in_sotck);
    formData.append("image", image);



    try {
      await axiosInstance.patch(
        "http://localhost:3002/user/update/"+product._id,
        formData
      );
      alert("Product updated successfully");
      closeModal();
    } catch (error) {
      alert("Failed to update product");
    }
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
            <form onSubmit={updateProduct}> 
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
                    <input type="text" name="name" id="" style={{
                        border:"1px solid #ededed",
                        width:"300px",
                        height:"30px",
                        marginLeft:"5em"
                    }} 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
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
                    value={categorie} 
                    onChange={(e) => setCategorie(e.target.value)}
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
                    value={prix} 
                    onChange={(e) => setPrix(e.target.value)}
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
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
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

                    }}>Stock : </label>
                    <input type="text" name="in_stock" id="" style={{
                        border:"1px solid #ededed",
                        width:"300px",
                        height:"30px",
                        marginLeft:"8.3em"
                    }}
                    value={in_sotck} 
                    onChange={(e) => setIn_stock(e.target.value)}
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
                    onChange={(e) => setImage(e.target.files[0])}                    />
                    </div>

                
    
                <button type="submit" style={{
                    backgroundColor:"#c02b27",
                    marginTop:"20px",
                    marginLeft:"5em"
                }}
                >
Sauvegarder modifications
                </button>
            <button onClick={closeModal}  className='bg-red-500 text-white py-1 px-4 text-sm rounded-md shadow-sm hover:shadow-md'>Cancel</button>
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

export default EditCard