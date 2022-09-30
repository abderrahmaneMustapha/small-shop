import { cartProduct } from '../types'

const twoButterAndBread = (products: cartProduct[], product: cartProduct) => {
  let newTotalPrice = product.newTotalPrice
  const butter = products.filter((product) => product.product === "butter");
  const quantity = butter?.[0]?.quantity
  if (quantity >= 2) {
    if(product.quantity===1) {
      newTotalPrice = product.totalPrice / 2
    } else {
      newTotalPrice = product.totalPrice - 1 + 0.5 * Math.trunc(quantity / 2)
    }
  } else {
    newTotalPrice = 0
  }
  return newTotalPrice
}

const fourMilk = (products: cartProduct[], product: cartProduct) => {
  let newTotalPrice = product.newTotalPrice
  const milk = products.filter((product) => product.product === "milk");
  const quantity = milk?.[0].quantity
  if (quantity >= 4) {
      newTotalPrice = product.totalPrice - product.price *  Math.trunc(quantity / 4)
  }
   else {
    newTotalPrice = 0
  }
  return newTotalPrice
}
export { twoButterAndBread, fourMilk }
