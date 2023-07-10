import React from 'react'
import Cardcrud from '../../components/CardProduitAdmin/Cardcrud'
import CardProduit from '../../components/CardProduitAdmin/CardProduit'
import ProductTable from '../../components/CardProduitAdmin/ProductTable'
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin'

const AdminGestoinProduit = () => {
  return (
    <div className='text-slate-900 md:grid md:grid-cols-4 gap-0'>
        <NavbarAdmin />
        <div className='space-y-11 md:col-span-3'>
            <Cardcrud />
            <ProductTable />
            

            {/* COPIEO makany amin'ilay page liste produit */}
            <div className='md:grid md:grid-cols-4 md:gap-3 py-4 w-[90%]'>
               
            </div>
            {/* COPIEO makany amin'ilay page liste produit */}
        </div>
    </div>
  )
}

export default AdminGestoinProduit