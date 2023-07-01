import { createSlice } from '@reduxjs/toolkit';

/** 
* {Object[]} intialPanier
**/
const intialPanier = {
    items : []
}

export const panierSlice = createSlice({
    name : "panier",
    intialPanier,
    reducers : {
        addToPanier : (state,action) => {
            action.items.push(action.payload)
        }
    }
})

export const { addToPanier }  = panierSlice.actions;

export default intialPanier.reducer