import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./cartSlice"
import productsReducer from "./productsSlice"

export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer
  },
})