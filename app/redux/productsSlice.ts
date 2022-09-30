import { createSlice } from '@reduxjs/toolkit'
import { product } from '../types'

const products:product[] = [
  {
    id:0,
    product: "bread",
    name: "Whole french bread",
    description: "made in pairs a destinated to the whole world",
    img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/bread_1f35e.png",
    price: 1.00,
    rating: 4.5,
  },
  {
    id:1,
    product: "milk",
    name: "Fresh Swiss milk",
    description: "Semi skimmed milk that comes straight from the alpes farmer",
    img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/glass-of-milk_1f95b.png",
    price: 1.15,
    rating: 4.5,
  },
  {
    id:2,
    product: "butter",
    name: "Butter",
    description: "Produced by us to ensure a high quality butter",
    img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/butter_1f9c8.png",
    price: 0.80,
    rating: 4.5,
  }
]
export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: products,
  },
  reducers: {

  }
})

export default productsSlice.reducer
