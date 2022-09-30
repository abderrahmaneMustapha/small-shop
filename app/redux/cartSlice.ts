import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { cartProduct } from '../types'
import { twoButterAndBread, fourMilk } from "../utils/offers"

const cartProducts: cartProduct[] = [
  {
    id:2,
    product: "butter",
    name: "Butter",
    img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/butter_1f9c8.png",
    quantity: 2,
    price: 0.80,
    totalPrice:0,
    newTotalPrice:0,
  },
  {
    id:1,
    product: "milk",
    name: "Fresh Swiss milk",
    img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/glass-of-milk_1f95b.png",
    quantity: 3,
    price: 1.15,
    totalPrice:0,
    newTotalPrice:0,
  },
  {
    id:0,
    product: "bread",
    name: "Whole french bread",
    img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/bread_1f35e.png",
    quantity: 1,
    price: 1.00,
    totalPrice:0,
    newTotalPrice:0,
  },
]

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: cartProducts,
    subTotal: 0,
    discount: 0,
    total: 0,
    alert: false, // to indicate that the item that we want to add to cart is already there.
  },
  reducers: {
    addProduct: (state, action: PayloadAction<cartProduct>) => {
      let exists = state.products.filter((p)=> p.product === action.payload.product).length
      if (!exists) {
        state.products.push(action.payload)

      } else {
        state.alert = true;
      }
    },

    disableAlert: (state) => {
      state.alert = false
    },

    calcProductTotalPrice: (state) => {
      state.products.forEach((product)=>{
        product.totalPrice = product.price * product.quantity
        if(product.product === "bread") {
          product.newTotalPrice = twoButterAndBread(state.products, product)
        } else if (product.product === "milk") {
          product.newTotalPrice = fourMilk(state.products, product)
        }
      })
      state.subTotal = state.products.reduce((prev, curr) => prev + curr.totalPrice, 0)

      let total = 0
      state.products.forEach((product)=>{
        if( product.newTotalPrice > 0) {
          total += product.newTotalPrice
        } else {
          total += product.totalPrice
        }
      })

      state.total = total
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      state.products[action.payload].quantity++
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      if (state.products[action.payload].quantity>1) {
        state.products[action.payload].quantity--
      } else {
        state.products.splice(action.payload, 1)
      }
    }
  }
})

export const { disableAlert, addProduct, calcProductTotalPrice, increaseQuantity, decreaseQuantity } = cartSlice.actions
export default cartSlice.reducer
