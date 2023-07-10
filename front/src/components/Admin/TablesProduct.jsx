import React , {useState, useEffect}from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/User/Navbar'
import Footer from '../../components/All/Footer'
import '../../assets/css/table.css'
import axiosInstance from '../../axios/instance'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import EditCard from './EditCard'
function TablesProducts() {
  const [produits, setProduits] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);  useEffect(() => {
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
  function openModal(product) {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedProduct(null);
  }

  async function deleteProduct(_id) {
    try {
      await axiosInstance.delete("http://localhost:3002/user/delete/" + _id);
      alert("Product deleted successfully");
      Load();
    } catch (error) {
      alert("Failed to delete product");
    }
  }
  return (
    <div>
            <Navbar/>
    <p className="sousheader" style={{
        marginLeft:"15%",
        marginBottom:"-6em",
        marginTop:"2em",  marginBottom:"2em",
    }}>LISTES ITEMS
    </p>
    <div className="logincard" style={{
		border:"0"
	}}>
    <div className="table">
		<div className="table-header">
			<div className="header__item"><a id="name" className="filter__link" href="#">Id</a></div>
			<div className="header__item"><a id="wins" className="filter__link filter__link--number" href="#">Nom</a></div>
			<div className="header__item"><a id="draws" className="filter__link filter__link--number" href="#">Prix</a></div>
			<div className="header__item"><a id="losses" className="filter__link filter__link--number" href="#">Categorie</a></div>
			<div className="header__item"><a id="total" className="filter__link filter__link--number" href="#">Description</a></div>
			<div className="header__item"><a id="total" className="filter__link filter__link--number" href="#">image</a></div>
			<div className="header__item"><a id="total" className="filter__link filter__link--number" href="#">stock</a></div>
			<div className="header__item"><a id="total" className="filter__link filter__link--number" href="#">Action</a></div>


        </div>
		<div className="table-content" style={{
      textAlign:"center",
      justifyContent:"center",
      alignItems:"cenetr"
    }}>	
    {produits.map((produit, index) => (
			<div className="table-row" key={index}>		
				<div className="table-data">{produit._id}</div>
				<div className="table-data">{produit.name}</div>
				<div className="table-data">{produit.prix}</div>
				<div className="table-data">{produit.categorie}</div>
				<div className="table-data">{produit.description}</div>
				<div className="table-data">{produit.in_stock}</div>

				<div className="table-data">  {produit.image && (
                  <img src={`http://localhost:3002/${produit.image}`} alt="Product" className='w-[50px]' style={{
                    width:"100px",
                    height:"100px",
                    textAlign:"center",
                    marginTop:"35%",
                    justifyContent:"center",
                    alignItems:"cenetr"
                  }} />
                )}</div>
				<div className="table-data">
          <FontAwesomeIcon icon={faEdit} onClick={() => openModal(produit)} style={{
                    fontSize:"40px",
                    color:"rgb(114, 110, 110)",
                    justifyContent:"center",
                    alignItems:"cenetr",
                    marginLeft:"10px",
                    marginRight:"10px"
                    }}></FontAwesomeIcon> 
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteProduct(produit._id)} style={{
                    fontSize:"40px",
                    color:"red",
                    justifyContent:"center",
                    alignItems:"cenetr",
                    marginTop:"35%",
                    marginLeft:"10px",
                    marginRight:"10px"
                    }}/>
        </div>

			</div>)
      )}

			
			
		</div>	
	</div>
	<p className="paragraph" style={{
		margin:"2em"
	}}>
Voici Les PRODUITS DISPO .</p>
    </div>
    {isModalOpen && (
        <EditCard 
          product={selectedProduct}
          closeModal={closeModal}
        />
      )}
    <Footer />
    </div>
  )
}

export default TablesProducts