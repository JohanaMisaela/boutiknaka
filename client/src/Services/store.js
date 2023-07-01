import { configureStore } from '@reduxjs/toolkit'
import { panierSlice } from './panier'

export const store = configureStore({
  reducer: {
    panierSlice
  },
})