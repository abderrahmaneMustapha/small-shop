interface cartProduct {
  id: number,
  product: string,
  name: string,
  img: string,
  quantity: number,
  price: number,
  totalPrice: number,
  newTotalPrice: number,
}

interface product {
  id: number,
  product: string,
  name: string,
  description: string,
  img: string,
  price: number,
  rating: number,
}

export {cartProduct, product}